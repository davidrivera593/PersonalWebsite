# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server (HMR)
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` — run ESLint over the repo

There is **no test setup** in this project (no test runner, no test scripts). Do not assume `npm test` works.

## Architecture

Single-page personal portfolio built with **React 19 + Vite + Tailwind CSS v4**. No backend.

**Routing.** `src/App.jsx` sets up `BrowserRouter` with exactly two routes: `index` → `src/pages/Home.jsx` and `*` → `src/pages/NotFound.jsx`. `Home` is the whole site — it stacks the section components (`HeroSection`, `AboutSection`, `SkillsSection`, `ProjectsSection`, `ContactSection`) inside a single scrolling page, with `Navbar`, `StarBackground`, and `ThemeToggle` as fixed/overlay chrome. Nav is anchor-based (`#about`, `#skills`, etc.), not router navigation.

**Where content lives.** Page content is **hardcoded as data arrays at the top of the section components**, not fetched or stored centrally. To change what's shown, edit these arrays directly:
- `src/components/ProjectsSection.jsx` — `projects` array (title, description, image, tags, demoUrl, githubUrl)
- `src/components/SkillsSection.jsx` — `skills` array (`{name, category}`) and the `categories` filter list

**Styling — Tailwind v4, all config in CSS.** There is **no `tailwind.config.js`**. Tailwind is wired via the `@tailwindcss/vite` plugin (`vite.config.js`), and everything lives in `src/index.css`:
- The theme, custom animations, and design tokens are declared in `@theme`.
- Colors are HSL CSS variables defined under `@layer base` for `:root` (light) and `.dark` (dark), referenced as `hsl(var(--primary))` etc.
- Custom project-specific utilities are defined with `@utility` and used throughout the components: `cosmic-button`, `gradient-border`, `card-hover`, `text-glow`, `container`, `star`, `meteor`. When you see these classes in JSX, their definitions are in `index.css`, not Tailwind defaults.

**Theming.** `src/components/ThemeToggle.jsx` owns dark mode by toggling the `dark` class on `document.documentElement` and persisting the choice to `localStorage` under the key `"theme"`. There is no theme context/provider — any component reading theme should follow this same pattern.

**Path alias.** `@` resolves to `./src` (configured in `vite.config.js`). Note the codebase is inconsistent — some files import via `@/components/...` and others via relative `../components/...`. Either works; prefer `@/` for new code.

**Utility.** `src/lib/utils.js` exports `cn(...)` (clsx + tailwind-merge) for conditional/merged class names — use it instead of manual string concatenation for `className`.

## Known incomplete / rough edges

- **Contact form is not wired up.** `src/components/ContactSection.jsx` renders a `<form>` with no `onSubmit` handler — it does nothing on submit. `@radix-ui/react-toast` is installed as a dependency but not yet used; it's presumably intended for form-submission feedback.
- The codebase has several small typos in class names and JSX (e.g. `focus:outlind-hidden`, `hover:bd-secondary`, a duplicated `a` attribute in `ProjectsSection.jsx`). Fix them as you touch the surrounding code rather than assuming they're intentional.
