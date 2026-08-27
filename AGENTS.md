<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md - Plan A website

## Project

Next.js 16 App Router website for Plan A, a Sri Lankan event management agency and subsidiary of Codezela Technologies. The site uses React, TypeScript, Instrument Sans, and a custom responsive CSS system. It has no Tailwind CSS, CMS, database, or analytics. The contact form uses a Route Handler, Cloudflare Turnstile, and Resend.

## Commands

- Install: `npm ci`
- Develop: `npm run dev`
- Lint: `npm run lint`
- Type check: `npm run typecheck`
- Build: `npm run build`
- Full local gate: `npm run verify`
- Production server: `npm run start`

Always run `npm run lint` before finishing code work. For launch or release work, run `npm run verify`.

## Architecture

- `src/app/layout.tsx`: root metadata, site schema, header, main content, and footer
- `src/app/page.tsx`: home page
- `src/app/services/page.tsx`: service index
- `src/app/services/[slug]/page.tsx`: static service detail pages
- `src/app/portfolio/page.tsx`: selected work
- `src/app/about/page.tsx`: agency and parent-company information
- `src/app/contact/page.tsx`: contact details and event brief
- `src/app/api/contact/route.ts`: validated Turnstile and Resend form delivery
- `src/app/not-found.tsx`: branded 404
- `src/app/error.tsx` and `global-error.tsx`: runtime recovery
- `src/components/Header.tsx`: the main client-side mobile navigation
- `src/components/ContactForm.tsx`: the client-side protected contact form
- `src/lib/site.ts`: central business details, services, portfolio data, FAQs, and navigation
- `src/lib/metadata.ts`: shared page metadata builder
- `src/app/globals.css`: design system and responsive styles
- `public/images/plan-a`: production image assets

Pages are Server Components unless browser interaction requires a Client Component.

## Code conventions

- Read the relevant local Next.js documentation before using or changing framework APIs.
- Use `Link` from `next/link` for internal navigation.
- Use `Image` from `next/image` for content imagery.
- Keep reusable business facts and service content in `src/lib/site.ts`.
- Use semantic HTML, logical heading order, visible focus states, and accessible names.
- Keep colours, type, spacing, and transitions in the existing CSS custom-property system.
- Use CSS classes, not JSX inline style objects.
- Preserve the clean midnight, cyan, and coral visual direction.
- Support the 968px and 640px responsive breakpoints.
- Do not introduce a styling framework or component library.
- Ask before adding a dependency, changing root layout structure, or changing global design tokens.

## Content and SEO

- Never invent clients, testimonials, reviews, awards, metrics, partner relationships, or business claims.
- Keep the confirmed email, phone, address, and Codezela relationship in `siteConfig` unless the user supplies a correction.
- Every indexable route needs a unique title, description, canonical URL, social metadata, and one clear H1.
- Keep sitemap, robots, manifest, icons, structured data, internal links, and visible page copy aligned with actual routes and services.
- Write naturally for people. Do not repeat search phrases unnaturally or create thin keyword pages.

## Verification

- Run `npm run verify` for release work.
- Check all core routes, every service slug, and at least one unknown URL in a production server.
- Verify desktop, tablet, and mobile layouts, including horizontal overflow and content clipping.
- Test the mobile menu with keyboard and touch, FAQ disclosure controls, the contact form, email links, phone links, and external links.
- Confirm the generated canonical, Open Graph, Twitter, robots, sitemap, manifest, favicon, and Apple icon responses.
- Distinguish local build proof from deployed and live-domain proof.

## Boundaries

- Do not commit secrets or `.env` files.
- Do not add fake backend success states.
- Do not deploy, reconnect providers, or change DNS unless the user explicitly requests it.
- Do not force push.
- Preserve this Next.js rules block exactly.
