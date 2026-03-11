# Animated Developer Portfolio Template

A modern, minimal, developer-focused portfolio template built with React, Vite, Tailwind CSS, Framer Motion, and lucide-react icons.

## Live Demo

- https://smooth-scroll-reveal-animated-portf.vercel.app/

## Stack

- React 19
- Vite 7
- Tailwind CSS (via `@tailwindcss/vite`)
- Framer Motion
- lucide-react

## Features

- Sticky navbar with smooth-scroll anchor links
- Hover underline animation on navbar items
- Hero section with text reveal animation
- Scroll-reveal animation for each section
- Fade-in + vertical movement transitions
- Staggered card animation (skills, projects, experience timeline)
- Hover lift/scale effects for interactive cards and buttons
- Animated vertical timeline line in Experience
- Animated horizontal sliding Testimonials track
- Contact form with animated focus states
- Fully responsive layout for desktop, tablet, and mobile

## Sections Included

- Navbar
- Hero (Home)
- About
- Experience
- Skills
- Projects
- Testimonials
- Contact
- Footer

## Installation

Prerequisites:

- Node.js 18+ (Node.js 20+ recommended)
- npm

Install and run:

```bash
npm install
npm run dev
```

Build production bundle:

```bash
npm run build
npm run preview
```

## Customization

All editable content is centralized in:

- `src/data/profile.js`
- `src/data/projects.js`
- `src/data/skills.js`
- `src/data/experience.js`

### 1) `src/data/profile.js`

Update:

- brand name
- developer name and title
- hero intro text
- availability, location, and contact email
- profile/about images
- about paragraphs
- contact blurb
- hero stats
- social links
- testimonials

### 2) `src/data/projects.js`

Each project card supports:

- `image` (currently Picsum URLs)
- `title`
- `description`
- `techStack` (array)
- `demoLink`
- `githubLink`

### 3) `src/data/skills.js`

Each skill card supports:

- `name`
- `icon` (lucide key used in `App.jsx` icon map)
- `level`
- `description`

### 4) `src/data/experience.js`

Each timeline entry supports:

- `company`
- `role`
- `location`
- `period`
- `summary`
- `highlights` (array)

## Folder Structure

```text
smooth-scroll-reveal-animated-portfolio/
  public/
    portfolio-icon.svg
  src/
    components/
      AnimatedSection.jsx
      Container.jsx
      GradientButton.jsx
      motion.js
      SectionHeading.jsx
    data/
      experience.js
      profile.js
      projects.js
      skills.js
    sections/
      AboutSection.jsx
      ContactSection.jsx
      ExperienceSection.jsx
      FooterSection.jsx
      HeroSection.jsx
      Navbar.jsx
      ProjectsSection.jsx
      SkillsSection.jsx
      TechStackSection.jsx
      TestimonialsSection.jsx
    App.jsx
    index.css
    main.jsx
  index.html
  package.json
  vite.config.js
```

## Design and Animation Notes

- Global smooth scrolling is set in `src/index.css`.
- Section entry animation uses Framer Motion `whileInView` patterns in `src/App.jsx`.
- Cards use staggered containers and reveal variants for progressive motion.
- Contact inputs use animated focus scale and ring shadow transitions.
- Projects use Picsum placeholders; replace with your own hosted assets anytime.
