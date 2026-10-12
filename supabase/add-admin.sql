-- Run this AFTER you've invited someone via
-- Supabase Dashboard -> Authentication -> Users -> "Invite user" (enter their email).
-- That creates their row in auth.users; this script promotes them to admin
-- (gives them write access to packages/hotels/fleet/gallery via the RLS
-- policies in schema.sql). The trigger in schema.sql blocks a 6th admin.
--
-- Replace the email below and run in the SQL Editor, once per admin (up to 5 times).

insert into public.admins (user_id, email)
select id, email
from auth.users
where email = 'REPLACE_WITH_INVITED_EMAIL@example.com'
on conflict (user_id) do nothing;

-- To check who's currently an admin:
-- select * from public.admins;

-- To remove an admin (e.g. someone leaves):
-- delete from public.admins where email = 'someone@example.com';
