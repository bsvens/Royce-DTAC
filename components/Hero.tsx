"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site, flags } from "@/lib/site";
import { ArrowIcon } from "./icons";

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
  const booking = flags.enableBooking;

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
        {/* Discipline row — real domains, no fake availability signal */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fade}
          className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.7rem] uppercase tracking-widest2 text-ink-faint"
        >
          {disciplines.map((d, i) => (
            <span key={d} className="flex items-center gap-3">
              {i > 0 && <span className="text-ink-faint/50">/</span>}
              <span>{d}</span>
            </span>
          ))}
        </motion.div>

        {/* Headline — word by word */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={container}
          className="mt-7 max-w-4xl font-serif text-[2.65rem] font-semibold leading-[1.03] tracking-tight text-ink sm:text-6xl md:text-7xl"
        >
          <span className="block">
            {line1.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <motion.span variants={word} className="inline-block">
                  {w}
                  {i < line1.length - 1 ? " " : ""}
                </motion.span>
              </span>
            ))}
          </span>
          <span className="block text-accent">
            {line2.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <motion.span variants={word} className="inline-block">
                  {w}
                  {i < line2.length - 1 ? " " : ""}
                </motion.span>
              </span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fade}
          transition={{ delay: 0.55 }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted"
        >
          Having a plan is different from being prepared to execute it. DTAC
          Solutions helps organizations close that gap &mdash; identifying
          vulnerabilities and building the capability to respond, before a
          critical incident does it for them.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fade}
          transition={{ delay: 0.68 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          {booking ? (
            <>
              <a
                href={site.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-[#0a0d13] shadow-[0_10px_30px_-10px_rgba(245,165,36,0.6)] transition-all hover:bg-accent-soft hover:shadow-[0_14px_40px_-10px_rgba(245,165,36,0.7)]"
              >
                Book a free consultation
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:border-white/25 hover:bg-white/[0.08]"
              >
                Send a message
              </a>
            </>
          ) : (
            <>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-[#0a0d13] shadow-[0_10px_30px_-10px_rgba(245,165,36,0.6)] transition-all hover:bg-accent-soft hover:shadow-[0_14px_40px_-10px_rgba(245,165,36,0.7)]"
              >
                Get in touch
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:border-white/25 hover:bg-white/[0.08]"
              >
                Call or text
              </a>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
