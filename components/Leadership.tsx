"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./motion/Reveal";
import { Eyebrow } from "./Eyebrow";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const questions = [
  "Are our people prepared?",
  "Are our plans realistic?",
  "Do our systems support the decisions people will need to make?",
  "Where are our greatest vulnerabilities?",
  "What can we improve before an incident forces us to?",
];

export default function Leadership() {
  const reduce = useReducedMotion();

  return (
    <section
      id="leadership"
      className="relative flex min-h-[100svh] snap-start items-center border-b hairline"
    >
      <div className="mx-auto w-full max-w-content px-5 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <Eyebrow>For leadership</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.08]">
              The questions worth answering first
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Preparedness is an organizational responsibility. DTAC provides an
              independent, practitioner-informed read on the ones that matter
              most.
            </p>
          </Reveal>

          <ol className="flex flex-col divide-y divide-white/10 border-t border-white/10">
            {questions.map((q, i) => (
              <motion.li
                key={q}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
                className="flex items-baseline gap-5 py-5"
              >
                <span className="font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-xl leading-snug text-ink sm:text-2xl">
                  {q}
                </span>
              </motion.li>
            ))}
          </ol>
        </div>

        <Reveal>
          <p className="mt-12 max-w-3xl border-l-2 border-accent pl-5 font-serif text-xl italic leading-relaxed text-ink-muted sm:text-2xl">
            The goal isn&rsquo;t perfection. It&rsquo;s an organization more
            prepared today than it was yesterday.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
