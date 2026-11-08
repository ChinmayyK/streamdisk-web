import type { ReactNode } from "react";
import { LEGAL_UPDATED } from "@/lib/site";

// A plain reading page for the privacy policy and terms.
export function LegalPage({ title, lede, children }: { title: string; lede: string; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-[720px] px-5 pb-12 pt-20 md:px-8 md:pt-28">
      <p className="text-[13px] font-medium text-accent-ink">Updated {LEGAL_UPDATED}</p>
      <h1 className="mt-3 text-[clamp(2.2rem,5vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-ink">{title}</h1>
      <p className="mt-5 text-[18px] leading-relaxed text-muted">{lede}</p>
      <article className="mt-6 text-[16px] leading-relaxed text-ink-soft [&_a]:text-accent-ink [&_a]:underline [&_a]:underline-offset-4 [&_code]:rounded-[6px] [&_code]:bg-sunken [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.86em] [&_h2]:mb-3 [&_h2]:mt-12 [&_h2]:text-[23px] [&_h2]:font-semibold [&_h2]:tracking-[-0.02em] [&_h2]:text-ink [&_li]:mt-2 [&_p]:mt-4 [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
        {children}
      </article>
    </div>
  );
}
