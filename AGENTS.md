# AGENTS.md

## Purpose
This repo powers a personal portfolio site. Use these instructions to make fast, safe edits that keep site content aligned with the owner's resume and career goals.

Primary goals for content updates:
- Align narrative and project descriptions with resume experience.
- Position experience for three audiences: IT, Data Analyst, and Software Engineer.
- Use AI workflows to generate interview-ready talking points from real project work.

## Project Snapshot
- Framework: React + Vite.
- Styling: Tailwind CSS v4 with theme tokens in [src/index.css](src/index.css).
- Routing: React Router in [src/App.jsx](src/App.jsx).
- Main page composition: [src/pages/Home.jsx](src/pages/Home.jsx).
- Shared utility: [src/lib/utils.js](src/lib/utils.js).

## Commands
Run these commands before finishing significant edits:
- `npm run lint`
- `npm run build`
- `npm run dev` (for visual verification)

## Code Conventions
- Use named exports for components (match current component files in [src/components](src/components)).
- Prefer alias imports using `@/` for files under `src` (configured in [vite.config.js](vite.config.js)).
- Reuse `cn()` from [src/lib/utils.js](src/lib/utils.js) for conditional classes.
- Keep visual tokens and animation definitions centralized in [src/index.css](src/index.css).
- Do not add a Tailwind config unless explicitly requested; this project uses Tailwind v4 CSS-first theming.

## Content Update Workflow (Resume-Aligned)
When asked to update website copy using resume information:
1. Extract evidence first: concrete impact, tools, scope, and outcomes from resume/project sources.
2. Rewrite one section at a time in this order: Hero, About, Skills, Projects, Contact.
3. Convert vague statements into quantified statements where possible (metrics, time saved, users impacted, scale).
4. Maintain authenticity: do not invent achievements, certifications, or employer details.

## Role-Targeted Messaging Rules
For each major section, include language that can map to all three tracks:
- IT: operations, support, systems reliability, troubleshooting, documentation.
- Data Analyst: SQL/Python/R, dashboards, analysis methods, business insights.
- SWE: architecture, APIs, testing, maintainability, performance.

Apply this especially in:
- [src/components/HeroSection.jsx](src/components/HeroSection.jsx)
- [src/components/AboutSection.jsx](src/components/AboutSection.jsx)
- [src/components/SkillsSection.jsx](src/components/SkillsSection.jsx)
- [src/components/ProjectsSection.jsx](src/components/ProjectsSection.jsx)

## Interview Prep Enablement
When asked to prepare interview material from this site:
- Build STAR-format bullets from each featured project in [src/components/ProjectsSection.jsx](src/components/ProjectsSection.jsx).
- Produce role-specific interview question sets (IT, Data, SWE) tied to actual project content.
- Keep website copy and interview bullets consistent; if one changes, suggest updating the other.

## Quality and Safety Checklist
Before finishing:
- Verify anchor links still match section IDs in page components.
- Check for accessibility regressions (button labels, link text, semantic headings).
- Confirm external links and project links still resolve.
- Run lint/build and address any issues introduced by the change.

## Known Pitfalls in Current Code
- Scroll detection in [src/components/Navbar.jsx](src/components/Navbar.jsx) currently uses `window.screenY`; use `window.scrollY` for scroll state logic when editing this area.
- Keep class names valid Tailwind utilities (avoid typographical utility names).

## Existing Documentation
- Template README exists at [README.md](README.md) and is currently generic Vite boilerplate.
- If project-specific docs are added later, link to them here rather than duplicating long guidance.
