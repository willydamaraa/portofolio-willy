import { profile } from "@/data/profile";
import BrowserWindow from "@/components/decorative/BrowserWindow";
import CompactDisc from "@/components/decorative/CompactDisc";
import Sticker from "@/components/decorative/Sticker";

const quickFacts = [
  { label: "BASED IN", value: "BEKASI, INDONESIA" },
  { label: "CURRENTLY LEARNING", value: "WEB DEVELOPMENT + DATA" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-16 lg:pb-24 lg:pt-20"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
        {/* Text column */}
        <div className="lg:col-span-7">
          <div className="mb-6 flex items-center gap-2 font-mono text-xs text-ink/70">
            <span
              className="h-2 w-2 animate-blink rounded-full bg-blue-deep"
              aria-hidden="true"
            />
            <span>ONLINE</span>
            <span aria-hidden="true">·</span>
            <span>{profile.location.toUpperCase()}</span>
            <span aria-hidden="true">·</span>
            <span>{profile.year}</span>
          </div>

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-deep">
            {profile.role}
          </p>

          <h1 className="mt-3 text-[16vw] font-bold uppercase leading-[0.9] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {profile.name.split(" ").map((word) => (
              <span key={word} className="block sm:inline sm:first:mr-4">
                {word}
              </span>
            ))}
          </h1>

          <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-ink/60">
            {profile.focusLine}
          </p>

          <p className="mt-6 max-w-md text-lg italic text-ink/80">
            &ldquo;{profile.tagline}&rdquo;
          </p>

          <dl className="mt-10 flex flex-col gap-3 border-t border-ink/15 pt-6 sm:flex-row sm:gap-10">
            {quickFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/50">
                  {fact.label}
                </dt>
                <dd className="mt-1 font-mono text-xs text-ink">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Decorative column */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm">
            <BrowserWindow address={profile.siteUrl}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/60">
                    now viewing
                  </p>
                  <p className="mt-1 font-mono text-sm text-ink">
                    portfolio.exe
                  </p>
                </div>
                <CompactDisc size={92} />
              </div>
            </BrowserWindow>

            <Sticker
              tone="pink"
              rotate={-6}
              className="absolute -left-4 top-[62%] hidden sm:block"
            >
              currently
              <br />
              debugging...
            </Sticker>

            <Sticker
              tone="blue"
              rotate={5}
              className="absolute -right-3 -top-5 hidden sm:block"
            >
              it&apos;s me!
            </Sticker>
          </div>
        </div>
      </div>
    </section>
  );
}
