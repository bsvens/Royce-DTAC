"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const line1 = ["Most", "risks", "aren’t", "hidden."];
const line2 = ["They’re", "overlooked."];

const disciplines = [
  "Risk assessment",
  "Emergency planning",
  "Critical-incident training",
];

export default function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
  };
  const word = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: "0.4em" },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };
  const fade = {
    hidden: { opacity: 0, y: reduce ? 0 : 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] snap-start items-center border-b hairline"
    >
      <div className="relative mx-auto w-full max-w-content px-5 pb-20 pt-20 sm:pb-28 sm:pt-28">
        {/* Headline — word by word */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={container}
          className="max-w-4xl font-serif text-[2.65rem] font-semibold leading-[1.03] tracking-tight text-ink sm:text-6xl md:text-7xl"
        >
          <span className="block">
            {line1.map((w, i) => (
              <Fragment key={i}>
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.span variants={word} className="inline-block">
                    {w}
                  </motion.span>
                </span>
                {i < line1.length - 1 ? " " : null}
              </Fragment>
            ))}
          </span>
          <span className="block text-accent">
            {line2.map((w, i) => (
              <Fragment key={i}>
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.span variants={word} className="inline-block">
                    {w}
                  </motion.span>
                </span>
                {i < line2.length - 1 ? " " : null}
              </Fragment>
            ))}
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fade}
          transition={{ delay: 0.5 }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted"
        >
          <span className="font-medium text-ink">
            DTAC Solutions is critical-incident preparedness for organizations.
          </span>{" "}
          Having a plan is different from being prepared to execute it — we help
          you close that gap, identifying vulnerabilities and building the
          capability to respond before a critical incident does it for you.
        </motion.p>

        {/* Discipline row — moved below so the headline leads */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fade}
          transition={{ delay: 0.62 }}
          className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/10 pt-6 font-mono text-[0.7rem] uppercase tracking-widest2 text-ink-faint"
        >
          {disciplines.map((d, i) => (
            <span key={d} className="flex items-center gap-3">
              {i > 0 && <span className="text-ink-faint/50">/</span>}
              <span>{d}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
