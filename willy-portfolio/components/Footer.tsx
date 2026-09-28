import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-ink bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink">
          {profile.name} <span aria-hidden="true">·</span> © {profile.year}
        </p>
        <p className="font-mono text-[11px] text-ink/60">
          built with curiosity + too much debugging
        </p>
      </div>
    </footer>
  );
}
