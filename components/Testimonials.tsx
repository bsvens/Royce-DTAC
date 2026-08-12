// Testimonials section — fully built, but kept OFF the live page until we have
// real, attributable quotes and written permission to publish them. Toggle it
// on by setting `flags.showTestimonials = true` in lib/site.ts and replacing
// the placeholder entries below with real content.

"use client";

import { Reveal } from "./motion/Reveal";

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
    <section id="testimonials" className="border-b hairline bg-panel/40">
      <div className="mx-auto max-w-content px-5 py-20 sm:py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest2 text-accent">
            Field notes
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.08]">
            What clients say
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="h-full rounded-2xl border border-white/10 bg-base/40 p-7 sm:p-8">
                <blockquote className="font-serif text-xl leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-white/10 pt-4 font-mono text-xs uppercase tracking-wide text-ink-faint">
                  <span className="text-ink-muted">{t.name}</span> · {t.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
