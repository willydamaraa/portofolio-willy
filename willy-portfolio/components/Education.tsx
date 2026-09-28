import { education } from "@/data/education";
import SectionLabel from "@/components/decorative/SectionLabel";

export default function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
    >
      <SectionLabel index="03" filename="EDUCATION.log" />

      <ol className="relative border-l border-ink/20 pl-6 sm:pl-8">
        {education.map((entry) => (
          <li key={entry.institution} className="mb-10 last:mb-0">
            <span
              className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border border-ink bg-blue-soft"
              aria-hidden="true"
            />
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-blue-deep">
              {entry.period}
            </p>
            <h3 className="mt-1 text-xl font-bold text-ink sm:text-2xl">
              {entry.institution}
            </h3>
            <p className="mt-0.5 text-sm text-ink/70">{entry.program}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
