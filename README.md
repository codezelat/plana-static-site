# Plan A website

Official website for Plan A, a Sri Lankan event management agency and subsidiary of [Codezela Technologies](https://codezela.com).

The site covers corporate events, conferences and MICE programmes, convocations and awards, weddings, brand activations, and event production in Colombo and across Sri Lanka.

## Stack

- Next.js App Router
- React and TypeScript
- CSS custom properties and global responsive styles
- `next/font` for Instrument Sans
- Lucide icons
- npm package management

No environment variables or external data services are required for the current site.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Main event management landing page |
| `/services` | Service overview |
| `/services/[slug]` | Six statically generated service pages |
| `/portfolio` | Selected event photography |
| `/about` | Plan A and Codezela relationship |
| `/contact` | Contact details and email-draft event brief |
| Unknown routes | Branded 404 response |

The contact form does not store or transmit data to a server. It prepares a message in the visitor's email application for `info@plana.lk`.

## Local development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), or use the port printed by Next.js when 3000 is unavailable.

## Verification

```bash
npm run verify
```

This runs ESLint, TypeScript checking, a production build, and the npm security audit. Individual commands are also available:

```bash
npm run lint
npm run typecheck
npm run build
npm audit --audit-level=high
```

## Search and sharing foundations

- Unique titles, descriptions, canonical URLs, Open Graph data, and Twitter cards
- Organization, professional service, website, service, FAQ, and breadcrumb structured data
- XML sitemap and robots routes
- Branded favicon, Apple touch icon, web app icons, manifest, and social sharing image
- Semantic headings, descriptive image text, internal service links, and a keyboard skip link
- Custom 404 and error recovery interfaces

Search rankings depend on the quality and authority of the live domain in addition to the website. After deployment, verify the production URL, submit `https://plana.lk/sitemap.xml` in Google Search Console, validate structured data, and keep the portfolio and service information current.

## Content and assets

Business details and service content are centralised in `src/lib/site.ts`. Production images are stored under `public/images/plan-a` and should be compressed before they are added.

Do not add invented clients, testimonials, awards, performance figures, or service claims. Confirm business facts with Plan A before publishing them.

## Deployment

The project can run on a standard Next.js host. Before launch:

1. Run `npm ci` and `npm run verify` from a clean checkout.
2. Confirm the production domain, HTTPS, redirects, and response headers.
3. Test every route and form interaction on desktop and mobile.
4. Verify `robots.txt`, `sitemap.xml`, manifest, icons, canonical URLs, and social previews on the live domain.
5. Connect the domain to Google Search Console and appropriate privacy-safe analytics if approved.

This repository is private and proprietary to Plan A and Codezela Technologies.
