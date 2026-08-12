"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { site, flags } from "@/lib/site";
import { Reveal } from "./motion/Reveal";
import {
  CalendarIcon,
  ChatIcon,
  MailIcon,
  ShieldIcon,
  CheckIcon,
  ArrowIcon,
} from "./icons";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "mt-2 block w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-ink placeholder:text-ink-faint outline-none transition-all focus:border-accent/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-accent/25";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const reduce = useReducedMotion();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(site.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const actions = [
    ...(flags.enableBooking
      ? [
          {
            label: "Book",
            icon: CalendarIcon,
            href: site.calendlyUrl,
            external: true,
          },
        ]
      : []),
    {
      label: "Message",
      icon: ChatIcon,
      onClick: () => messageRef.current?.focus(),
    },
    {
      label: "Email",
      icon: MailIcon,
      href: `mailto:${site.contactEmail}`,
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Refracting light behind the glass */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/20 blur-[110px]" />
        <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-sky-500/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-content px-5 py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Intro */}
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest2 text-accent">
              <span className="hazard-mark" aria-hidden />
              03 — Start here
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.08]">
              Start with a conversation
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Tell me what you&rsquo;re responsible for and what&rsquo;s keeping
              you up at night — an event, an operation, a team, a policy. No
              obligation, no sales script.
            </p>
            <p className="mt-4 font-mono text-sm text-ink-faint">
              Every message is read personally and kept confidential.
            </p>
          </Reveal>

          {/* Glass contact card */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="glass rounded-[28px] p-6 sm:p-8"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center py-10 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-accent/10 text-accent ring-1 ring-accent/30">
                  <CheckIcon className="h-8 w-8" />
                </span>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-ink">
                  Message received.
                </h3>
                <p className="mt-3 max-w-sm leading-relaxed text-ink-muted">
                  Thanks for reaching out. I&rsquo;ll get back to you shortly —
                  usually within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 font-mono text-sm text-accent transition-colors hover:text-accent-soft"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <>
                {/* iOS-style contact header */}
                <div className="flex flex-col items-center text-center">
                  <span className="grid h-[68px] w-[68px] place-items-center rounded-full bg-gradient-to-br from-accent to-accent-strong text-[#0a0d13] shadow-[0_10px_30px_-8px_rgba(245,165,36,0.6)]">
                    <ShieldIcon className="h-8 w-8" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-ink">
                    {site.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-ink-faint">
                    {site.role}
                  </p>
                </div>

                {/* Quick actions */}
                <div
                  className={`mt-6 grid gap-2.5 ${
                    actions.length === 3 ? "grid-cols-3" : "grid-cols-2"
                  }`}
                >
                  {actions.map((action) => {
                    const Icon = action.icon;
                    const inner = (
                      <>
                        <span className="grid h-11 w-11 place-items-center rounded-full bg-accent/10 text-accent ring-1 ring-inset ring-white/10 transition-colors group-hover/act:bg-accent/20">
                          <Icon className="h-[18px] w-[18px]" />
                        </span>
                        <span className="font-mono text-[0.7rem] uppercase tracking-wide text-ink-muted">
                          {action.label}
                        </span>
                      </>
                    );
                    const shell =
                      "group/act flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] py-3.5 transition-colors hover:bg-white/[0.06]";
                    return action.href ? (
                      <a
                        key={action.label}
                        href={action.href}
                        {...(action.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className={shell}
                      >
                        {inner}
                      </a>
                    ) : (
                      <button
                        key={action.label}
                        type="button"
                        onClick={action.onClick}
                        className={shell}
                      >
                        {inner}
                      </button>
                    );
                  })}
                </div>

                <div className="my-6 h-px bg-white/10" />

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium uppercase tracking-wide text-ink-muted">
                        Name
                      </label>
                      <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wide text-ink-muted">
                        Email
                      </label>
                      <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-xs font-medium uppercase tracking-wide text-ink-muted">
                      Organization <span className="text-ink-faint">(optional)</span>
                    </label>
                    <input id="organization" name="organization" type="text" autoComplete="organization" className={fieldClass} />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wide text-ink-muted">
                      What can I help with?
                    </label>
                    <textarea id="message" name="message" ref={messageRef} rows={4} required className={fieldClass} />
                  </div>

                  {status === "error" && (
                    <p className="text-sm font-medium text-accent-soft">
                      Something went wrong sending your message. Please try again
                      or email {site.contactEmail}.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-[#0a0d13] transition-all hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "submitting" ? "Sending…" : "Send message"}
                    {status !== "submitting" && (
                      <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
