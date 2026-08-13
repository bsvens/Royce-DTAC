"use client";

import { useEffect, useState } from "react";
import { site, flags } from "@/lib/site";

const nav = [
  { href: "#purpose", label: "Purpose" },
  { href: "#services", label: "What we do" },
  { href: "#leadership", label: "Leadership" },
  { href: "#experience", label: "Experience" },
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
        <a
          href="#top"
          className="font-serif text-lg font-semibold tracking-tight text-ink transition-colors hover:text-white"
        >
          DTAC <span className="font-normal text-ink-muted">Solutions</span>
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
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-[#0a0d13] transition-colors hover:bg-accent-soft"
          >
            Book a consultation
          </a>
        ) : (
          <a
            href="#contact"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-[#0a0d13] transition-colors hover:bg-accent-soft"
          >
            Get in touch
          </a>
        )}
      </div>
    </header>
  );
}
