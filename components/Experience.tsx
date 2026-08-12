"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./motion/Reveal";
import { Eyebrow } from "./Eyebrow";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const credentials = [
  { value: "Use of Force", label: "Recognized subject-matter expert" },
  { value: "Tactical Team Leader", label: "Operational command experience" },
  { value: "All-Hazard Evaluator", label: "Staffing & mitigation for major events" },
  { value: "CA Certified", label: "Multiple public-safety boards & institutions" },
];

export default function Experience() {
  const reduce = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative flex min-h-[100svh] snap-start items-center border-b hairline bg-panel/40"
    >
      <div className="mx-auto w-full max-w-content px-5 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <Eyebrow>04 / Who you&rsquo;re working with</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.08]">
              An independent, practitioner-informed perspective
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              DTAC Solutions is led by Royce, who has spent most of his adult
              life in law enforcement and is a subject-matter expert on use of
              force. As a tactical team leader, he has operated where the margin
              for a missed risk is smallest.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              As an all-hazard evaluator for major community events, he has been
              responsible for anticipating and mitigating every risk a crowd can
              present. He holds certifications from numerous California
              public-safety boards and institutions.
            </p>
          </Reveal>

          <dl className="grid grid-cols-2 gap-3 self-center">
            {credentials.map((c, i) => (
              <motion.div
                key={c.value}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                className="flex flex-col rounded-2xl border border-white/10 bg-base/40 p-5"
              >
                <dt className="font-serif text-lg font-semibold leading-tight text-accent">
                  {c.value}
                </dt>
                <dd className="mt-2 text-sm leading-snug text-ink-muted">
                  {c.label}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
