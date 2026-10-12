# Supabase setup for the TravelSolutions admin portal

Do these steps in the Supabase dashboard (supabase.com). None of this needs me —
once it's done, send me the two values at the bottom and I'll wire up the app.

## 1. Run the schema

Project -> **SQL Editor** -> **New query** -> paste the contents of
[`schema.sql`](schema.sql) -> **Run**.

This creates the tables (`packages`, `hotel_rooms`, `fleet_vehicles`,
`gallery_items`, `media`, `admins`) and the security rules (public visitors can
only read *published* rows; only accounts in the `admins` table can add, edit,
or delete anything).

## 2. Create the storage bucket (for images)

Project -> **Storage** -> **New bucket**:
- Name: `media` (exact name — the SQL policies reference it)
- Public bucket: **ON** (so images can be displayed on the public site without login)

## 3. Point invite links at the acceptance page

Project -> **Authentication** -> **URL Configuration**:
- **Site URL**: your deployed site, e.g. `https://your-site.com`
- **Redirect URLs**: add `https://your-site.com/admin/accept-invite` (and the
  `http://localhost:3000/admin/accept-invite` equivalent while testing locally)

This is the page in this app (`/admin/accept-invite`) that lets an invited
user set their own password.

## 4. Invite your admin users (up to 5)

Project -> **Authentication** -> **Users** -> **Invite user**, enter their email.
Supabase emails them a link that opens `/admin/accept-invite`, where they set
their own password — you never need to handle or share a password.

Repeat for each of the up to 5 admins.

## 5. Grant each invited user admin access

For **each** person you invited in step 4: open
[`add-admin.sql`](add-admin.sql), replace the placeholder email with theirs,
and run it in the SQL Editor. (A 6th attempt will fail on purpose — that's the
5-admin cap working as intended.)

## 6. Send me these two values

Project -> **Settings** -> **API**:
- **Project URL** (looks like `https://xxxxxxxx.supabase.co`)
- **`anon` `public` key** (a long string under "Project API keys")

Send me both. **Do not** send the `service_role` key — it bypasses all the
security rules above and should never leave the dashboard.

Once I have those two values, the admin login at `/admin` and the public
pages showing packages/hotels/fleet/gallery will work end to end.
