# DTAC Solutions

Marketing site for **DTAC Solutions LLC** — Royce's independent risk assessment
and safety training practice (use of force, tactical operations, all-hazard
planning).

Single landing page built with **Next.js 14 (App Router)**, **TypeScript**, and
**Tailwind CSS**. Dark, dense, and motion-driven; mobile-first, with full-page
scroll-snap so each section animates onto the screen as you scroll.

## Sections

1. **Hero** — "Most risks aren't hidden. They're overlooked." with two CTAs.
2. **Services** — risk assessment + safety training.
3. **Experience** — background and positioning.
4. **Testimonials** — fully built, hidden behind a feature flag until real,
   attributable content is available (`flags.showTestimonials` in `lib/site.ts`).
5. **Contact** — form wired to Formspree, plus a Calendly booking link.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before launch — replace these placeholders

Everything configurable lives in [`lib/site.ts`](lib/site.ts):

- `formspreeEndpoint` — the real Formspree form endpoint for the contact form.
- `contactEmail` — the public contact address.
- `calendlyUrl` — the real Calendly scheduling link (only used when booking is
  enabled — see below).
- `flags.enableBooking` — `false` by default, so the site is **contact-first**.
  Flip to `true` and Calendly "Book" CTAs appear across the header, hero, mobile
  bar, and the glass contact card automatically.
- `flags.showTestimonials` — set to `true` once real testimonials replace the
  placeholders in `components/Testimonials.tsx`.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint
