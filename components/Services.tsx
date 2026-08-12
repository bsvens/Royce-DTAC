const services = [
  {
    title: "Risk assessment",
    summary:
      "A clear-eyed read of where your organization actually stands — not where the paperwork says it does.",
    points: [
      "On-site hazard and process walkthroughs",
      "Gap analysis against relevant standards",
      "Prioritized findings with practical remediation",
      "Plain-language reporting leadership can act on",
    ],
  },
  {
    title: "Safety training",
    summary:
      "Training that changes what people do, built around the risks your team faces — not a generic slide deck.",
    points: [
      "Role-specific hazard awareness",
      "Emergency response and drills",
      "Supervisor and frontline programs",
      "Follow-up to make the learning stick",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-content px-5 py-20 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Two ways to close the gap
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Assessment shows you what&rsquo;s being missed. Training makes sure it
            stops being missed. Most engagements use both.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-8">
              <h3 className="font-serif text-2xl font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-muted">
                {service.summary}
              </p>
              <ul className="mt-6 space-y-3">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3 text-ink-soft">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent"
                    />
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
