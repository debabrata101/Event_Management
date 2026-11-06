# K Explore

K Explore is a responsive event discovery and registration frontend built with React, Vite and Tailwind CSS. Visitors can discover events, search and filter listings, view event details, and register. Registration records and the selected theme are stored in the browser's LocalStorage.

## Features

- Responsive landing page and navigation
- Event discovery with title search, category filtering and date sorting
- Individual event detail pages with countdown timer
- Validated registration form with LocalStorage persistence
- Registration confirmation screen
- Dark/light theme with saved preference
- Contact form with frontend validation and confirmation
- Mobile navigation, toast notifications and back-to-top control
- Hash-based routing for straightforward static hosting

## Technologies

- React 18 + Vite
- JavaScript (ES6+)
- Tailwind CSS
- React Router DOM (`HashRouter`)
- Lucide React
- Browser LocalStorage

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Project structure

```text
src/
  components/   Reusable navigation, cards, filters and UI
  context/      Theme context
  data/         Sample event data
  pages/        Home, events, details, registration, about, contact
  utils/        Validation and LocalStorage helpers
  App.jsx
  main.jsx
  index.css
```

## Registration storage

Successful registrations are saved under the `kexplore_registrations` LocalStorage key. This is a frontend demonstration only; it does not transmit personal information to a server. Contact form submissions are validated locally and are not sent to an inbox.

## Deployment

- **Vercel:** Import the GitHub repository. Build command: `npm run build`; output directory: `dist`.
- **Netlify:** Import the repository. The included `netlify.toml` configures the build and SPA fallback.
- **GitHub Pages:** Build with `npm run build` and publish `dist` using a Pages deployment workflow. Hash-based routing is enabled to avoid server-side route rewrites.

## Screenshots

Add screenshots of the home page, event listing, details and registration screens here.

## Deployment URL

_Add your deployed URL here._
