# Angel Angelov — Portfolio

Personal portfolio website built with React, TypeScript, and Vite.

## Tech Stack

- **React 19** with TypeScript
- **Vite** — build tool and dev server
- **React Router v7** — client-side routing with `BrowserRouter`
- **SASS** — modular styling with `@use`
- **ESLint** with `eslint-config-airbnb`
- **Vercel** — deployment

## Project Structure

```
src/
├── components/
│   ├── contact/        # Contact component
│   ├── navigation/     # Navbar and hamburger menu
│   ├── projects/       # Project cards and More Info overlay
│   └── typewriter/     # Typewriter animation
├── data/               # Static data (projects, skills)
├── images/             # Image assets
├── pages/              # Page-level components (Portfolio, AboutMe, Contact)
├── routes/             # Route definitions
├── style/              # SASS partials
└── types/              # TypeScript types
```

## Getting Started

Requires [pnpm](https://pnpm.io/) installed globally:

```bash
npm install -g pnpm
```

Install dependencies and start the dev server:

```bash
pnpm install
pnpm start
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command | Description |
|---|---|
| `pnpm start` | Start dev server |
| `pnpm build` | Build for production (outputs to `dist/`) |
| `pnpm preview` | Preview production build locally |

## Deployment

Deployed to [Vercel](https://vercel.com). The `vercel.json` config sets the output directory to `dist` and rewrites all routes to `index.html` for client-side routing.
