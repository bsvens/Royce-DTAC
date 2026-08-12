import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-content px-5 py-20 sm:py-28">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          {site.name}
        </p>

        <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl md:text-6xl">
          Most risks aren&rsquo;t hidden. They&rsquo;re overlooked.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
          Readiness isn&rsquo;t a binder on a shelf. It&rsquo;s knowing where you
          stand before something goes wrong. Independent assessment and training
          that surface the hazards your team has stopped seeing.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={site.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-strong"
          >
            Book a free consultation
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-base font-semibold text-ink transition-colors hover:border-ink hover:bg-slate-50"
          >
            Send a message
          </a>
        </div>
      </div>
    </section>
  );
}
