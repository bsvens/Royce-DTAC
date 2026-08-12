import { site } from "@/lib/site";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-slate-200 bg-ink">
      <div className="mx-auto flex max-w-content flex-col gap-2 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-serif text-lg font-semibold text-white">
          {site.name}
        </p>
        <p className="text-sm text-slate-400">
          {site.tagline} · &copy; {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
