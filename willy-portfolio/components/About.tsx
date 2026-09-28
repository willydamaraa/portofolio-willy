import { profile } from "@/data/profile";
import SectionLabel from "@/components/decorative/SectionLabel";

const metadata = [
  { label: "NAME", value: profile.name.toUpperCase() },
  { label: "EDUCATION", value: profile.university.toUpperCase() },
  { label: "MAJOR", value: profile.major.toUpperCase() },
  { label: "LOCATION", value: profile.location.toUpperCase() },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <SectionLabel index="02" filename="ABOUT_ME.txt" />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <article className="lg:col-span-7">
          <div className="crt-border bg-white p-6 sm:p-8">
            {profile.aboutParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mb-4 text-base leading-relaxed text-ink/90 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        <aside className="lg:col-span-5">
          <dl className="crt-border divide-y divide-ink/15 bg-blue-pale">
            {metadata.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between gap-4 px-5 py-3"
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink/60">
                  {row.label}
                </dt>
                <dd className="text-right font-mono text-xs text-ink">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
