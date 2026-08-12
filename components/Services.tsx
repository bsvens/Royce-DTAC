"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./motion/Reveal";
import { Eyebrow } from "./Eyebrow";
import { CheckIcon } from "./icons";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const services = [
  {
    ref: "SVC / ASSESSMENT & PLANNING",
    title: "Assessment & planning",
    summary:
      "A clear read of where the organization actually stands — its people, physical environment, existing plans, and operational capabilities.",
    points: [
      "Physical and operational risk assessments",
      "Emergency plan and procedure review",
      "Active-assailant & workplace-violence preparedness",
      "Communication and accountability systems",
      "Coordination with public-safety response",
    ],
  },
  {
    ref: "SVC / TRAINING & EXERCISES",
    title: "Training & exercises",
    summary:
      "Preparation that translates into decisions under stress — for the staff who respond first and the leaders who set priorities.",
    points: [
      "Staff preparedness and critical-incident training",
      "Leadership decision-making and crisis management",
      "Scenario-based exercises and tabletop discussions",
      "Follow-up assessments and improvement planning",
    ],
  },
];

export default function Services() {
  const reduce = useReducedMotion();

  return (
    <section
      id="services"
      className="relative flex min-h-[100svh] snap-start items-center border-b hairline bg-panel/40"
    >
      <div className="mx-auto w-full max-w-content px-5 py-20 sm:py-24">
        <Reveal>
          <Eyebrow>02 / What we do</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-serif text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.08]">
            Two disciplines, evaluated as one system
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">
            Every campus, facility, and workforce presents different risks. Work
            is scoped to the organization — and to what it can realistically
            implement.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-base/50 p-7 transition-colors duration-300 hover:border-accent/40 sm:p-8"
            >
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
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-ink/90"
                  >
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
