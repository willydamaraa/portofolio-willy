interface BrowserWindowProps {
  address: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * A small decorative "browser window" frame used to give sections an
 * early-internet, desktop-interface feel. Purely presentational.
 */
export default function BrowserWindow({
  address,
  children,
  className = "",
}: BrowserWindowProps) {
  return (
    <div
      className={`crt-border overflow-hidden bg-white ${className}`}
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 border-b border-ink bg-blue-pale px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-pink" />
        <span className="h-2.5 w-2.5 rounded-full bg-blue-soft" />
        <span className="h-2.5 w-2.5 rounded-full bg-silver" />
        <span className="ml-2 flex-1 truncate rounded-sm border border-ink/30 bg-white px-2 py-0.5 font-mono text-[10px] text-ink/70">
          {address}
        </span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
