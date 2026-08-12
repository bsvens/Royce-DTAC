"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./motion/Reveal";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const stats = [
  { value: "20+", label: "Years in safety and risk" },
  { value: "Field-first", label: "Findings from the floor, not a checklist" },
  { value: "Independent", label: "No product to sell you, no quota to hit" },
];

export default function Experience() {
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="relative border-b hairline bg-panel/40">
      <div className="mx-auto max-w-content px-5 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest2 text-accent">
              02 — Who you&rsquo;re working with
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.08]">
              Experience that reads a room before it reads a report
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Two decades across operational environments where the cost of an
              overlooked risk is measured in people, not paperwork. That work
              builds an instinct for the hazard everyone has walked past so many
              times it stopped registering.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              Every engagement is direct, confidential, and grounded in what your
              team actually does day to day. The goal is never a thicker binder —
              it&rsquo;s an organization that sees clearly and responds well.
            </p>
          </Reveal>

          <dl className="flex flex-col divide-y divide-white/10 self-center rounded-2xl border border-white/10 bg-base/40">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={reduce ? { opacity: 0 } : { opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
                className="flex items-baseline gap-4 px-6 py-5"
              >
                <dt className="font-serif text-2xl font-semibold text-accent sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="text-sm leading-snug text-ink-muted">{stat.label}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
