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
