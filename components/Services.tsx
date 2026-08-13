"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./motion/Reveal";
import { Eyebrow } from "./Eyebrow";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const services = [
  {
    tag: "Assessment",
    title: "Risk & Vulnerability Assessments",
    summary:
      "A structured read of the physical, operational, and human vulnerabilities across your environment — and an honest picture of where they leave you exposed.",
  },
  {
    tag: "Planning",
    title: "Emergency Preparedness & Planning",
    summary:
      "Emergency plans and procedures reviewed and built to be realistic, executable, and understood by the people expected to use them.",
  },
  {
    tag: "Training",
    title: "Staff Readiness & Critical-Incident Training",
    summary:
      "Training that translates into decisions under stress, so staff know what to do when normal systems fail.",
  },
  {
    tag: "Exercises",
    title: "Scenario-Based Exercises & Executive Readiness",
    summary:
      "Tabletop and scenario exercises that pressure-test the plan and sharpen leadership decision-making before a real incident does.",
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
          <Eyebrow>What we do</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-serif text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.08]">
            Four core services, evaluated as one system
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">
            Every campus, facility, and workforce presents different risks.
            Engagements draw on any combination — scoped to the organization and
            what it can realistically implement.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-base/50 p-7 transition-colors duration-300 hover:border-accent/40 sm:p-8"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {service.tag}
              </span>
              <h3 className="mt-4 font-serif text-2xl font-semibold leading-tight text-ink">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-muted">
                {service.summary}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
