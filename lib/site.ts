// Central place for site copy, placeholder integration endpoints, and feature
// flags. Swap the placeholder URLs for the real ones before launch.

export const site = {
  name: "Royce DTAC",
  tagline: "Risk assessment and safety training",

  // TODO: replace with the real Calendly scheduling link.
  calendlyUrl: "https://calendly.com/your-handle/free-consultation",

  // TODO: replace with the real Formspree form endpoint (e.g.
  // https://formspree.io/f/abcdwxyz). The current value is a placeholder.
  formspreeEndpoint: "https://formspree.io/f/your-form-id",

  contactEmail: "hello@roycedtac.com",
} as const;

// Feature flags. Testimonials stay hidden until we have real, attributable
// content and permission to publish it.
export const flags = {
  showTestimonials: false,
} as const;
