interface StickerProps {
  children: React.ReactNode;
  rotate?: number;
  tone?: "pink" | "blue" | "silver";
  className?: string;
}

const toneClasses: Record<NonNullable<StickerProps["tone"]>, string> = {
  pink: "bg-pink border-ink",
  blue: "bg-blue-pale border-ink",
  silver: "bg-white border-ink",
};

/**
 * A small rotated "sticky note" used as a scrapbook-style decorative
 * element. Purely presentational — hidden from screen readers.
 */
export default function Sticker({
  children,
  rotate = -4,
  tone = "pink",
  className = "",
}: StickerProps) {
  return (
    <div
      aria-hidden="true"
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`crt-border w-fit border px-3 py-2 font-mono text-[11px] leading-snug ${toneClasses[tone]} ${className}`}
    >
      {children}
    </div>
  );
}
