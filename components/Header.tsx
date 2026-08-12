import Link from "next/link";
import { site } from "@/lib/site";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5">
        <Link
          href="#top"
          className="font-serif text-lg font-semibold tracking-tight text-ink"
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
