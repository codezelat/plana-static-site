<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md - Plan A Static Site

## Project Overview

Next.js 16 App Router static site for Plan A, a premium event planning agency in Sri Lanka and a subsidiary of Codezela Technologies (https://codezela.com). Uses React 19, TypeScript, and a dark glassmorphism design system with Montserrat + Open Sans fonts. All styling is done via CSS custom properties defined in `globals.css` and scoped `<style jsx>` blocks within components. No Tailwind CSS or external UI libraries are used.

## Tech Stack

- Framework: Next.js 16.2.9 (App Router)
- Language: TypeScript
- React: 19.2.4
- Package Manager: npm
- Linting: ESLint 9 with `eslint-config-next`
- Fonts: Google Fonts (Montserrat, Open Sans) loaded via CSS `@import`

## Key Commands

- Install deps: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build`
- Production start: `npm run start`
- Lint: `npm run lint`

Always run `npm run lint` before completing any task.

## Project Structure

- `src/app/` - Pages using App Router (each folder = a route)
- `src/app/layout.tsx` - Root layout wrapping all pages with Header and Footer
- `src/app/globals.css` - All CSS custom properties, resets, and utility classes
- `src/app/page.tsx` - Home page (client component with forms and hover state)
- `src/components/Header.tsx` - Fixed glassmorphism header with mobile drawer
- `src/components/Footer.tsx` - Four-column footer with newsletter form
- `public/images/` - Event portfolio images and hero background
- `public/logo.png` - Brand logo used in Header and Footer

## Code Style

- All pages are `"use client"` components (they use `useState` for forms and interactivity)
- Styling uses `<style jsx>` blocks co-located within each component
- CSS custom properties from `globals.css` are referenced via `var(--token-name)`
- Use `Link` from `next/link` for internal navigation, not `<a>` tags
- Use `usePathname()` from `next/navigation` for active route detection
- Component files use PascalCase naming (e.g., `Header.tsx`, `Footer.tsx`)
- Page files are named `page.tsx` per Next.js App Router conventions

## Design System Conventions

- Dark background: `--bg-primary: #0b0f19`
- Glass cards use `.glass-card` class with backdrop blur and border glow on hover
- Gradient text uses `.gradient-text` class (aqua gradient)
- Buttons use `.glow-btn` (filled) or `.glow-btn-outline` (outlined) classes
- Section tags use `.section-tag` class (uppercase, aqua color, letter-spaced)
- Grid layouts use `.grid-2`, `.grid-3`, `.grid-4` utility classes from globals.css
- Responsive breakpoints: 968px (tablet), 640px (mobile)

## Non-Obvious Patterns

- Portfolio and service cards use `::before` and `::after` pseudo-elements for hover gradient overlays. The `::before` is always visible (dark overlay), while `::after` fades in on hover with category-specific gradients. Content must have `position: relative; z-index: 1` to appear above overlays.
- The Header component uses `:global()` selectors in its `<style jsx>` block for Link components because Next.js scoping does not reach into child component rendered markup.
- Form submissions use `setTimeout` to simulate async behavior. There is no actual backend integration.
- The consultation form on the home page and the contact form on `/contact` are independent implementations with similar but not identical fields.

## Testing Rules

- Run `npm run lint` before marking any task complete
- Run `npm run build` to verify the production build succeeds with no errors
- Verify responsive behavior at 968px and 640px breakpoints

## Boundaries

### Always
- Preserve the existing design token system in `globals.css`
- Use `<style jsx>` for component-scoped styles
- Use CSS custom properties for all colors, fonts, and transitions
- Maintain the dark glassmorphism aesthetic

### Ask First
- Adding new npm dependencies
- Modifying the global CSS custom properties
- Changing the layout structure in `layout.tsx`

### Never
- Introduce Tailwind CSS or other CSS frameworks
- Use inline styles instead of CSS custom properties
- Remove or modify the `<!-- BEGIN:nextjs-agent-rules -->` block
- Commit `.env` files, secrets, or credentials
- Force push to main
