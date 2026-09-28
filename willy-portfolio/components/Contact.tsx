import { profile } from "@/data/profile";

const pretty = (url: string) => url.split("://").pop() ?? url;

const links = [
  { label: "EMAIL", href: `mailto:${profile.email}`, display: profile.email },
  { label: "GITHUB", href: profile.github, display: pretty(profile.github) },
  {
    label: "LINKEDIN",
    href: profile.linkedin,
    display: pretty(profile.linkedin),
  },
  {
    label: "INSTAGRAM",
    href: profile.instagram,
    display: pretty(profile.instagram),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2 className="text-4xl font-bold uppercase leading-none tracking-tight text-ink sm:text-6xl">
            Wanna say hi?
          </h2>
          <p className="mt-5 max-w-sm text-base text-ink/80">
            For internships, collaborations, projects, or just saying hi.
          </p>
        </div>

        <ul className="divide-y divide-ink/15 border-y border-ink/15 lg:col-span-6">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.label === "EMAIL" ? undefined : "_blank"}
                rel={link.label === "EMAIL" ? undefined : "noopener noreferrer"}
                className="group flex items-center justify-between gap-4 py-4 transition-all hover:pl-3 focus-visible:pl-3"
              >
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-blue-deep">
                  {link.label}
                </span>
                <span className="truncate text-sm text-ink group-hover:underline">
                  {link.display}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
