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

**Each route in the app corresponds to a module in `modules/`.** All components, constants, sections, and types that belong to a route must live inside that route's module directory — not in `shared/`. For example, everything related to the home page (`/`) lives in `modules/home/`. Only code used across multiple routes belongs in `shared/`.

```
modules/
  home/             # corresponds to app/ (root route)
    sections/       # page-level section components
    components/     # components scoped to this route
    constants/      # data/constants scoped to this route
shared/             # only truly cross-route code
  components/       # reusable UI primitives
  utils/            # shared utilities
  types/            # shared TypeScript types
```

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
