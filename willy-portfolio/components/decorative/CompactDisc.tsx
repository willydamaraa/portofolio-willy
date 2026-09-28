interface CompactDiscProps {
  size?: number;
  className?: string;
}

/**
 * Decorative CD rendered entirely in SVG — no external image assets.
 */
export default function CompactDisc({ size = 120, className = "" }: CompactDiscProps) {
  return (
    <div className={`animate-float ${className}`} aria-hidden="true">
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        className="animate-spin-slow drop-shadow-[4px_6px_0_rgba(28,35,51,0.25)]"
      >
        <defs>
          <linearGradient id="cd-sheen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DEE8F6" />
            <stop offset="35%" stopColor="#F0C3D2" />
            <stop offset="70%" stopColor="#AFC6E6" />
            <stop offset="100%" stopColor="#F6F4EF" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r="58" fill="url(#cd-sheen)" stroke="#1C2333" strokeWidth="1.5" />
        <circle cx="60" cy="60" r="46" fill="none" stroke="#1C2333" strokeOpacity="0.15" strokeWidth="1" />
        <circle cx="60" cy="60" r="34" fill="none" stroke="#1C2333" strokeOpacity="0.15" strokeWidth="1" />
        <circle cx="60" cy="60" r="16" fill="#F6F4EF" stroke="#1C2333" strokeWidth="1.5" />
        <circle cx="60" cy="60" r="5" fill="#1C2333" />
      </svg>
    </div>
  );
}
