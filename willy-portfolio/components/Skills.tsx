import { skillGroups } from "@/data/skills";
import SectionLabel from "@/components/decorative/SectionLabel";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
    >
      <SectionLabel index="04" filename="/SKILLS" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.category} className="crt-border bg-white p-5">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-blue-deep">
              # {group.category}
            </p>
            <ul className="flex flex-col gap-1">
              {group.items.map((skill) => (
                <li key={skill.name} className="group/skill relative">
                  <div
                    tabIndex={0}
                    className="cursor-default rounded-sm px-2 py-1.5 text-sm text-ink outline-none transition-colors hover:bg-blue-pale focus-visible:bg-blue-pale"
                  >
                    {skill.name}
                  </div>
                  <div
                    role="tooltip"
                    className="pointer-events-none absolute left-2 top-full z-10 mt-1 w-max max-w-[180px] scale-95 rounded-sm border border-ink bg-ink px-2 py-1 font-mono text-[10px] text-paper opacity-0 shadow-[3px_3px_0_0_rgba(28,35,51,0.5)] transition-all duration-150 group-hover/skill:scale-100 group-hover/skill:opacity-100 group-focus-within/skill:scale-100 group-focus-within/skill:opacity-100"
                  >
                    {skill.note}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
