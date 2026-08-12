"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/**
 * Fixed, page-wide background that responds to scroll: a faint engineering
 * grid plus an amber "hazard" glow that travels down the page, and a slim
 * scroll-progress bar. Sits behind all content (-z-10); sections are mostly
 * transparent so this shows through. Reduced-motion pins everything static.
 */
export default function ScrollBackground() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const glowTop = useTransform(scrollYProgress, [0, 1], ["-8%", "72%"]);
  const glowX = useTransform(scrollYProgress, [0, 0.5, 1], ["-50%", "-38%", "-56%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.55, 0.85, 0.4]);
  const coolTop = useTransform(scrollYProgress, [0, 1], ["115%", "8%"]);

  return (
    <>
      {/* Scroll progress — thin amber line. */}
      <motion.div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-accent"
        style={{ scaleX: scrollYProgress }}
      />

      <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 grid-field-fixed" />

        <motion.div
          className="absolute h-[42rem] w-[42rem] rounded-full bg-accent/20 blur-[130px]"
          style={
            reduce
              ? { top: "6%", left: "50%", x: "-50%", opacity: 0.55 }
              : { top: glowTop, left: "50%", x: glowX, opacity: glowOpacity }
          }
        />

        <motion.div
          className="absolute right-0 h-72 w-72 rounded-full bg-sky-500/10 blur-[110px]"
          style={reduce ? { top: "40%" } : { top: coolTop }}
        />

        {/* Settle to solid ground toward the foot of the page. */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base" />
      </div>
    </>
  );
}
