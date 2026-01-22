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

- `src/pages/index.astro` - Single-page app, defines profile data and assembles components
- `src/layouts/Layout.astro` - Global layout with CSS variables, SEO metadata, and JSON-LD schema
- `src/components/` - Section components (Hero, About, Experiences, Skills, Projects, Contact, Navbar)
- `src/content/` - Astro Content Collections with Zod schemas defined in `config.ts`

### Content Collections

| Collection | Type | Format | Location |
|------------|------|--------|----------|
| experiences | content | Markdown with frontmatter | `src/content/experiences/*.md` |
| projects | content | Markdown with frontmatter | `src/content/projects/*.md` |
| skills | data | JSON | `src/content/skills/*.json` |
| about | data | JSON | `src/content/about/*.json` |

Content schemas are defined in `src/content/config.ts` using Zod.

### Styling

- CSS variables defined in `Layout.astro` (`:root` block): `--color-primary`, `--color-bg`, `--font-sans`, etc.
- Components use Astro's scoped `<style>` blocks
- Global styles use `<style is:global>` in Layout
- Dark theme only (no light mode toggle currently)

## Conventions

- Always define `interface Props` in component frontmatter
- Use relative imports for local files
- PascalCase for component files, kebab-case for config files
- Content uses `order` field for sorting
