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

**Routing.** `src/App.jsx` sets up `BrowserRouter` with exactly two routes: `index` → `src/pages/Home.jsx` and `*` → `src/pages/NotFound.jsx`. `Home` is the whole site — it stacks the section components (`HeroSection`, `AboutSection`, `ExperienceSection`, `SkillsSection`, `ProjectsSection`, `ContactSection`) inside a single scrolling page, with `Navbar`, `GridBackground`, and `ThemeToggle` as fixed/overlay chrome. Nav is anchor-based (`#about`, `#experience`, `#skills`, etc.), not router navigation.

**Where content lives.** Page content is **hardcoded as data arrays at the top of the section components**, not fetched or stored centrally. To change what's shown, edit these arrays directly:
- `src/components/ProjectsSection.jsx` — `projects` array (title, description, image, tags, demoUrl, githubUrl). Rendered as an infinite horizontal carousel (the array is tripled at runtime; see `loopProjects`).
- `src/components/ExperienceSection.jsx` — `experiences` array (role, company, location, period, bullets, tags)
- `src/components/SkillsSection.jsx` — `skills` array (`{name, category}`) and the `categories` list (`{id, label}` objects)

**Background.** `src/components/GridBackground.jsx` renders a full-viewport reactive dot grid on a single `<canvas>` (fixed, `-z-10`). It reads `--primary`/`--foreground` live from CSS so it follows the theme, draws a static frame on mount, and only repaints (coalesced into one rAF) while the pointer moves. It replaced the old `StarBackground` div-based star field.

**Styling — Tailwind v4, all config in CSS.** There is **no `tailwind.config.js`**. Tailwind is wired via the `@tailwindcss/vite` plugin (`vite.config.js`), and everything lives in `src/index.css`:
- The theme, custom animations, and design tokens are declared in `@theme`. The body font is **Inter** (`@fontsource-variable/inter`, imported at the top of `index.css`, exposed as `--font-sans`).
- **Cobalt palette.** Colors are HSL CSS variables (`H S% L%` triplets) defined under `@layer base` for `:root` (light) and `.dark` (dark), mapped in `@theme` to `--color-*` and referenced as `hsl(var(--primary))` etc. The full shadcn-style token set is defined: background, foreground, card(+foreground), primary(+foreground), secondary(+foreground), muted(+foreground), accent(+foreground), border, input, ring. Add both a `--token` value (both themes) **and** a `--color-token` mapping when introducing a new one.
- **Sharp corners** are the design: the radius scale (`--radius`, `--radius-sm…3xl`) is zeroed in `@theme`, so `rounded-*` utilities render square. `rounded-full` is unaffected and stays circular (used only for the avatar and icon bubbles).
- Custom project-specific utilities are defined with `@utility` and used throughout the components: `cosmic-button`, `gradient-border`, `card-hover`, `text-glow`, `container`. When you see these classes in JSX, their definitions are in `index.css`, not Tailwind defaults.

**Theming.** `src/components/ThemeToggle.jsx` owns dark mode by toggling the `dark` class on `document.documentElement` and persisting the choice to `localStorage` under the key `"theme"`. There is no theme context/provider — any component reading theme should follow this same pattern.

**Path alias.** `@` resolves to `./src` (configured in `vite.config.js`). Note the codebase is inconsistent — some files import via `@/components/...` and others via relative `../components/...`. Either works; prefer `@/` for new code.

**Utility.** `src/lib/utils.js` exports `cn(...)` (clsx + tailwind-merge) for conditional/merged class names — use it instead of manual string concatenation for `className`.

## Known incomplete / rough edges

- **Contact form is not wired up.** `src/components/ContactSection.jsx` renders a `<form>` with no `onSubmit` handler — it does nothing on submit. `@radix-ui/react-toast` is installed as a dependency but not yet used; it's presumably intended for form-submission feedback.
- The codebase has several small typos in class names and JSX (e.g. `focus:outlind-hidden`, `hover:bd-secondary`, a duplicated `a` attribute in `ProjectsSection.jsx`). Fix them as you touch the surrounding code rather than assuming they're intentional.
