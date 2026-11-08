import { AppleLogo } from "@phosphor-icons/react/dist/ssr";
import type { ReactNode } from "react";
import { ButtonLink } from "../Button";

// The words above every hero option: one plain promise and the two actions.
export function HeroCopy({ title, lede }: { title: ReactNode; lede: ReactNode }) {
  return (
    <div className="mx-auto max-w-[820px] text-center">
      <h1 className="text-balance text-[clamp(2.6rem,6vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-ink">{title}</h1>
      <p className="mx-auto mt-6 max-w-[52ch] text-[18px] leading-relaxed text-muted">{lede}</p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <ButtonLink href="/#download" size="lg">
          <AppleLogo weight="fill" size={18} />
          Download for Mac
        </ButtonLink>
        <ButtonLink href="/#how" size="lg" variant="secondary">
          How it works
        </ButtonLink>
      </div>
      <p className="mt-4 text-[13px] text-faint">Free · macOS 15 or later · Google Drive</p>
    </div>
  );
}
