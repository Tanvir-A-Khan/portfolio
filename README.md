# Tanvir Ahmed Khan — Portfolio

A responsive Next.js 15 portfolio with project previews, case-study pages, work experience, a technology toolkit, and contact links.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Build for production with `npm run build`, then run the production server with `npm start`.

## Content and assets

Edit `data/site.js` for profile links, projects, experience, skills, credentials, and testimonials. Each project automatically receives a page at `/work/<project-slug>` and an entry in the sitemap.

Testimonials use exact excerpts from received LinkedIn recommendations, with author, date, and source links. Only add recommendations verified on the linked profile; do not add placeholder quotes or invented attributions.

Project fields include:

- `name`, `platform`, `tagline`, `year`, `role`, `body`, and `stack` for the project description.
- `href` for an optional external product link.
- `selectorLogo` for web-project branding, or `icon` for a mobile app icon.
- `screenshots`, an array of `{ src, caption }` entries used by the showcase and project gallery.

Original logos, app icons, and screenshots live in `public/`. Asset source notes are included in the relevant asset folders. Testimonials display initials; their text and attribution are maintained in `data/site.js`.

## Design and behavior

`app/globals.css` defines the theme, typography, layout, and responsive breakpoints. The portfolio starts in a warm light theme and saves a visitor's chosen light or dark theme locally. The portrait keeps its original colors.

The project showcase supports category filters and selection by hover, click, or keyboard focus. Its height stays fixed at 560px on desktop and 840px on mobile; longer descriptions scroll inside the panel. Journey rows expand on hover and remain operable by click or keyboard.

Profile links use icons with accessible labels. The site includes keyboard focus indicators, a skip link, reduced-motion support, and responsive navigation.

## Deployment

The GitHub repository is `Tanvir-A-Khan/portfolio`, with `main` as its production branch. Existing Vercel projects are `portfolio` and `tanvirkhan`.

- Live portfolio: https://tanvirkhan.vercel.app

Push approved changes to `main` to trigger the connected Vercel deployments. Metadata and sitemap settings are in `app/layout.js` and `app/sitemap.js`.

Local design exports under `output/` are not part of the website release.
