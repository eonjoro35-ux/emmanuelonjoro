# emmanuelonjoro

Personal portfolio for Emmanuel Onjoro — Vite + React 19 + TypeScript + Tailwind CSS 4,
deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Project structure

```
src/
├── main.tsx                    # entry point, wraps the app in ThemeProvider
├── App.tsx                     # composes every section in order
├── theme/
│   ├── ThemeProvider.tsx       # SITE-WIDE light/dark state (was inside Header)
│   └── ThemeToggle.tsx         # reusable toggle button
├── sections/                   # one file per page section
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Resume.tsx
│   ├── Services.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── components/
│   ├── layout/                 # Header, Footer, BottomNav
│   └── ui/                     # SectionHeading, BackToTop
├── hooks/useActiveSection.ts   # highlights the nav link you're looking at
├── data/site.ts                # ALL editable copy: profile, projects, skills, CV
└── styles/global.css           # theme tokens + all component styles
```

## Editing content

Almost nothing requires touching a component. Open `src/data/site.ts` and edit:

- `profile` — name, role, tagline, phone, email, photo, CV path, social links
- `navigation` — nav items (each `href` must match a section `id`)
- `aboutParagraphs`, `highlights` — About section
- `experience`, `education`, `certifications` — Resume section
- `services`, `skills`, `projects` — the remaining sections

## Theming

The theme is one system, defined once:

1. `ThemeProvider` stores the choice, persists it to `localStorage`, follows the
   operating system when the visitor has never picked, and writes both a `dark`
   class and a `data-theme` attribute onto `<html>`.
2. `styles/global.css` declares every colour as a CSS custom property under
   `:root[data-theme="light"]` and `:root[data-theme="dark"]`.

Because each section reads those variables, flipping the toggle recolours the whole
site — backgrounds, headings, body text, borders, cards, inputs and buttons — not
just the header. To change the accent colour, edit `--accent` in the two blocks at
the top of `global.css`.

## Images

The hero portrait ships as `public/images/manu.webp` (51 KB) with
`manu.jpg` (83 KB) as a fallback, served through a `<picture>` element.
If you replace the photo, keep both formats and the same 4:5 ratio.

## Your CV file

The download buttons point at `public/files/Emmanuel-Onjoro-CV.pdf`.
Drop your PDF there with that exact name (or change `profile.cv` in `src/data/site.ts`).
