# TravelSolutions

A static website for **TravelSolutions**, a bus & minibus travel provider based in
Elavaramkuzhi, Velakupara, Anchal — serving weddings, school & college trips,
pilgrimages, and community tours.

This is a plain React (Create React App) site. There is no backend or
database — all content (fleet, pricing, services, contact details) lives in
the React source and can be edited directly.

---

## Project setup (run locally)

```bash
cd tour-management/frontend
npm install
npm start
```

The site runs at http://localhost:3000.

To build for production:

```bash
npm run build
```

---

## Where to edit things

- **Contact details, phone, WhatsApp, email, address, social links:**
  [tour-management/frontend/src/data/siteConfig.js](tour-management/frontend/src/data/siteConfig.js)
  — update this one file once the real details are available; every page
  (header, footer, contact page, WhatsApp/call buttons) reads from it.
- **Fleet & pricing:**
  [tour-management/frontend/src/data/fleet.js](tour-management/frontend/src/data/fleet.js)
- **Services offered:**
  [tour-management/frontend/src/data/services.js](tour-management/frontend/src/data/services.js)
- **Images:** [tour-management/frontend/src/assest/images/travelfox/](tour-management/frontend/src/assest/images/travelfox/)
  — currently free stock photos of buses (placeholders). Replace these files
  (keep the same filenames) once real fleet/event photos are available.
- **Logo:** `tour-management/frontend/src/assest/images/logo.png`
- **Pages:** `tour-management/frontend/src/Pages/` (Home, Fleet, Gallery, Contact)
- **Routes:** `tour-management/frontend/src/router/Routers.js`

---

## Deployment

A `vercel.json` is included in `tour-management/frontend/` for deploying as a
static site on Vercel (build command `npm run build`, output directory `build`).

---

## License

This project is licensed under the MIT License.
