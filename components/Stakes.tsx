"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./motion/Reveal";
import { Eyebrow } from "./Eyebrow";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

// NOTE: Real, sourced figures — VERIFY AND UPDATE before launch, and refresh
// annually. Sources:
//   FBI, "Active Shooter Incidents in the United States in 2023" (2024):
//     48 incidents in 2023, up 60% from 30 in 2019.
//     https://www.fbi.gov/news/press-releases/fbi-releases-2023-active-shooter-incidents-in-the-united-states-report
//   FBI / ALERRT research: most incidents end within ~5 minutes, many before
//     police arrive.
//   Fusion Risk Management employee survey: 76% have a written emergency plan,
//     but only 59% have ever participated in a drill/simulation.
//     https://www.fusionrm.com/blogs/american-and-international-companies-preparing-for-emergencies/
//   OSHA: ~2 million U.S. workers experience workplace violence each year.
//     https://www.osha.gov/workplace-violence
const stats = [
  {
    figure: "48",
    unit: "",
    label:
      "active-shooter incidents in the U.S. in 2023 — up 60% from five years earlier.",
    source: "FBI, 2023",
  },
  {
    figure: "5",
    unit: "min",
    label:
      "is how long most incidents last — many are over before police arrive.",
    source: "FBI / ALERRT",
  },
  {
    figure: "59",
    unit: "%",
    label:
      "of employees have ever practiced their emergency plan — though 76% have one on paper.",
    source: "Fusion Risk Mgmt.",
  },
  {
    figure: "2",
    unit: "M",
    label: "U.S. workers experience workplace violence every year.",
    source: "OSHA",
  },
];

export default function Stakes() {
  const reduce = useReducedMotion();

  return (
    <section
      id="stakes"
      className="relative flex min-h-[100svh] snap-start items-center border-b hairline bg-panel/40"
    >
      <div className="mx-auto w-full max-w-content px-5 py-20 sm:py-24">
        <Reveal>
          <Eyebrow>The stakes</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-serif text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.08]">
            Preparedness isn&rsquo;t abstract
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">
            The events organizations prepare for are more frequent — and faster —
            than most plans assume. And most plans are never practiced.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.source + s.figure}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
              className="border-t border-white/15 pt-5"
            >
              <p className="font-serif text-5xl font-semibold leading-none tracking-tight text-accent sm:text-6xl">
                {s.figure}
                {s.unit && (
                  <span className="ml-0.5 text-2xl font-medium sm:text-3xl">
                    {s.unit}
                  </span>
                )}
              </p>
              <p className="mt-4 text-sm leading-snug text-ink-muted">
                {s.label}
              </p>
              <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-widest text-ink-faint">
                {s.source}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
