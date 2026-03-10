# Smooth Scroll Reveal Animated Portfolio

A modern, minimal, developer-focused portfolio template built with:

- React + Vite
- Tailwind CSS
- Framer Motion
- lucide-react icons

This template includes animated scroll reveals, staggered card animations, hover effects, responsive layouts, and a clean data-driven content system.

## Sections Included

- Sticky Navbar with smooth scroll links
- Hero (Home)
- About
- Experience (timeline with animated vertical line)
- Skills
- Projects
- Testimonials (horizontal sliding cards)
- Contact (animated focus effects)
- Footer

## Installation

Prerequisites:

- Node.js 18+ (recommended Node.js 20+)
- npm

Run:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Customization

All editable portfolio content is stored in `src/data`:

- `src/data/profile.js`
  - name, title, intro, availability, social links, biography, testimonials
- `src/data/projects.js`
  - project cards (image, title, description, tech stack, demo link, GitHub link)
- `src/data/skills.js`
  - skills list (name, level, icon key, description)
- `src/data/experience.js`
  - timeline items (role, company, period, summary, highlights)

To customize your portfolio:

1. Replace content values in these files with your details.
2. Update links and contact information.
3. Replace placeholder project/demo URLs.
4. Swap Picsum image URLs with your own hosted images if needed.
5. Update `index.html` meta tags (title, description, social tags, and favicon) for SEO and branding.

## Animation System

Implemented with Framer Motion:

- Section scroll reveal on viewport entry
- Staggered animation for skills, projects, and timeline cards
- Fade-in + vertical movement transitions
- Horizontal sliding testimonials track
- Hover scale/lift effects on cards and CTA elements

## Folder Structure

```text
smooth-scroll-reveal-animated-portfolio/
  public/
  src/
    data/
      experience.js
      profile.js
      projects.js
      skills.js
    App.jsx
    index.css
    main.jsx
  index.html
  package.json
  vite.config.js
```

## Tech Notes

- Tailwind CSS is configured through `@tailwindcss/vite` in `vite.config.js`.
- Global styling and theme variables live in `src/index.css`.
- Main layout and section animations live in `src/App.jsx`.
