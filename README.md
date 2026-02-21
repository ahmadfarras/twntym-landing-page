# twntym-landing-page

Lightweight landing page built with Vue 3, TypeScript and Vite.

This repository contains a small marketing/landing site scaffold using:

- Vue 3 Single File Components (Composition API + `<script setup>`)
- TypeScript for type-safety
- Vite for fast dev server and build
- TailwindCSS (configured in the project) for styles

The project is intended as a simple, responsive landing page starter you can customize.

**Quick Links**

- **Source:** [src](src)
- **Main app entry:** [src/main.ts](src/main.ts)
- **Root component:** [src/App.vue](src/App.vue)
- **Components:** [src/components](src/components)

**Project structure (high level)**

- `index.html` — Vite entry HTML
- `src/` — application source
	- `App.vue` — root component
	- `main.ts` — app bootstrap
	- `components/` — UI components and sections
- `public/` — static assets
- `package.json` — scripts & dependencies

**Prerequisites**

- Node.js 18+ (recommended)
- npm or yarn

**Run locally**

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

These scripts are defined in `package.json` as `dev`, `build`, and `preview` (Vite defaults).


Happy hacking!
