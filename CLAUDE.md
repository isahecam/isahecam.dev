# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

isahecam.com is a personal portfolio site (Brandon Hernández) built with Next.js 16 (App Router), React 19, next-intl, Tailwind CSS v4, and shadcn/ui (base-luma style on Base UI, not Radix).

## Commands

Package manager is pnpm (`packageManager: pnpm@11.21.0`) — use `pnpm`, not npm/yarn.

- `pnpm dev` — start dev server
- `pnpm build` — production build
- `pnpm start` — run production build
- `pnpm lint` / `pnpm lint:fix` — oxlint (not eslint)
- `pnpm fmt` / `pnpm fmt:check` — oxfmt (not prettier)

There is no test suite configured in this repo.

Pre-commit runs `lint-staged` (oxlint on staged JS/TS, oxfmt on everything staged) via husky; `commit-msg` runs commitlint against Conventional Commits (see `commitlint.config.ts` for allowed types and rules — header ≤72 chars, lower-case type/scope, no sentence-case subject, no trailing period).

## Architecture

**This is not the Next.js you know** — read `AGENTS.md` before making routing/config changes; it points at `node_modules/next/dist/docs/` as the source of truth over training data. Two breaking changes already in play here:

- Middleware lives in `src/proxy.ts` (the `middleware.ts` convention is deprecated/renamed to `proxy.ts` in this Next version).
- `next.config.ts` has `cacheComponents: true` and `typedRoutes: true` enabled — route params come from generated types (e.g. `LayoutProps<"/[locale]">` in `src/app/[locale]/layout.tsx`), and caching semantics differ from the classic `fetch`-cache model. Check `node_modules/next/dist/docs/01-app/02-guides/migrating-to-cache-components.md` before adding data fetching.

**i18n (next-intl)**: all routed pages live under `src/app/[locale]/`. Locale config is centralized in `src/i18n/routing.ts` (`locales: ["es", "en"]`, default `es`, `localePrefix: "as-needed"` so the default locale has no URL prefix). `src/i18n/navigation.ts` re-exports `Link`/`useRouter`/`usePathname`/`getPathname` wrapped for this routing config — use these instead of `next/link` / `next/navigation` inside `[locale]`. `src/i18n/request.ts` resolves the active locale (falling back to `next/root-params` when no route param is present) and loads translations from `messages/{locale}.json`. `src/proxy.ts` runs `next-intl`'s middleware for locale negotiation, matching all paths except `/api`, `/trpc`, `/_next`, `/_vercel`, and files with extensions.

**UI components**: `components.json` configures shadcn with `style: "base-luma"` on Base UI (`@base-ui/react`), not Radix — do not add Radix-based shadcn components. Aliases: `@/components`, `@/components/ui`, `@/lib`, `@/hooks`. Global styles are at `src/app/[locale]/globals.css` (note: not `src/app/globals.css` despite `components.json`'s configured path — the app itself was moved under `[locale]`). Theming uses `@wrksz/themes` (`ThemeProvider` in the root layout, class-based, system-aware).

**Lint/format**: oxlint config (`.oxlintrc.json`) relaxes `jsx-a11y` rules for `src/components/ui/**` (generated shadcn primitives). oxfmt config (`.oxfmtrc.json`) enforces import sorting (react/next first, then external, internal, parent/sibling/index, styles) and Tailwind class sorting against `src/app/[locale]/globals.css`; it excludes `src/lib/utils.ts` and `src/components/ui/**` from formatting.
