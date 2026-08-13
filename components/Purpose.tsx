"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./motion/Reveal";
import { Eyebrow } from "./Eyebrow";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const pillars = [
  {
    label: "People",
    line: "Do employees understand what to do when normal systems fail?",
  },
  {
    label: "Plans",
    line: "Are procedures realistic — and executable under pressure?",
  },
  {
    label: "Systems",
    line: "Do communications and technology support real decisions?",
  },
  {
    label: "Leadership",
    line: "Can leaders set priorities quickly when time is short?",
  },
];

export default function Purpose() {
  const reduce = useReducedMotion();

  return (
    <section
      id="purpose"
      className="relative flex min-h-[100svh] snap-start items-center border-b hairline"
    >
      <div className="mx-auto w-full max-w-content px-5 py-20 sm:py-24">
        <Reveal>
          <Eyebrow>Purpose</Eyebrow>
          <h2 className="mt-5 max-w-3xl font-serif text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.08]">
            Preparedness, built around the people who have to execute the plan.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Organizations invest heavily in policies, emergency plans, security
            technology, and training. But a plan on a shelf has limited value if
            the people expected to carry it out aren&rsquo;t ready. DTAC evaluates
            preparedness as a complete system &mdash; and turns plans into
            capability.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className="bg-base/80 p-6 sm:p-7"
            >
              <h3 className="font-serif text-2xl font-semibold text-ink">
                {p.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted lg:text-base">
                {p.line}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
