# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start development server
pnpm build        # Build for production (outputs to dist/)
pnpm preview      # Preview production build
pnpm exec tsc --noEmit  # Type check
```

No test suite is configured.

## Architecture

This is an Astro 5.x static portfolio site using TypeScript strict mode.

### Key Structure

```
src/
├── pages/index.astro          # Single-page app entry, profile data
├── layouts/Layout.astro       # Global layout, SEO, CSS variables
├── components/
│   ├── Navbar.astro           # Fixed nav with mobile hamburger menu
│   ├── Hero.astro             # Canvas particle animation, avatar
│   ├── About.astro            # Profile, services, code block visual
│   ├── Experiences.astro      # Work timeline with glowing markers
│   ├── Skills.astro           # Tech icons grid (DevIcons CDN)
│   ├── Projects.astro         # Project cards with tech tags
│   └── Contact.astro          # CTA section + footer
└── content/                   # Astro Content Collections
    ├── config.ts              # Zod schemas
    ├── experiences/*.md
    ├── projects/*.md
    ├── skills/*.json
    └── about/*.json
```

### Content Collections

| Collection | Type | Format | Location |
|------------|------|--------|----------|
| experiences | content | Markdown with frontmatter | `src/content/experiences/*.md` |
| projects | content | Markdown with frontmatter | `src/content/projects/*.md` |
| skills | data | JSON | `src/content/skills/*.json` |
| about | data | JSON | `src/content/about/*.json` |

Content schemas are defined in `src/content/config.ts` using Zod.

### Styling

CSS variables defined in `Layout.astro` (`:root` block):

```css
--color-bg: #050505
--color-bg-alt: #0e0e12
--color-primary: #32e0c4          /* Cyan/turquoise */
--color-primary-light: #00fff2
--color-secondary: #2c84ff
--color-text: #ffffff
--color-text-muted: #a0a0b0
--font-sans: "Inter"
--font-heading: "Poppins"
--max-width: 1200px
```

- Components use Astro's scoped `<style>` blocks
- Global styles use `<style is:global>` in Layout
- Dark theme only (neon/cyberpunk aesthetic)
- Responsive breakpoints: 600px, 768px, 900px

### Key Features

- **Hero particle system**: Canvas animation with physics, collisions, neon impact effects
- **Rotating avatar**: Orbit animations with dashed/solid circles
- **Timeline**: Vertical glowing line with animated markers
- **Skill icons**: DevIcons CDN, hover bounce animation
- **SEO**: JSON-LD schema, Open Graph, sitemap, Google Search Console

## Conventions

- Always define `interface Props` in component frontmatter
- Use relative imports for local files
- PascalCase for component files, kebab-case for config files
- Content uses `order` field for sorting
- Mobile optimizations: reduce particle count, disable heavy effects

## Deployment

- Site URL: `https://valentin.webxfactory.fr`
- Output: Static (configured in `astro.config.mjs`)
- Language: French (`fr`)
