const stats = [
  { value: "20+", label: "Years in safety and risk" },
  { value: "Field-first", label: "Findings from the floor, not a checklist" },
  { value: "Independent", label: "No product to sell you, no quota to hit" },
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-content px-5 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Experience that reads a room before it reads a report
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Two decades across operational environments where the cost of an
              overlooked risk is measured in people, not paperwork. That work
              builds an instinct for the hazard everyone has walked past so many
              times it stopped registering.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              Every engagement is direct, confidential, and grounded in what your
              team actually does day to day. The goal is never a thicker binder —
              it&rsquo;s an organization that sees clearly and responds well.
            </p>
          </div>

          <dl className="grid gap-8 self-center sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-l-2 border-accent pl-5"
              >
                <dt className="font-serif text-3xl font-semibold text-ink">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-ink-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
