---
name: customize-travel-site
description: Use when working on this Tours & Travels Booking Website (MERN stack) - covers running the dev servers, where branding/content/data lives, and known gotchas to check before editing. Trigger on requests to rebrand, restyle, add tours, change content, or run this project.
---

# Tours & Travels Booking Website — customization guide

Downloaded MERN template (GitHub repo `Chanuka999/Tours_and_Travels_Booking_Webiste`), being adapted for a personal travel site. This is a two-app monorepo under `tour-management/`: `frontend` (React, CRA) and `backend` (Node/Express/Mongoose).

## Running it locally

Backend:
```
cd tour-management/backend
npm install          # first time only
npm run start-dev    # nodemon, http://localhost:4000
```
Backend requires **MongoDB running locally** at `mongodb://localhost:27017/tour-booking` — this is hardcoded in [tour-management/backend/index.js](tour-management/backend/index.js), not read from `.env`. No local `mongod` was found on this machine as of the last check; either install MongoDB (`brew install mongodb-community`) or swap the connection string for an Atlas URI. Without a DB connection the server still boots and listens on port 4000, but every tour/booking/review/auth request will fail.

Frontend:
```
cd tour-management/frontend
npm install           # first time only
npm start             # CRA dev server, http://localhost:3000
```
The frontend talks to the backend via `BASE_URL` in [tour-management/frontend/src/utils/config.js](tour-management/frontend/src/utils/config.js) (currently `http://localhost:4000/api/v1`). Change this if the backend runs elsewhere (e.g. after deploying).

## Where things actually live

- **Real tour data comes from MongoDB via the API**, fetched with the `useFetch` hook ([tour-management/frontend/src/hooks/useFetch.js](tour-management/frontend/src/hooks/useFetch.js)) in `Pages/Tour.jsx`, `Pages/TourDetails.jsx`, and `Component/Featured-tours/FeaturedTourList.jsx`. To add/edit tours for real, use the backend API (`POST /api/v1/tours`, see `backend/controllers/tourController.js` and `backend/routes/tour.js`) or insert directly into the `tour-booking` MongoDB database.
- **`frontend/src/assest/data/tours.js` and `tours.json` are unused leftover placeholder data** — don't bother editing these expecting it to show up on the site.
- **Branding assets**: `frontend/src/assest/images/` — `logo.png`, hero images (`hero-img01.jpg`, `hero-img02.jpg`, `hero-video.mp4`), gallery images, avatars. Swap files here (keep the same filenames) or update the import paths in the components that reference them (`Component/Header/Header.jsx`, `Component/Layout/Layout.jsx`, `Component/image-gallery/`).
- **Page content/copy**: `frontend/src/Pages/*.jsx` (Home, Tour, TourDetails, Login, Register, SearchResultList, ThankYou).
- **Shared UI**: `frontend/src/Shared/` (search bar, tour card, newsletter, common section, subtitle) and `frontend/src/Component/` (Header, Footer, Layout, Booking, Testimonial, Featured-tours, image-gallery).
- **Global styles**: `frontend/src/index.css`, `App.css`, and per-page CSS under `frontend/src/styles/`. Bootstrap 5 + `react-bootstrap`/`reactstrap` are both in use, plus hand-written CSS per component — check for an existing class before introducing a new styling approach.
- **Routes**: `frontend/src/router/Routers.js` — add new pages here.
- **Auth state**: `frontend/src/context/AuthContext.js`.
- **Backend structure**: standard MVC — `controllers/`, `models/` (Booking, Review, Tour, User — Mongoose schemas), `routes/`, `utils/verifyToken.js` for JWT middleware.

## Gotchas learned from git history

- A prior commit briefly removed `config.js` from `.gitignore` to track it for deployment, then renamed `utils` → `utils_temp` → back to `utils` (case-sensitivity fix, likely a macOS/Linux filesystem mismatch during a deploy). If `BASE_URL` changes stop taking effect or imports of `utils/...` break, check for stray case-duplicate folders and confirm `config.js`'s tracked state with `git status`.
- Both `frontend/vercel.json` and `backend/vercel.json` exist for Vercel deployment — the backend one builds `index.js` as a serverless function via `@vercel/node`. If deploying, `BASE_URL` in `config.js` must point at the deployed backend URL, and the backend's hardcoded Mongo URI must be swapped for an Atlas connection string (plus CORS `origin` updated from `localhost:3000`).
- Backend has both `bcrypt` and `bcryptjs` as dependencies — check which one a given controller actually imports before assuming.

## Personalizing for a specific travel business

Typical customization order: (1) swap logo/hero/gallery images and site name/copy in Header, Footer, Home, (2) update color scheme in CSS (check `index.css`/`App.css` for CSS variables first), (3) replace demo tours with real ones via the backend API/DB, (4) update contact info, footer links, and the Newsletter component's copy, (5) review `package.json` `name` fields and `public/manifest.json`/`index.html` title & favicon for the new brand.
