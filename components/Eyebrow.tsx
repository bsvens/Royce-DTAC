import type { ReactNode } from "react";

// A quiet, professional section label: uppercase, letter-spaced, no rule and
// no decorative numbering.
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent lg:text-sm">
      {children}
    </p>
  );
}
