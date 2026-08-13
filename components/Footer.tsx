import { site } from "@/lib/site";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-white/10 bg-base">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-5 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-lg font-semibold text-ink">
            DTAC <span className="font-normal text-ink-muted">Solutions</span>
          </p>
          <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink-faint lg:text-sm">
            {site.tagline}
          </p>
        </div>
        <p className="text-sm text-ink-faint">
          &copy; {year} {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
