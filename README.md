# isahecam.dev

Personal portfolio site for Brandon Hernández — IT Engineer and Full Stack Developer based in Puebla, MX.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript 5** (strict)
- **Tailwind CSS 4** · **shadcn/ui** · **Framer Motion**
- **next-themes** for dark/light mode

## Commands

```bash
pnpm run dev        # Start dev server (localhost:3000)
pnpm run build      # Production build
pnpm run lint       # Run Oxlint
pnpm run lint:fix   # Auto-fix linting issues
pnpm run fmt        # Format with Oxfmt
pnpm run fmt:check  # Check formatting without applying changes
```

Pre-commit hooks (Husky + lint-staged) run lint and format checks automatically.

## Architecture

Each route corresponds to a module in `modules/`. All components, constants, and types scoped to a route live inside its module directory. Only code shared across multiple routes belongs in `shared/`.

```
modules/
  home/             # root route (/)
    sections/       # page-level section components
    components/     # route-scoped components
    constants/      # route-scoped data
shared/
  components/       # reusable UI primitives
  constants/        # cross-route data (projects, technologies)
  utils/            # shared utilities
```

Notable patterns:

- **`createRegistry()`** — typed `Map` wrapper with `.all`, `.get()`, `.has()`, `.pluck()` for collections of named items
- **`cn()`** — Tailwind class composition via `clsx` + `tailwind-merge`
- **Typed Routes** — enabled in `next.config.ts`; prefer typed route strings over plain strings for `href` props

## Tooling

| Tool                | Purpose                                                     |
| ------------------- | ----------------------------------------------------------- |
| Oxlint              | Rust-based linter (replaces ESLint)                         |
| Oxfmt               | Rust-based formatter (sorts Tailwind classes automatically) |
| Husky + lint-staged | Pre-commit lint/format checks                               |
| commitlint          | Enforces conventional commits (`feat`, `fix`, `docs`, …)    |
