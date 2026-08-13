"use client";

import { Reveal } from "./motion/Reveal";
import { Eyebrow } from "./Eyebrow";

const certifications = [
  "Department Active Shooter Coordinator",
  "Tactical Team Leader",
  "Countywide Active Shooter Training Cadre",
  "Department Use of Force Reviewer",
  "Defensive Tactics Instructor",
  "Arrest & Control Instructor",
  "Emergency Action Plan Coordinator",
  "Behavioral Health Program Supervisor",
  "Incident Command Vehicle Project Manager",
  "Field Training Officer",
];

const postCourse = [
  "Incident Command System",
  "Leadership Development",
  "Behavioral Health Response",
  "Emergency Management",
  "Active Shooter Response",
  "Rescue Task Force",
  "Instructor Development",
];

function CredentialList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm text-ink/85">
          <span
            aria-hidden
            className="mt-[0.45rem] h-1 w-1 flex-none rounded-full bg-accent/80"
          />
          <span className="leading-snug">{item}</span>
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
              His work spans incident command, emergency management, and
              behavioral-health response — anticipating and mitigating risk for
              major operations and community events. The credentials below are
              held through California public-safety boards and institutions.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 border-t border-white/10 pt-10">
            <p className="font-mono text-xs uppercase tracking-widest2 text-ink-faint">
              Certifications &amp; assignments
            </p>
            <CredentialList items={certifications} />

            <div className="mt-10">
              <p className="font-mono text-xs uppercase tracking-widest2 text-ink-faint">
                Coursework
              </p>
              <h3 className="mt-2 font-serif text-lg font-semibold text-ink">
                POST Supervisory Course
              </h3>
              <CredentialList items={postCourse} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
