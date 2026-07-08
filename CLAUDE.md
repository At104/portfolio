# CLAUDE.md

Guidance for working in this repository.

## Overview

Personal portfolio for Atul Rao (**atulrao.me**). Single-page application built with
**React 19 + Vite + TypeScript + Tailwind CSS v4**, deployed on **Vercel** (Vite
framework preset — static output served on Vercel's edge). Three routes: Home,
Projects, Contact.

> A full design revamp is planned. Content is deliberately separated from
> presentation (see [Content](#content)) so the visuals can be reworked without
> touching copy or data.

## Commands

```bash
npm run dev       # Vite dev server (http://localhost:5173)
npm run build     # tsc -b && vite build  -> dist/
npm run preview   # serve the production build locally
npm run lint      # eslint
```

## Architecture

```
index.html            # HTML shell: meta/OG tags, favicon, theme-color, pre-paint theme script
src/
  main.tsx            # entry: createRoot -> BrowserRouter -> ThemeProvider -> App
  App.tsx             # <Routes> for / /projects /contact + Vercel Analytics/Speed Insights
  index.css           # Tailwind import, @theme tokens, theme CSS variables, component classes
  pages/              # Home.tsx, Projects.tsx, Contact.tsx (one per route)
  components/         # Navbar, Footer, ThemeToggle, TypeWriter, Animations
  contexts/           # ThemeContext (dark/light, persisted to localStorage)
  content/            # DATA extracted from JSX — edit copy/projects/links here
public/               # static assets: images/, icons/, robots.txt, sitemap.xml, og-image.svg, favicon.svg
vercel.json           # SPA rewrite: all paths -> /index.html
```

Data flow: `main.tsx` mounts the router and theme provider; each `pages/*` file is a
route that composes `components/*` and maps over data from `content/*`.

## Content

Page text and structured data live in `src/content/` as typed modules, imported by
the pages:

- `content/projects.ts` — the Projects grid (`Project[]`).
- `content/techStack.ts` — the Home "Tech Stack" section (`Record<category, Tech[]>`).
  Each tech icon is a Font Awesome icon, an image in `public/icons/tech`, or a text glyph.
- `content/contact.ts` — `contactMethods` and `socialLinks` for the Contact page.

To change what the site says or lists, edit `content/` — not the JSX.

## Theming

- Semantic colors are CSS variables in `src/index.css`: `:root` holds the **dark**
  theme (default), and the `.light` class on `<html>` overrides them for light mode.
- The Tailwind `@theme` block maps `--color-primary/secondary/accent` to those
  variables, so utilities like `text-primary` / `bg-primary/10` generate correctly
  **and** react to the active theme. Add new theme colors in both places.
- `ThemeContext` toggles the `.light` class and persists the choice to
  `localStorage`. An inline script in `index.html` applies the saved theme before
  first paint to avoid a flash.
- There is no Tailwind `dark:` variant in use — theme switching is driven entirely by
  the CSS variables above.

## Metadata / SEO

- Global tags live in `index.html`. Per-route `<title>` / `<meta name="description">`
  are rendered directly inside each page component — **React 19 hoists them to
  `<head>`** (no helmet library).
- `public/robots.txt`, `public/sitemap.xml`, and `public/og-image.svg` are static.
  Update the sitemap when routes change.

## Adding a route

1. Create `src/pages/Foo.tsx` (include a `<title>` and `<meta name="description">`).
2. Add `<Route path="/foo" element={<Foo />} />` in `src/App.tsx`.
3. Add a `<Link to="/foo">` in `src/components/Navbar.tsx`.
4. Add the URL to `public/sitemap.xml`.

## Deployment

Vercel with the **Vite** framework preset (build `vite build`, output `dist`).
`vercel.json` rewrites all paths to `/index.html` so client-side routes deep-link
correctly. Static files in `public/` are served directly (filesystem wins over the
rewrite).
