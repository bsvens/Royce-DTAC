"use client";

import { Reveal } from "./motion/Reveal";
import { Eyebrow } from "./Eyebrow";

// Curated for a client audience — the roles that signal authority on the
// problems clients actually hire DTAC for (active-shooter readiness, emergency
// planning, behavioral/threat, command). LE-internal roles (defensive tactics,
// arrest & control, field training, etc.) are intentionally omitted.
const credentials = [
  "Department Active-Shooter Coordinator",
  "Emergency Action Plan Coordinator",
  "Countywide Active-Shooter Training Cadre",
  "Behavioral Health Program Supervisor",
  "Tactical Team Leader",
  "Use-of-Force Reviewer",
];

function CredentialList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-sm text-ink-muted lg:text-[0.95rem]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative flex min-h-[100svh] snap-start items-center border-b hairline bg-panel/40"
    >
      <div className="mx-auto w-full max-w-content px-5 py-20 sm:py-24">
        <Reveal>
          <Eyebrow>Background</Eyebrow>
          <h2 className="mt-5 max-w-3xl font-serif text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.08]">
            An independent, practitioner-informed perspective
          </h2>
          <div className="mt-6 grid max-w-4xl gap-4 text-lg leading-relaxed text-ink-muted sm:grid-cols-2 sm:gap-8">
            <p>
              DTAC Solutions is led by Royce, who has spent most of his adult life
              in law enforcement and is a subject-matter expert on use of force.
              As a tactical team leader and active-shooter coordinator, he has
              operated where the margin for a missed risk is smallest.
            </p>
            <p>
              His experience spans incident command and emergency management,
              supervising a behavioral-health program, and serving as an
              all-hazard evaluator responsible for anticipating and mitigating
              risk at major operations and community events. The credentials
              below are held through California public-safety boards and
              institutions.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 border-t border-white/10 pt-10">
            <p className="font-mono text-xs uppercase tracking-widest2 text-ink-faint lg:text-sm">
              Credentials
            </p>
            <CredentialList items={credentials} />
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-muted lg:text-base">
              State-certified in incident command, emergency management, and
              active-shooter response (California POST).
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
