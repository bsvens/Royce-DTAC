"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/**
 * Fixed, page-wide background that responds to scroll: a faint engineering
 * grid and a single, restrained amber wash that drifts down the page, plus a
 * slim scroll-progress bar. Deliberately subtle — atmosphere, not spectacle.
 * Sections are mostly transparent so this shows through. Reduced-motion pins
 * everything static.
 */
export default function ScrollBackground() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const glowTop = useTransform(scrollYProgress, [0, 1], ["-6%", "78%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.55, 0.3]);

  return (
    <>
      {/* Scroll progress — thin amber line. */}
      <motion.div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-accent/80"
        style={{ scaleX: scrollYProgress }}
      />

      <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-accent/[0.12] blur-[150px]"
          style={
            reduce
              ? { top: "4%", opacity: 0.4 }
              : { top: glowTop, opacity: glowOpacity }
          }
        />

        {/* Settle to solid ground toward the foot of the page. */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base" />
      </div>
    </>
  );
}
