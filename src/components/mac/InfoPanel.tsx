import Image from "next/image";
import type { ReactNode } from "react";

// A Finder Get Info window: icon, name and size, then a General section of label and value rows.
export function InfoPanel({
  title,
  icon,
  name,
  size,
  rows,
  footer,
}: {
  title: string;
  icon: string;
  name: string;
  size: string;
  rows: [string, ReactNode][];
  footer?: ReactNode;
}) {
  return (
    <div className="mac overflow-hidden rounded-[12px] bg-[#f6f5f4] text-[13px] text-[#1d1d1f] shadow-[0_0_0_1px_rgb(0_0_0/0.14),0_30px_70px_-30px_rgb(var(--shade)/0.5)] dark:bg-[#262422] dark:text-[#f5f5f7] dark:shadow-[0_0_0_1px_rgb(255_255_255/0.12),0_30px_70px_-30px_rgb(0_0_0/0.8)]">
      <div className="relative flex h-9 items-center justify-center border-b border-black/[0.08] text-[12.5px] font-semibold text-black/70 dark:border-white/[0.08] dark:text-white/70">
        <span className="absolute left-3.5 flex gap-2">
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <span key={c} className="size-3 rounded-full" style={{ background: c }} />
          ))}
        </span>
        {title}
      </div>
      <div className="flex items-center gap-3.5 px-5 pb-4 pt-5">
        <Image src={`/mac/${icon}.png`} alt="" width={64} height={64} className="size-12" />
        <div className="min-w-0">
          <p className="truncate font-semibold">{name}</p>
          <p className="tabular-nums text-black/55 dark:text-white/55">{size}</p>
        </div>
      </div>
      <div className="mx-5 border-t border-black/[0.08] pb-5 pt-3 dark:border-white/[0.08]">
        <p className="pb-2 text-[12px] font-semibold">General:</p>
        <dl className="grid grid-cols-[92px_1fr] gap-x-3 gap-y-1.5">
          {rows.map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="text-right text-black/50 dark:text-white/50">{k}:</dt>
              <dd className="tabular-nums">{v}</dd>
            </div>
          ))}
        </dl>
        {footer}
      </div>
    </div>
  );
}
