# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm run dev        # Start Next.js dev server (localhost:3000)
pnpm run build      # Production build
pnpm run lint       # Run Oxlint (Rust-based linter)
pnpm run lint:fix   # Auto-fix linting issues
pnpm run fmt        # Format code with Oxfmt
pnpm run fmt:check  # Check formatting without applying changes
```

There are no tests. Pre-commit hooks (Husky + lint-staged) run lint and format checks automatically.

## Architecture

Personal portfolio site for Brandon Hernández. Built with **Next.js 16 App Router**, **React 19**, **TypeScript** (strict), and **Tailwind CSS 4**.

### Module convention

**Each section or distinct feature in the portfolio corresponds to a module in `modules/`.** All components, queries, types, data-fetching, and constants that belong to a module must live inside that module's directory — not in `shared/`. Only code used across multiple modules belongs in `shared/`.

#### Folder Structure

A fully-featured module (like `modules/projects/`) is structured as follows:

```
modules/
  [module-name]/
    components/       # React components scoped to this module (e.g., project-card.tsx)
    data/             # Async data fetching functions (e.g., get-all-projects.ts)
    queries/          # Sanity GROQ query definitions (e.g., project.queries.ts)
    types/            # TypeScript interface/type definitions (e.g., project.types.ts)
    [module-name].tsx # Primary entrypoint component (e.g., projects.tsx)
    [module-name]-*.tsx # Specialized sub-layouts or sub-views (e.g., projects-grid.tsx)
```

#### Step-by-Step Module Construction (From Scratch)

When building a new module from scratch, follow these structured steps:

1. **Define Types (`types/[entity].types.ts`)**:
   Establish the data shape and TypeScript interfaces first (e.g., `interface Project`, `interface Technology`).
2. **Write Queries (`queries/[entity].queries.ts`)**:
   Define GROQ query strings using `defineQuery` from `next-sanity`. Keep fields aligned with the defined typescript types.
3. **Implement Data Fetching (`data/get-[descriptor].ts`)**:
   Write the asynchronous data fetching function.
   - Use `next/cache` directives: `"use cache";` at the top of the function.
   - Configure cache lifetimes and tags, e.g., `cacheLife("hours")` and `cacheTag("projects")`.
   - Call the Sanity client: `client.fetch(ALL_PROJECTS_QUERY)`.
4. **Build UI Components (`components/[entity]-[element].tsx`)**:
   Build localized visual components (e.g., `project-card.tsx`). Follow standard UI guidelines: keep styling responsive, use `cn()` for merging classes, and import shared ui primitives from `@/shared/components/ui/`.
5. **Create Layout/Grid Views (`[module-name]-*.tsx`)**:
   Create structural views that fetch data using the module's data utility and map the dataset to individual components (e.g., `projects-grid.tsx`).
6. **Create the Main Entrypoint (`[module-name].tsx`)**:
   Define the entrypoint component (e.g., `export function Projects() {}`).
   - Use semantic tags (e.g., `<section>`, `<header>`, `<Heading level={2}>`).
   - Retrieve translations (e.g., `useTranslations("home.[module]")`).
   - Wrap the dynamic child/grid component in a `<Suspense>` block with a translated loading fallback.

#### Naming Conventions (Kebab-case)

All files inside a module must follow the standard naming:

- Entity Types: `[entity].types.ts`
- Entity Queries: `[entity].queries.ts`
- Data Fetchers: `get-[action]-[entity].ts` (e.g. `get-all-projects.ts` or `get-experiences.ts`)
- Local Components: `[entity]-[element].tsx` (e.g. `project-card.tsx`)
- Sub-views/Grids: `[module-name]-grid.tsx`
- Entrypoint: `[module-name].tsx` (e.g. `projects.tsx`)

### Key patterns

**Data registry**: `createRegistry()` (in `shared/utils/`) wraps a typed `Map` with `.all`, `.keys`, `.get()`, `.has()`, and `.pluck()`. Use it when defining collections of named items (projects, technologies, etc.) to get type-safe lookups.

**Component library**: Uses shadcn/ui with custom path aliases defined in `components.json` — components resolve to `@/shared/components/ui/`. Custom hand-rolled primitives (typewriter, badges) live in `shared/components/uitripled/`.

**Styling**: Use `cn()` from `@/lib/utils` for class composition. Oxfmt sorts Tailwind classes automatically — do not manually reorder them. Print width is 120. The formatter skips `shared/components/ui/**` (shadcn-generated files).

**Theme**: Dark/light mode via `next-themes` with CSS variables. `lang="es"` on `<html>` is intentional — the site content is in Spanish.

**Next.js config**: React Compiler and Typed Routes are both enabled in `next.config.ts`. Prefer typed route strings over plain strings for `href` props.

## File naming

All files use **kebab-case** following one of two patterns:

```
{action}-{context}-{type}.{ext}   # when the file performs an explicit action
{context}-{type}.{ext}            # when the file describes an entity or area
```

Rules:

- The name must answer "what does it do?" without opening the file
- If an action is involved (create, update, delete, assign…), it goes first
- Singular for single instances, plural for collections (`project-card.tsx` vs `project-list.tsx`)

## Commit conventions

Enforced by commitlint (`conventional-changelog-atom` preset) via Husky.

```
<type>(<scope>): <short description>
```

- **Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`
- Lowercase type, no period at end, header ≤ 100 characters
- Scope is optional but encouraged (e.g., `feat(projects): ...`, `fix(header): ...`)
