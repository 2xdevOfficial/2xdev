# 2xdev

Marketing site for 2xdev — a UK-based engineering partner building web apps, e-commerce, management systems and CMS platforms for startups and growing businesses.

## Stack

- [Vite](https://vite.dev) + [React 19](https://react.dev) + TypeScript
- [React Router](https://reactrouter.com) for client-side routing
- CSS Modules with a shared design-token system (`src/styles/tokens.css`) for theming, including light/dark mode
- [oxlint](https://oxc.rs) for linting

## Getting started

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build     # type-check and build for production
npm run preview   # preview the production build locally
npm run lint       # lint the codebase
```

## Pages

- `/` — Home
- `/what-we-do` — What We Do
- `/about` — About
- `/projects` — Projects (filterable case-study grid)
- `/contact` — Contact (project enquiry form + FAQ)

## Architecture

```
src/
  components/
    layout/     Header, Footer — shared across every page
    ui/         Reusable primitives (Button, SectionHeading)
    shared/     Cross-page building blocks (PageHero, GradientPanel,
                TechStackPanel, ProcessGrid, StatCardGrid)
    home/       Home-page-only sections
    whatWeDo/   What We Do-only sections
    about/      About-only sections
    projects/   Projects-only sections
    contact/    Contact-only sections
  pages/        One component per route, composing the section components
  data/         Page content, kept separate from presentation
  types/        Shared TypeScript interfaces for content shapes
  hooks/        useTheme, useRevealOnScroll, useTypewriter, useCountUp,
                useReducedMotion
  styles/       Design tokens, motion/reduced-motion handling, small
                cross-cutting utility classes
```

Dark mode is driven by a `data-theme` attribute on `<html>`, backed by CSS custom properties in `tokens.css`, and persisted to `localStorage`.

**Note on CSS Modules + `@keyframes`:** this project's build (Lightning CSS via Vite) scopes `animation` names referenced inside a `.module.css` file. Keyframes must therefore be declared locally in the same module file that uses them rather than in a shared stylesheet — otherwise the scoped reference and the global definition never match, and the animation silently does nothing.

## SEO

- **Per-page titles, descriptions, canonical URLs, Open Graph/Twitter tags and JSON-LD** all live in one place: `src/seo/config.ts`. Edit copy there.
- **Prerendering:** `npm run build` renders every route to real static HTML (`dist/about/index.html`, etc.) via `src/entry-server.tsx` + `scripts/prerender.mjs`, so Google sees full content and meta tags without running JavaScript. `<Seo page="…" />` keeps the head in sync on client-side navigation.
- **Generated at build:** `dist/sitemap.xml` (all indexable pages) and `dist/404.html` (`noindex`).
- **Static files in `public/`:** `robots.txt`, `site.webmanifest`, `favicon.svg/.ico`, app icons and `og-image.png` (1200×630 social share image).
- **Adding a page:** add the route in `src/AppRoutes.tsx`, add an entry to `pages` in `src/seo/config.ts` (with `sitemap`), and render `<Seo page="yourKey" />` in the page component.
