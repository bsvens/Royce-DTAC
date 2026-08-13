"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./motion/Reveal";
import { Eyebrow } from "./Eyebrow";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

// NOTE: Real, sourced figures — VERIFY AND UPDATE before launch, and refresh
// annually. Sources:
//   FBI, "Active Shooter Incidents in the United States in 2024" (Jun 2025):
//     24 incidents in 2024, in 19 states; settings included education and
//     houses of worship. (Down 50% from 48 in 2023 — so we frame this stat
//     around where it happens, not the year-over-year trend.)
//     https://www.fbi.gov/news/press-releases/fbi-releases-2024-active-shooter-incidents-in-the-united-states-report
//   FBI / ALERRT research: most incidents end within ~5 minutes, many before
//     police arrive.
//   Fusion Risk Management employee survey: 76% have a written emergency plan,
//     but only 59% have ever participated in a drill/simulation — so 41% never
//     have (100% - 59%).
//     https://www.fusionrm.com/blogs/american-and-international-companies-preparing-for-emergencies/
//   OSHA: ~2 million U.S. workers experience workplace violence each year.
//     https://www.osha.gov/workplace-violence
const stats = [
  {
    figure: "24",
    unit: "",
    label:
      "active-shooter incidents in 2024 — across 19 states, from schools to houses of worship.",
    source: "FBI, 2024",
  },
  {
    figure: "5",
    unit: "min",
    label:
      "is how long most incidents last — many are over before police arrive.",
    source: "FBI / ALERRT",
  },
  {
    figure: "41",
    unit: "%",
    label:
      "of employees have never practiced their emergency plan — though 76% have one on paper.",
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
      className="relative snap-start border-b hairline bg-panel/40"
    >
      <div className="mx-auto w-full max-w-content px-5 py-12 sm:py-14">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>The stakes</Eyebrow>
              <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Preparedness isn&rsquo;t abstract
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ink-muted">
              The events organizations prepare for are more frequent — and
              faster — than most plans assume. And most plans are never practiced.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 lg:mt-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.source + s.figure}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
              className="border-t border-white/15 pt-4"
            >
              <p className="font-serif text-4xl font-semibold leading-none tracking-tight text-accent sm:text-5xl">
                {s.figure}
                {s.unit && (
                  <span className="ml-0.5 text-xl font-medium sm:text-2xl">
                    {s.unit}
                  </span>
                )}
              </p>
              <p className="mt-3 text-sm leading-snug text-ink-muted">
                {s.label}
              </p>
              <p className="mt-2.5 font-mono text-[0.65rem] uppercase tracking-widest text-ink-faint">
                {s.source}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
