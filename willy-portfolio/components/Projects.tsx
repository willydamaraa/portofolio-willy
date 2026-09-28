import { projects, featuredProject } from "@/data/projects";
import SectionLabel from "@/components/decorative/SectionLabel";

export default function Projects() {
  const restProjects = projects.filter((p) => p.id !== featuredProject.id);

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
    >
      <SectionLabel index="05" filename="PROJECTS.zip" />

      {/* Featured project */}
      <article className="crt-border mb-14 grid grid-cols-1 gap-0 overflow-hidden bg-white md:grid-cols-2">
        {/* Placeholder screenshot area — swap the div below for a real
            <Image> once a screenshot is available. */}
        <div
          className="flex min-h-[220px] flex-col items-center justify-center gap-2 border-b border-ink bg-blue-pale p-6 md:border-b-0 md:border-r"
          role="img"
          aria-label={`Screenshot placeholder for ${featuredProject.name}`}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/50">
            preview
          </span>
          <span className="font-mono text-xs text-ink/70">
            [ add project screenshot here ]
          </span>
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-blue-deep">
            featured
          </span>
          <h3 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">
            {featuredProject.name}
          </h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-ink/50">
            {featuredProject.category} · {featuredProject.year}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/80">
            {featuredProject.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {featuredProject.stack.map((tech) => (
              <li
                key={tech}
                className="border border-ink/30 bg-paper px-2 py-0.5 font-mono text-[10px] uppercase text-ink/70"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-[0.1em]">
            <a
              href={featuredProject.liveUrl}
              className="link-underline text-blue-deep"
            >
              View project
            </a>
            <a
              href={featuredProject.codeUrl}
              className="link-underline text-ink"
            >
              View code
            </a>
          </div>
        </div>
      </article>

      {/* Remaining projects — vertical editorial list */}
      <div className="divide-y divide-ink/15 border-t border-ink/15">
        {restProjects.map((project) => (
          <article
            key={project.id}
            className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-[auto,1fr] sm:gap-8"
          >
            <span className="font-mono text-3xl text-silver-dark sm:text-4xl">
              {project.id}
            </span>

            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-bold text-ink sm:text-2xl">
                  {project.name}
                </h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink/50">
                  {project.category} · {project.year}
                </p>
              </div>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/80">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="border border-ink/30 px-2 py-0.5 font-mono text-[10px] uppercase text-ink/70"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-[0.1em]">
                <a href={project.liveUrl} className="link-underline text-blue-deep">
                  View project
                </a>
                <a href={project.codeUrl} className="link-underline text-ink">
                  View code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
