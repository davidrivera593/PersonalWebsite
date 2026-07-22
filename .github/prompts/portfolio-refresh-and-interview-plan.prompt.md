---
description: "Refresh portfolio content from resume evidence and generate interview prep for IT, Data Analyst, and SWE roles"
name: "Portfolio Refresh + Interview Prep"
argument-hint: "Paste resume highlights and any target job postings"
agent: "agent"
model: ['Claude Sonnet 4.5 (copilot)', 'GPT-5 (copilot)']
---
Use [AGENTS.md](../../AGENTS.md) as the source of project-specific rules.

Task:
Update this portfolio's content strategy from resume evidence and produce an interview-prep pack.

Input expected from user:
- Resume highlights (experience, projects, quantified outcomes, tools)
- Optional target job posting(s)

Required output:
1. A concise website update plan for Hero, About, Skills, Projects, Contact.
2. Proposed copy updates per section, tailored for:
- IT roles
- Data Analyst roles
- Software Engineer roles
3. A project-to-role mapping table:
- Project
- Evidence from resume
- IT angle
- Data angle
- SWE angle
4. Interview prep pack:
- 5 STAR stories based on real project experience
- 10 likely interview questions per role track (IT, Data, SWE)
- 3 personal narrative themes to keep answers consistent
5. Implementation checklist for this repo:
- Files likely to edit under src/components
- Validation steps (`npm run lint`, `npm run build`, visual pass with `npm run dev`)

Constraints:
- Do not invent achievements.
- Prefer quantified, evidence-backed statements.
- Keep tone professional, confident, and concise.
- Keep copy consistent across website and interview narratives.
