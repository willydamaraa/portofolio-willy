import { currentlyStatus } from "@/data/profile";
import SectionLabel from "@/components/decorative/SectionLabel";

export default function Currently() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:pb-24">
      <SectionLabel index="07" filename="CURRENTLY.txt" />

      <ul className="crt-border grid grid-cols-1 gap-0 divide-y divide-ink/15 bg-white sm:grid-cols-2 sm:divide-y-0">
        {currentlyStatus.map((status) => (
          <li
            key={status.label}
            className="flex items-center gap-3 border-ink/15 px-5 py-4 text-sm text-ink sm:border-b sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
          >
            <span aria-hidden="true" className="text-lg">
              {status.emoji}
            </span>
            <span>{status.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
