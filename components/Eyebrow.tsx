import type { ReactNode } from "react";

// A restrained editorial label: a short solid rule + mono caps. Replaces the
// earlier hazard-stripe motif — cleaner, more serious.
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest2 text-accent">
      <span aria-hidden className="h-px w-8 flex-none bg-accent/70" />
      {children}
    </p>
  );
}
