# Royce DTAC

Marketing site for Royce DTAC — independent risk assessment and safety training.

Single landing page built with **Next.js 14 (App Router)**, **TypeScript**, and
**Tailwind CSS**. Mobile-first, deliberately restrained visual design for a
system-serious safety consultant.

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

- `calendlyUrl` — the real Calendly scheduling link (used by both "Book a free
  consultation" CTAs).
- `formspreeEndpoint` — the real Formspree form endpoint for the contact form.
- `contactEmail` — the public contact address.
- `flags.showTestimonials` — set to `true` once real testimonials replace the
  placeholders in `components/Testimonials.tsx`.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint
