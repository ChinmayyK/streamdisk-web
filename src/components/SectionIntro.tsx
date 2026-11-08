import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

// A string title reads two-tone: the first sentence in ink, the rest muted.
function TwoTone({ title }: { title: ReactNode }) {
  if (typeof title !== "string") return <>{title}</>;
  const cut = title.indexOf(". ");
  if (cut === -1) return <>{title}</>;
  return (
    <>
      {title.slice(0, cut + 1)} <span className="text-muted">{title.slice(cut + 2)}</span>
    </>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  lede,
  align = "center",
  className = "",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  lede?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  const centred = align === "center";
  return (
    <Reveal className={`${centred ? "mx-auto text-center" : ""} max-w-[760px] ${className}`}>
      {eyebrow && <p className="text-[13px] font-medium text-accent-ink">{eyebrow}</p>}
      <h2 className="mt-3 text-balance text-[clamp(1.9rem,3.6vw,3rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-ink">
        <TwoTone title={title} />
      </h2>
      {lede && (
        <p className={`mt-5 text-[17px] leading-relaxed text-muted ${centred ? "mx-auto max-w-[54ch]" : "max-w-[52ch]"}`}>{lede}</p>
      )}
    </Reveal>
  );
}
