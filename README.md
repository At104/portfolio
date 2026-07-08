# Personal Portfolio

Portfolio site for Atul Rao — [atulrao.me](https://atulrao.me).

Built with **React + Vite + TypeScript + Tailwind CSS v4**, deployed on Vercel.

## Getting Started

```bash
npm install
npm run dev      # http://localhost:5173
```

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite dev server            |
| `npm run build`   | Type-check and build to `dist/`      |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Project layout

- `src/pages/` — one file per route (Home, Projects, Contact)
- `src/components/` — shared UI (Navbar, Footer, ThemeToggle, etc.)
- `src/content/` — editable page data (projects, tech stack, contact links)
- `src/index.css` — Tailwind setup, theme tokens, and component styles
- `public/` — static assets, `robots.txt`, `sitemap.xml`, OG image

See [CLAUDE.md](./CLAUDE.md) for a fuller architecture guide.

## Deployment

Deployed on Vercel using the Vite framework preset. `vercel.json` rewrites all routes
to `index.html` for client-side routing.
