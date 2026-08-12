"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./motion/Reveal";
import { CheckIcon } from "./icons";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const services = [
  {
    ref: "SVC / ASSESSMENT",
    title: "All-hazard risk assessment",
    summary:
      "A structured read of the threats and gaps around your people, event, or operation — from someone who has spent a career anticipating what goes wrong.",
    points: [
      "All-hazard evaluation for events, venues, and operations",
      "Threat, vulnerability, and crowd-safety analysis",
      "Staffing plans and contingency planning",
      "Use-of-force policy and practice review",
    ],
  },
  {
    ref: "SVC / TRAINING",
    title: "Use-of-force & safety training",
    summary:
      "Instruction grounded in real tactical command and recognized use-of-force expertise — built for how your people actually operate under pressure.",
    points: [
      "Use-of-force fundamentals and review",
      "De-escalation and decision-making under pressure",
      "Tactical team and incident-response readiness",
      "Supervisor and frontline instruction",
    ],
  },
];

export default function Services() {
  const reduce = useReducedMotion();

  return (
    <section
      id="services"
      className="relative flex min-h-[100svh] snap-start items-center border-b hairline"
    >
      <div className="mx-auto w-full max-w-content px-5 py-20 sm:py-24">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest2 text-accent">
            <span className="hazard-mark" aria-hidden />
            01 — What we do
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.08]">
            Two ways to close the gap
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">
            Assessment shows you what&rsquo;s being missed. Training makes sure it
            stops being missed. Most engagements use both.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-panel/60 p-7 transition-colors duration-300 hover:border-accent/40 sm:p-8"
            >
              {/* hover glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <p className="font-mono text-[0.7rem] uppercase tracking-widest2 text-ink-faint">
                {service.ref}
              </p>
              <h3 className="mt-4 font-serif text-2xl font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-muted">
                {service.summary}
              </p>
              <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-ink/90">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
