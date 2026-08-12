// Central place for site copy, placeholder integration endpoints, and feature
// flags. Swap the placeholder URLs for the real ones before launch.

export const site = {
  name: "DTAC Solutions",
  legalName: "DTAC Solutions LLC",
  principal: "Royce",
  tagline: "Critical-incident preparedness for organizations",
  role: "Emergency Preparedness & Risk Consulting",

  // TODO: replace with the real Calendly scheduling link. Only used when
  // flags.enableBooking is true (see below).
  calendlyUrl: "https://calendly.com/your-handle/free-consultation",

  // TODO: replace with the real Formspree form endpoint (e.g.
  // https://formspree.io/f/abcdwxyz). The current value is a placeholder.
  formspreeEndpoint: "https://formspree.io/f/your-form-id",

  // TODO: replace with the real contact address.
  contactEmail: "hello@roycedtac.com",
} as const;

export const flags = {
  // Testimonials stay hidden until we have real, attributable content and
  // permission to publish it.
  showTestimonials: false,

  // Royce's full-time work and capacity may make live scheduling more of an
  // obstruction than a help, so the site defaults to a simple contact-first
  // flow. If he'd rather take bookings, flip this to true and the Calendly
  // CTAs (header, hero, mobile bar, contact card) light up automatically.
  enableBooking: false,
} as const;
