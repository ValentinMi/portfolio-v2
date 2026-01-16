# Agent Guidelines for portfolio-valentin

This repository contains a personal portfolio website built with Astro and TypeScript.

## 1. Build, Lint, and Test Commands

Use `pnpm` for all package management tasks.

| Action | Command | Description |
| :--- | :--- | :--- |
| **Install** | `pnpm install` | Install dependencies |
| **Dev Server** | `pnpm dev` | Start local development server |
| **Build** | `pnpm build` | Build the project for production (outputs to `dist/`) |
| **Preview** | `pnpm preview` | Preview the built site locally |
| **Type Check** | `pnpm exec tsc --noEmit` | Run TypeScript type checking (recommended before build) |

*Note: There are no explicit unit test scripts configured. Rely on TypeScript compiler checks (`tsc`) and manual verification.*

## 2. Code Style & Conventions

### Architecture
- **Framework:** Astro 5.x
- **Language:** TypeScript (Strict mode enabled)
- **Styling:** Scoped CSS within Astro components + Global variables
- **Content:** Astro Content Collections (`src/content/`) for structured data

### File Structure
- `src/pages/`: Astro pages (routes)
- `src/layouts/`: Layout components (e.g., `Layout.astro`)
- `src/components/`: Reusable UI components
- `src/content/`: Content collections config and data

### Astro Components (`.astro`)
- **Structure:**
  1. **Frontmatter (`---`):** Imports, `interface Props`, data fetching/logic.
  2. **Template:** HTML structure using JSX-like syntax.
  3. **Script (optional):** Client-side logic in `<script>`.
  4. **Styles:** Scoped CSS in `<style>`.

- **Props:**
  - Always define a TypeScript `interface Props` for component props.
  - Destructure props from `Astro.props` in the frontmatter.

  ```astro
  ---
  interface Props {
    title: string;
    isActive?: boolean;
  }
  const { title, isActive = false } = Astro.props;
  ---
  ```

### Styling
- **CSS Variables:** Use the CSS variables defined in `src/layouts/Layout.astro` (e.g., `--color-primary`, `--font-sans`) for consistency.
- **Scoping:** Rely on Astro's default scoped styling. Use `is:global` sparingly.
- **Responsiveness:** Use standard media queries (e.g., `@media (max-width: 900px)`).

### TypeScript
- **Strict Mode:** The project uses `astro/tsconfigs/strict`. Ensure all types are explicitly defined.
- **Content Collections:** Use `zod` schemas in `src/content/config.ts` to define data structures.

### Formatting & Naming
- **Files:** PascalCase for components (`Hero.astro`), kebab-case for config/utilities (`astro.config.mjs`).
- **Imports:** Use relative imports (e.g., `../components/Hero.astro`).
- **Quotes:** Double quotes preferred for HTML attributes and JSON.
