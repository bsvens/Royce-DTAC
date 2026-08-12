"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

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

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-content px-5 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Start with a conversation
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Tell me what you&rsquo;re responsible for and what&rsquo;s keeping
              you up at night. The first consultation is free and confidential —
              no obligation, no sales script.
            </p>
            <div className="mt-8">
              <a
                href={site.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-strong"
              >
                Book a free consultation
              </a>
              <p className="mt-4 text-sm text-ink-muted">
                Prefer email?{" "}
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="font-medium text-accent underline underline-offset-2 hover:text-accent-strong"
                >
                  {site.contactEmail}
                </a>
              </p>
            </div>
          </div>

          <div>
            {status === "success" ? (
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-8">
                <h3 className="font-serif text-xl font-semibold text-ink">
                  Message received.
                </h3>
                <p className="mt-3 leading-relaxed text-ink-muted">
                  Thanks for reaching out. I&rsquo;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-ink-soft"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-3 text-ink shadow-sm outline-none transition-colors focus:border-ink focus:ring-1 focus:ring-ink"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-ink-soft"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-3 text-ink shadow-sm outline-none transition-colors focus:border-ink focus:ring-1 focus:ring-ink"
                  />
                </div>

                <div>
                  <label
                    htmlFor="organization"
                    className="block text-sm font-medium text-ink-soft"
                  >
                    Organization <span className="text-ink-muted">(optional)</span>
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    autoComplete="organization"
                    className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-3 text-ink shadow-sm outline-none transition-colors focus:border-ink focus:ring-1 focus:ring-ink"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-ink-soft"
                  >
                    What can I help with?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-3 text-ink shadow-sm outline-none transition-colors focus:border-ink focus:ring-1 focus:ring-ink"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm font-medium text-accent-strong">
                    Something went wrong sending your message. Please try again or
                    email {site.contactEmail}.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center rounded-md bg-ink px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-ink-soft disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === "submitting" ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
