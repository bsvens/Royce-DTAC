// Testimonials section — fully built, but kept OFF the live page until we have
// real, attributable quotes and written permission to publish them. Toggle it
// on by setting `flags.showTestimonials = true` in lib/site.ts and replacing
// the placeholder entries below with real content.

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// Placeholder content — DO NOT publish as real. Replace before enabling.
const testimonials: Testimonial[] = [
  {
    quote:
      "The assessment named things we had all quietly accepted as normal. It changed how our supervisors walk the floor.",
    name: "Placeholder Name",
    role: "Operations Director, Placeholder Co.",
  },
  {
    quote:
      "Training that people actually remembered a month later. Direct, specific to our work, no filler.",
    name: "Placeholder Name",
    role: "Safety Lead, Placeholder Co.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-content px-5 py-20 sm:py-24">
        <h2 className="max-w-2xl font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          What clients say
        </h2>

        <div className="mt-12 grid gap-12 sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="border-l-2 border-accent pl-6">
              <blockquote className="font-serif text-xl leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm text-ink-muted">
                <span className="font-semibold text-ink-soft">{t.name}</span>
                {" — "}
                {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
