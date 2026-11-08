// macOS-style file icons drawn as SVG so they stay crisp at any size: a sheet with a folded corner and
// a coloured type badge, or a blue folder.
const BADGE: Record<string, { label: string; color: string }> = {
  mov: { label: "MOV", color: "#5b5bd6" },
  mp4: { label: "MP4", color: "#7a4fd6" },
  zip: { label: "ZIP", color: "#8a8f98" },
  pdf: { label: "PDF", color: "#e5484d" },
};

export function FileIcon({ type, className = "" }: { type: string; className?: string }) {
  if (type === "folder") {
    return (
      <svg viewBox="0 0 32 32" className={className} aria-hidden>
        <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h6.2l2.6 2.6h12.2A2.5 2.5 0 0 1 29 11.1V24a2.5 2.5 0 0 1-2.5 2.5h-21A2.5 2.5 0 0 1 3 24Z" fill="#4aa3f0" />
        <path d="M3 12a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v12a2.5 2.5 0 0 1-2.5 2.5h-21A2.5 2.5 0 0 1 3 24Z" fill="#7cc1fb" />
      </svg>
    );
  }
  const badge = BADGE[type] ?? BADGE.zip;
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path d="M8 3h11l7 7v17a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" fill="#fff" stroke="rgb(0 0 0 / 0.18)" strokeWidth="0.8" />
      <path d="M19 3v5.5A1.5 1.5 0 0 0 20.5 10H26" fill="#eceef1" stroke="rgb(0 0 0 / 0.18)" strokeWidth="0.8" />
      <rect x="7.5" y="17.5" width="17" height="7" rx="1.6" fill={badge.color} />
      <text x="16" y="22.9" textAnchor="middle" fontSize="5.2" fontWeight="700" fill="#fff" fontFamily="-apple-system, system-ui, sans-serif">
        {badge.label}
      </text>
    </svg>
  );
}
