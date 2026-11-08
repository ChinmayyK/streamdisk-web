// The StreamDisk menu bar glyph: a ring with the streamed part drawn as an arc, and a centre dot.
export function StreamDiskGlyph({ className = "" }: { className?: string }) {
  const r = 6.5;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 18 18" className={className} aria-hidden>
      <circle cx="9" cy="9" r={r} fill="none" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.4" />
      <circle
        cx="9"
        cy="9"
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeDasharray={`${c * 0.36} ${c}`}
        transform="rotate(-90 9 9)"
      />
      <circle cx="9" cy="9" r="1.6" fill="currentColor" />
    </svg>
  );
}
