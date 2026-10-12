-- TravelSolutions admin/content schema.
-- Run this once in the Supabase SQL Editor (Project -> SQL Editor -> New query -> paste -> Run).
-- Safe to re-run: uses "if not exists" / "or replace" throughout.

-- ============================================================
-- 1. Admin allowlist
-- ============================================================
-- A user can write to content tables only if their auth.uid() appears here.
-- Capped at 5 rows by the trigger below.
create table if not exists public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  created_at timestamptz not null default now()
);

create or replace function public.enforce_admin_limit()
returns trigger
language plpgsql
as $$
begin
  if (select count(*) from public.admins) >= 5 then
    raise exception 'Maximum of 5 admin accounts allowed';
  end if;
  return new;
end;
$$;

drop trigger if exists trg_enforce_admin_limit on public.admins;
create trigger trg_enforce_admin_limit
  before insert on public.admins
  for each row execute function public.enforce_admin_limit();

alter table public.admins enable row level security;

-- Each user can see only their own admins row (enough for the app's "am I an
-- admin?" check on login). Querying the admins table from its own policy
-- (e.g. "auth.uid() in (select user_id from admins)") causes infinite
-- recursion in Postgres — this self-only check avoids that entirely.
drop policy if exists "admins can read admins" on public.admins;
drop policy if exists "users can read own admin row" on public.admins;
create policy "users can read own admin row" on public.admins
  for select using (auth.uid() = user_id);

-- ============================================================
-- Helper: is the current user an admin?
-- ============================================================
create or replace function public.is_admin()
returns boolean
language sql
stable
as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;

-- ============================================================
-- 2. Tour packages
-- ============================================================
create table if not exists public.packages (
  id uuid primary key default gen_random_uuid(),
  title_en text not null,
  title_ml text not null,
  description_en text not null default '',
  description_ml text not null default '',
  regular_rate numeric(10, 2) not null,
  offer_rate numeric(10, 2),
  inclusions_en text[] not null default '{}',
  inclusions_ml text[] not null default '{}',
  days integer not null default 1,
  trip_date date,
  bus_label text,
  total_seats integer not null default 0,
  available_seats integer not null default 0,
  is_published boolean not null default true,
  is_cancelled boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.packages add column if not exists is_cancelled boolean not null default false;

-- ============================================================
-- 3. Hotel rooms
-- ============================================================
create table if not exists public.hotel_rooms (
  id uuid primary key default gen_random_uuid(),
  hotel_name text not null,
  room_title_en text not null,
  room_title_ml text not null,
  description_en text not null default '',
  description_ml text not null default '',
  location text,
  regular_rate numeric(10, 2) not null,
  offer_rate numeric(10, 2),
  inclusions_en text[] not null default '{}',
  inclusions_ml text[] not null default '{}',
  total_rooms integer not null default 0,
  available_rooms integer not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ============================================================
-- 4. Fleet (buses & mini travellers)
-- ============================================================
create table if not exists public.fleet_vehicles (
  id uuid primary key default gen_random_uuid(),
  vehicle_type text not null default 'bus', -- 'mini-bus' | 'bus' | 'large-bus' | 'tempo-traveller' | free text
  name_en text not null,
  name_ml text not null,
  seats_en text not null,
  seats_ml text not null,
  regular_rate numeric(10, 2) not null,
  offer_rate numeric(10, 2),
  inclusions_en text[] not null default '{}',
  inclusions_ml text[] not null default '{}',
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ============================================================
-- 5. Gallery (standalone images not tied to a package/hotel/vehicle)
-- ============================================================
create table if not exists public.gallery_items (
  id uuid primary key default gen_random_uuid(),
  caption_en text,
  caption_ml text,
  category text not null default 'general', -- 'general' | 'package' | 'hotel' | 'fleet'
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.gallery_items add column if not exists updated_at timestamptz not null default now();

-- ============================================================
-- 6. Media — every image for every entity above, many-per-entity
-- ============================================================
create table if not exists public.media (
  id uuid primary key default gen_random_uuid(),
  entity_type text not null, -- 'package' | 'hotel' | 'fleet' | 'gallery'
  entity_id uuid not null,
  storage_path text not null,   -- path inside the storage bucket
  public_url text not null,     -- cached public URL for fast reads
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists media_entity_idx on public.media (entity_type, entity_id);

-- ============================================================
-- Row Level Security: public can read published rows; only admins can write.
-- ============================================================
alter table public.packages enable row level security;
alter table public.hotel_rooms enable row level security;
alter table public.fleet_vehicles enable row level security;
alter table public.gallery_items enable row level security;
alter table public.media enable row level security;

-- Public read: published rows only. Admins: read everything (for the dashboard).
drop policy if exists "public read published packages" on public.packages;
create policy "public read published packages" on public.packages
  for select using (is_published = true or public.is_admin());

drop policy if exists "public read published hotel_rooms" on public.hotel_rooms;
create policy "public read published hotel_rooms" on public.hotel_rooms
  for select using (is_published = true or public.is_admin());

drop policy if exists "public read published fleet_vehicles" on public.fleet_vehicles;
create policy "public read published fleet_vehicles" on public.fleet_vehicles
  for select using (is_published = true or public.is_admin());

drop policy if exists "public read published gallery_items" on public.gallery_items;
create policy "public read published gallery_items" on public.gallery_items
  for select using (is_published = true or public.is_admin());

-- Media rows are never sensitive on their own; allow public read of all of them.
drop policy if exists "public read media" on public.media;
create policy "public read media" on public.media
  for select using (true);

-- Admin-only writes on every content table.
drop policy if exists "admin write packages" on public.packages;
create policy "admin write packages" on public.packages
  for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "admin write hotel_rooms" on public.hotel_rooms;
create policy "admin write hotel_rooms" on public.hotel_rooms
  for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "admin write fleet_vehicles" on public.fleet_vehicles;
create policy "admin write fleet_vehicles" on public.fleet_vehicles
  for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "admin write gallery_items" on public.gallery_items;
create policy "admin write gallery_items" on public.gallery_items
  for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "admin write media" on public.media;
create policy "admin write media" on public.media
  for all using (public.is_admin()) with check (public.is_admin());

-- ============================================================
-- Storage bucket + policies for the "media" bucket.
-- Create the bucket first via Dashboard -> Storage -> New bucket -> name: media -> Public bucket: ON.
-- Then run the policies below (they target storage.objects, scoped to this bucket).
-- ============================================================
drop policy if exists "public read media bucket" on storage.objects;
create policy "public read media bucket" on storage.objects
  for select using (bucket_id = 'media');

drop policy if exists "admin upload media bucket" on storage.objects;
create policy "admin upload media bucket" on storage.objects
  for insert with check (bucket_id = 'media' and public.is_admin());

drop policy if exists "admin update media bucket" on storage.objects;
create policy "admin update media bucket" on storage.objects
  for update using (bucket_id = 'media' and public.is_admin());

drop policy if exists "admin delete media bucket" on storage.objects;
create policy "admin delete media bucket" on storage.objects
  for delete using (bucket_id = 'media' and public.is_admin());
