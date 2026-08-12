import { site } from "@/lib/site";
import { ShieldIcon } from "./icons";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-white/10 bg-base">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-5 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-accent">
            <ShieldIcon className="h-4 w-4" />
          </span>
          <div>
            <p className="font-serif text-lg font-semibold text-ink">{site.name}</p>
            <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">
              {site.tagline}
            </p>
          </div>
        </div>
        <p className="text-sm text-ink-faint">
          &copy; {year} {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
