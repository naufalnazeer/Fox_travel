-- Test/demo data covering every state the admin portal and public site handle:
-- published vs draft, active vs completed vs cancelled trips, with/without an
-- offer rate, with/without a minimum-km fleet fare, multiple photos per item
-- (to see the card carousel cycle), and a couple of single/no-photo items.
--
-- Run in the Supabase SQL Editor (Project -> SQL Editor -> New query -> paste -> Run).
-- This is NOT safe to re-run — running it twice will insert duplicate rows
-- (unlike schema.sql, there's no "if not exists" guard here, since test rows
-- are meant to be thrown away, not kept in sync). Delete the rows below any
-- time with the cleanup block at the bottom.
--
-- Photos are placeholder images from picsum.photos (no real file in your
-- storage bucket) — fine for testing, but don't rely on them for production
-- content, and deleting one in the admin "Photos" manager is harmless (it
-- just no-ops on the missing storage file, then removes the row).

-- ============================================================
-- Packages — one of each status
-- ============================================================
insert into public.packages
  (id, title_en, title_ml, description_en, description_ml, regular_rate, offer_rate,
   inclusions_en, inclusions_ml, days, trip_date, bus_label, total_seats, available_seats,
   is_published, is_cancelled)
values
  -- Active, published, has an offer rate, future trip
  ('a0000000-0000-0000-0000-000000000001', 'Munnar Hill Escape', 'മൂന്നാർ ഹിൽ എസ്കേപ്പ്',
   'A 3-day tour through tea estates, waterfalls, and misty hill views.', 'തേയിലത്തോട്ടങ്ങളും വെള്ളച്ചാട്ടങ്ങളും മൂടൽമഞ്ഞ് മലനിരകളും ഉൾപ്പെടുന്ന 3 ദിവസത്തെ യാത്ര.',
   8500, 6999, array['Breakfast & Dinner','AC Stay','Sightseeing'], array['പ്രാതലും അത്താഴവും','എസി താമസം','കാഴ്ച സ്ഥലങ്ങൾ'],
   3, (current_date + interval '20 days')::date, '35 Seater Bus', 35, 12, true, false),

  -- Active, published, no offer rate, no bus assigned yet
  ('a0000000-0000-0000-0000-000000000002', 'Wayanad Wildlife Trail', 'വയനാട് വൈൽഡ്‌ലൈഫ് ട്രെയിൽ',
   'Jungle safari, trekking, and a stay at the edge of the forest.', 'ജംഗിൾ സഫാരിയും ട്രെക്കിങ്ങും വനത്തിന്റെ അരികിൽ താമസവും.',
   7200, null, array['Safari Ride','Trekking Guide'], array['സഫാരി യാത്ര','ട്രെക്കിങ് ഗൈഡ്'],
   2, (current_date + interval '35 days')::date, null, 20, 20, true, false),

  -- Completed — trip_date already in the past, nothing admin needs to toggle
  ('a0000000-0000-0000-0000-000000000003', 'Alleppey Backwaters Cruise', 'ആലപ്പുഴ ബാക്ക്‌വാട്ടേഴ്സ് ക്രൂയിസ്',
   'Houseboat stay with a sunset cruise through the backwaters.', 'അസ്തമയ ക്രൂയിസോടുകൂടിയ ഹൗസ്ബോട്ട് താമസം.',
   9800, 8500, array['Houseboat Stay','All Meals'], array['ഹൗസ്ബോട്ട് താമസം','എല്ലാ ഭക്ഷണവും'],
   1, (current_date - interval '10 days')::date, '20 Seater Bus', 20, 0, true, false),

  -- Cancelled — admin explicitly cancelled it, trip_date still in the future
  ('a0000000-0000-0000-0000-000000000004', 'Ooty Tea Gardens Tour', 'ഊട്ടി ടീ ഗാർഡൻസ് ടൂർ',
   'Scenic toy train ride and a tour of the tea gardens.', 'മനോഹരമായ ടോയ് ട്രെയിൻ യാത്രയും തേയിലത്തോട്ട സന്ദർശനവും.',
   6400, null, array['Toy Train Ticket','Garden Entry'], array['ടോയ് ട്രെയിൻ ടിക്കറ്റ്','ഗാർഡൻ പ്രവേശനം'],
   2, (current_date + interval '15 days')::date, null, 25, 25, true, true),

  -- Draft — unpublished, shouldn't appear on the public site at all
  ('a0000000-0000-0000-0000-000000000005', 'Kodaikanal Lake Getaway', 'കൊടൈക്കനാൽ തടാക യാത്ര',
   'A relaxed weekend by the lake, still being finalised.', 'തടാകത്തിനരികിലെ ശാന്തമായ വാരാന്ത്യം, ഇപ്പോഴും തയ്യാറാക്കിക്കൊണ്ടിരിക്കുന്നു.',
   7000, null, array['Boating','Lake View Stay'], array['ബോട്ടിങ്','തടാക കാഴ്ച താമസം'],
   2, (current_date + interval '40 days')::date, null, 30, 30, false, false);

-- ============================================================
-- Hotels — with/without an offer rate, with/without a location, one draft
-- ============================================================
insert into public.hotel_rooms
  (id, hotel_name, room_title_en, room_title_ml, description_en, description_ml, location,
   regular_rate, offer_rate, inclusions_en, inclusions_ml, total_rooms, available_rooms, is_published)
values
  ('b0000000-0000-0000-0000-000000000001', 'Greenwood Resort', 'Deluxe Valley View Room', 'ഡീലക്സ് വാലി വ്യൂ റൂം',
   'Spacious room with a private balcony overlooking the valley.', 'താഴ്‌വര കാഴ്ചയുള്ള സ്വകാര്യ ബാൽക്കണിയോടുകൂടിയ വിശാലമായ മുറി.',
   'Munnar', 4200, 3500, array['Free WiFi','Breakfast Included'], array['സൗജന്യ വൈഫൈ','പ്രാതൽ ഉൾപ്പെടെ'],
   10, 6, true),

  ('b0000000-0000-0000-0000-000000000002', 'Lakeside Inn', 'Standard Twin Room', 'സ്റ്റാൻഡേർഡ് ട്വിൻ റൂം',
   'Simple, comfortable twin room near the lake.', 'തടാകത്തിനടുത്തുള്ള ലളിതവും സൗകര്യപ്രദവുമായ ട്വിൻ റൂം.',
   null, 2200, null, array['Free WiFi'], array['സൗജന്യ വൈഫൈ'],
   15, 15, true),

  ('b0000000-0000-0000-0000-000000000003', 'Hilltop Cottages', 'Family Cottage (Draft)', 'ഫാമിലി കോട്ടേജ് (ഡ്രാഫ്റ്റ്)',
   'Still being photographed and priced.', 'ഇപ്പോഴും ഫോട്ടോയെടുത്തും വില നിശ്ചയിച്ചും വരുന്നു.',
   'Thekkady', 5000, null, array['AC','Kitchenette'], array['എസി','കിച്ചനെറ്റ്'],
   5, 5, false);

-- ============================================================
-- Fleet — different vehicle types, with/without a minimum-km fare, one draft
-- ============================================================
insert into public.fleet_vehicles
  (id, vehicle_type, name_en, name_ml, seats_en, seats_ml, regular_rate, offer_rate,
   minimum_km, minimum_fare, inclusions_en, inclusions_ml, is_published)
values
  ('c0000000-0000-0000-0000-000000000001', 'mini-bus', 'Swift Mini Bus', 'സ്വിഫ്റ്റ് മിനി ബസ്', '12 Seater', '12 സീറ്റർ',
   18, 15, 30, 500, array['AC','Music System'], array['എസി','മ്യൂസിക് സിസ്റ്റം'], true),

  ('c0000000-0000-0000-0000-000000000002', 'bus', 'Comfort Travel Bus', 'കംഫർട്ട് ട്രാവൽ ബസ്', '35 Seater', '35 സീറ്റർ',
   22, null, 50, 1200, array['AC','Pushback Seats','Music System'], array['എസി','പുഷ്ബാക്ക് സീറ്റുകൾ','മ്യൂസിക് സിസ്റ്റം'], true),

  -- No minimum-km fare set — tests the fallback when that's left blank
  ('c0000000-0000-0000-0000-000000000003', 'large-bus', 'Grand Tourer', 'ഗ്രാൻഡ് ടൂററർ', '45 Seater', '45 സീറ്റർ',
   25, 21, null, null, array['AC','Entertainment System'], array['എസി','വിനോദ സംവിധാനം'], true),

  ('c0000000-0000-0000-0000-000000000004', 'tempo-traveller', 'City Tempo (Draft)', 'സിറ്റി ടെമ്പോ (ഡ്രാഫ്റ്റ്)', '8 Seater', '8 സീറ്റർ',
   16, null, 20, 400, array['AC'], array['എസി'], false);

-- ============================================================
-- Gallery — different categories, with/without captions, one draft
-- ============================================================
insert into public.gallery_items (id, caption_en, caption_ml, category, is_published)
values
  ('d0000000-0000-0000-0000-000000000001', 'Sunset over the backwaters', 'ബാക്ക്‌വാട്ടറിലെ അസ്തമയം', 'general', true),
  ('d0000000-0000-0000-0000-000000000002', null, null, 'package', true),
  ('d0000000-0000-0000-0000-000000000003', 'Our fleet, ready for the next trip', 'അടുത്ത യാത്രയ്ക്കായി തയ്യാറായ ഞങ്ങളുടെ വാഹനവ്യൂഹം', 'fleet', true),
  ('d0000000-0000-0000-0000-000000000004', 'Hotel pool (draft)', 'ഹോട്ടൽ പൂൾ (ഡ്രാഫ്റ്റ്)', 'hotel', false);

-- ============================================================
-- Media — 2-3 photos for most items (carousel), 1 for a couple, 0 for one
-- ============================================================
insert into public.media (entity_type, entity_id, storage_path, public_url, sort_order)
values
  -- Package photos
  ('package', 'a0000000-0000-0000-0000-000000000001', 'seed/munnar-1', 'https://picsum.photos/seed/munnar1/800/600', 0),
  ('package', 'a0000000-0000-0000-0000-000000000001', 'seed/munnar-2', 'https://picsum.photos/seed/munnar2/800/600', 1),
  ('package', 'a0000000-0000-0000-0000-000000000001', 'seed/munnar-3', 'https://picsum.photos/seed/munnar3/800/600', 2),
  ('package', 'a0000000-0000-0000-0000-000000000002', 'seed/wayanad-1', 'https://picsum.photos/seed/wayanad1/800/600', 0),
  ('package', 'a0000000-0000-0000-0000-000000000002', 'seed/wayanad-2', 'https://picsum.photos/seed/wayanad2/800/600', 1),
  ('package', 'a0000000-0000-0000-0000-000000000003', 'seed/alleppey-1', 'https://picsum.photos/seed/alleppey1/800/600', 0),
  ('package', 'a0000000-0000-0000-0000-000000000004', 'seed/ooty-1', 'https://picsum.photos/seed/ooty1/800/600', 0),
  ('package', 'a0000000-0000-0000-0000-000000000004', 'seed/ooty-2', 'https://picsum.photos/seed/ooty2/800/600', 1),
  -- (package 5, Kodaikanal, intentionally has no photos yet — tests the placeholder icon)

  -- Hotel photos
  ('hotel', 'b0000000-0000-0000-0000-000000000001', 'seed/greenwood-1', 'https://picsum.photos/seed/greenwood1/800/600', 0),
  ('hotel', 'b0000000-0000-0000-0000-000000000001', 'seed/greenwood-2', 'https://picsum.photos/seed/greenwood2/800/600', 1),
  ('hotel', 'b0000000-0000-0000-0000-000000000002', 'seed/lakeside-1', 'https://picsum.photos/seed/lakeside1/800/600', 0),
  ('hotel', 'b0000000-0000-0000-0000-000000000003', 'seed/hilltop-1', 'https://picsum.photos/seed/hilltop1/800/600', 0),

  -- Fleet photos
  ('fleet', 'c0000000-0000-0000-0000-000000000001', 'seed/minibus-1', 'https://picsum.photos/seed/minibus1/800/600', 0),
  ('fleet', 'c0000000-0000-0000-0000-000000000001', 'seed/minibus-2', 'https://picsum.photos/seed/minibus2/800/600', 1),
  ('fleet', 'c0000000-0000-0000-0000-000000000002', 'seed/comfortbus-1', 'https://picsum.photos/seed/comfortbus1/800/600', 0),
  ('fleet', 'c0000000-0000-0000-0000-000000000003', 'seed/grandtourer-1', 'https://picsum.photos/seed/grandtourer1/800/600', 0),
  ('fleet', 'c0000000-0000-0000-0000-000000000004', 'seed/citytempo-1', 'https://picsum.photos/seed/citytempo1/800/600', 0),

  -- Gallery photos (gallery items ARE the photos, one each)
  ('gallery', 'd0000000-0000-0000-0000-000000000001', 'seed/gallery-1', 'https://picsum.photos/seed/gallery1/800/600', 0),
  ('gallery', 'd0000000-0000-0000-0000-000000000002', 'seed/gallery-2', 'https://picsum.photos/seed/gallery2/800/600', 0),
  ('gallery', 'd0000000-0000-0000-0000-000000000003', 'seed/gallery-3', 'https://picsum.photos/seed/gallery3/800/600', 0),
  ('gallery', 'd0000000-0000-0000-0000-000000000004', 'seed/gallery-4', 'https://picsum.photos/seed/gallery4/800/600', 0);

-- ============================================================
-- Cleanup — run this whenever you're done testing, to remove everything
-- the block above inserted (media rows cascade-delete isn't set up, so
-- they're deleted explicitly first).
-- ============================================================
-- delete from public.media where entity_id in (
--   'a0000000-0000-0000-0000-000000000001', 'a0000000-0000-0000-0000-000000000002',
--   'a0000000-0000-0000-0000-000000000003', 'a0000000-0000-0000-0000-000000000004',
--   'a0000000-0000-0000-0000-000000000005',
--   'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000002',
--   'b0000000-0000-0000-0000-000000000003',
--   'c0000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000002',
--   'c0000000-0000-0000-0000-000000000003', 'c0000000-0000-0000-0000-000000000004',
--   'd0000000-0000-0000-0000-000000000001', 'd0000000-0000-0000-0000-000000000002',
--   'd0000000-0000-0000-0000-000000000003', 'd0000000-0000-0000-0000-000000000004'
-- );
-- delete from public.packages where id like 'a0000000-%';
-- delete from public.hotel_rooms where id like 'b0000000-%';
-- delete from public.fleet_vehicles where id like 'c0000000-%';
-- delete from public.gallery_items where id like 'd0000000-%';
