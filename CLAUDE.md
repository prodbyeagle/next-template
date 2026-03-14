# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev        # Start dev server with Turbopack (localhost:3000)
bun run build  # Production build
bun run lint   # ESLint check
bun prettier   # Format all files with Prettier
```

No test suite is configured in this template.

## Architecture

**Framework:** Next.js App Router with React Server Components. Entry points are `src/app/layout.tsx` (root layout) and `src/app/page.tsx` (home page).

**Component layers:**
- `src/components/eagle/` — Custom branded components built on HeroUI primitives (e.g. `Code`)
- `src/components/index.ts` — Re-exports all components

**Styling:** Tailwind CSS v4 via `@tailwindcss/postcss` (no `tailwind.config.ts`). HeroUI styles imported via `@heroui/styles` in `globals.css`. Stone-palette OKLCH theme variables are overridden in `src/app/globals.css`. Use `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge) for all class composition.

**Theming:** `next-themes` provides light/dark/system switching via `ThemeProvider` in `layout.tsx` with `attribute={['class', 'data-theme']}` (required for HeroUI). To avoid SSR hydration mismatches when reading `resolvedTheme`, always guard with a `mounted` state (`useEffect(() => setMounted(true), [])`).

**HeroUI:** Using `@heroui/react@rc` + `@heroui/styles@rc` (v3 RC). Always use HeroUI components — never native HTML elements like `<button>`, `<input>`, `<a>` — when a component equivalent exists. Reference docs are in `.heroui-docs/` (indexed in `AGENTS.md`).

**Fonts:** Inter (sans) and Geist Mono (mono) loaded via `next/font/google`, mapped to `--font-sans` and `--font-mono`.

**Path aliases** (from `tsconfig.json`):
- `@/*` → `src/*`
- `@components/*` → `components/*`
- `@lib/*` → `lib/*`

## Code Style

ESLint enforces: single quotes, semicolons required, no unused imports (error). Prettier uses tabs (width 4), single quotes, ES5 trailing commas. Import order is enforced by `@ianvs/prettier-plugin-sort-imports` — groups: `@/app`, `@/components`, `@/lib`, `@/assets`, `@/hooks`, `@/types`, third-party, relative.

TypeScript is strict (`strict: true`, `noUnusedLocals`, `noUnusedParameters`).

## Key Libraries

- `@heroui/react` — UI components (v3 RC)
- `@heroui/styles` — HeroUI Tailwind v4 styles + theme tokens
- `motion` — animations
- `lucide-react` — icons
- `next-themes` — light/dark/system theme switching
- `clsx` + `tailwind-merge` — class composition via `cn()`
