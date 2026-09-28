interface SectionLabelProps {
  filename: string;
  index: string;
}

/**
 * Heading used at the top of each section, styled like a filename tab
 * (e.g. "ABOUT_ME.txt") to reinforce the "personal computer" concept.
 */
export default function SectionLabel({ filename, index }: SectionLabelProps) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <span className="font-mono text-xs text-blue-deep">{index}</span>
      <h2 className="file-tab">{filename}</h2>
      <span className="h-px flex-1 bg-ink/15" />
    </div>
  );
}
