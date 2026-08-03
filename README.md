# Tanvir Ahmed Khan — Portfolio

Next.js 15 (App Router), zero UI dependencies. Static-prerendered, ~106 kB first load.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Deploy to Vercel

```bash
git init
git add -A
git commit -m "portfolio"
git branch -M main
git remote add origin git@github.com:Tanvir-A-Khan/portfolio.git
git push -u origin main
```

Then on vercel.com: **Add New → Project → import the repo → Deploy.** No build settings to change; Vercel detects Next.js.

**Set the URL** under Project → Settings → Domains. The project name becomes the subdomain, so name the project `tanvirkhan` to get `tanvirkhan.vercel.app`. For a custom domain, add it there and Vercel prints the two DNS records to set at your registrar.

## Editing

Everything you'd want to change is in **`data/site.js`** — profile text, the hero parse demo, projects, jobs, stack, credentials. The components read from it and shouldn't need touching.

Two things to know about that file:

- `parseDemo.marks` values must appear **verbatim** in `parseDemo.raw`, or they won't get highlighted.
- `work[].href` is `null` everywhere. Set it to a live URL or repo link when you have one — nothing renders it yet, so wire it into `row-name` in `app/page.js` if you want the titles clickable.

## Design tokens

All colors, fonts, and spacing are CSS custom properties at the top of `app/globals.css`, under `:root` (dark) and `[data-theme="light"]`. Change `--mark` to reskin the accent everywhere in one edit.

## Responsive breakpoints

| Width | Layout |
|---|---|
| < 640px | Single column, parse panel stacks vertically, nav links hidden |
| 640–1023px | Two-column parse panel and work rows, stack in 2 columns |
| ≥ 1024px | Nav links visible, asymmetric work rows, stack in 5 columns |

## Accessibility

Visible keyboard focus on all interactive elements, `prefers-reduced-motion` respected (all reveals and the parse animation disable), semantic landmarks, contrast checked against the ink and paper tokens.
