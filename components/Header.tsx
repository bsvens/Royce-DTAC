"use client";

import { useEffect, useState } from "react";
import { site, flags } from "@/lib/site";
import { ShieldIcon } from "./icons";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-base/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-accent">
            <ShieldIcon className="h-4 w-4" />
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight text-ink">
            {site.name}
          </span>
        </a>

        <nav className="hidden items-center gap-9 sm:flex">
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

        {flags.enableBooking ? (
          <a
            href={site.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-[#0a0d13] transition-colors hover:bg-accent-soft sm:inline-flex"
          >
            Book a consultation
          </a>
        ) : (
          <a
            href="#contact"
            className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-[#0a0d13] transition-colors hover:bg-accent-soft sm:inline-flex"
          >
            Get in touch
          </a>
        )}

        {/* Mobile: single compact action. */}
        <a
          href="#contact"
          className="rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-semibold text-ink transition-colors hover:bg-white/10 sm:hidden"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
