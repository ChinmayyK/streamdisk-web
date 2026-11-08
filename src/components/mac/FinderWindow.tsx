"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { AppStoreLogo, CaretLeft, CaretRight, Clock, Columns, Desktop, DownloadSimple, Eject, FileText, HardDrives, MagnifyingGlass, Rows, SquaresFour } from "@phosphor-icons/react";
import { DEMO_FILES } from "@/lib/demo";
import { EASE, useReducedMotionSafe } from "@/lib/motion";
import { FileIcon } from "./FileIcon";
import { StreamDiskGlyph } from "./Glyph";

// A Finder window on the StreamDisk disk, after macOS 15's list view. Sizes are in cqw of the window's
// width, so it scales as one piece. Rows can be selected and opened like in Finder.
export function FinderWindow({
  selected,
  onSelect,
  onOpen,
  hint,
  className = "",
}: {
  selected?: string;
  onSelect?: (name: string) => void;
  onOpen?: (name: string) => void;
  hint?: { file: string; label: string };
  className?: string;
}) {
  const reduce = useReducedMotionSafe();
  return (
    <div
      className={`mac relative overflow-hidden rounded-[1.1cqw] bg-white text-[1.3cqw] text-[#1d1d1f] shadow-[0_0_0_0.08cqw_rgb(0_0_0/0.18),0_3cqw_7cqw_-1.5cqw_rgb(60_30_5/0.55)] [container-type:inline-size] dark:bg-[#1f1d1b] dark:text-[#f5f5f7] dark:shadow-[0_0_0_0.08cqw_rgb(255_255_255/0.12),0_3cqw_7cqw_-1.5cqw_rgb(0_0_0/0.8)] ${className}`}
    >
      <div className="flex">
        <aside className="w-[21%] shrink-0 bg-[#f3f1ee]/95 px-[1.1cqw] pb-[1.5cqw] pt-[1.3cqw] dark:bg-[#2a2724]/95">
          <div className="flex gap-[0.7cqw] pb-[2.2cqw] pl-[0.4cqw]">
            {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
              <span key={c} className="size-[1.15cqw] rounded-full" style={{ background: c }} />
            ))}
          </div>
          <SideHeading>Favourites</SideHeading>
          <SideItem icon={<Clock />}>Recents</SideItem>
          <SideItem icon={<AppStoreLogo />}>Applications</SideItem>
          <SideItem icon={<Desktop />}>Desktop</SideItem>
          <SideItem icon={<FileText />}>Documents</SideItem>
          <SideItem icon={<DownloadSimple />}>Downloads</SideItem>
          <div className="h-[1.4cqw]" />
          <SideHeading>Locations</SideHeading>
          <SideItem icon={<HardDrives />}>Macintosh HD</SideItem>
          <SideItem icon={<StreamDiskGlyph />} active trailing={<Eject weight="fill" className="size-[1.1cqw] opacity-55" />}>
            StreamDisk
          </SideItem>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="flex h-[4.8cqw] items-center gap-[1.2cqw] border-b border-black/[0.07] px-[1.4cqw] dark:border-white/[0.08]">
            <span className="flex items-center gap-[0.2cqw] opacity-40">
              <CaretLeft weight="bold" className="size-[1.4cqw]" />
              <CaretRight weight="bold" className="size-[1.4cqw]" />
            </span>
            <b className="text-[1.45cqw] font-semibold">StreamDisk</b>
            <span className="ml-auto flex items-center gap-[1cqw] opacity-55">
              <SquaresFour className="size-[1.5cqw]" />
              <span className="rounded-[0.5cqw] bg-black/[0.07] px-[0.5cqw] py-[0.2cqw] dark:bg-white/[0.12]">
                <Rows className="size-[1.5cqw]" />
              </span>
              <Columns className="size-[1.5cqw]" />
              <MagnifyingGlass className="ml-[1cqw] size-[1.5cqw]" />
            </span>
          </div>
          <div className="grid grid-cols-[1fr_18%_14%_20%] border-b border-black/[0.07] px-[2.1cqw] py-[0.55cqw] text-[1.05cqw] font-medium text-black/45 dark:border-white/[0.08] dark:text-white/45">
            <span className="pl-[2.8cqw]">Name</span>
            <span>Date Modified</span>
            <span className="pr-[1cqw] text-right">Size</span>
            <span>Kind</span>
          </div>
          <div className="px-[0.7cqw] py-[0.5cqw]" role="listbox" aria-label="Files on StreamDisk">
            {DEMO_FILES.map((f, i) => {
              const isSelected = f.name === selected;
              const dim = isSelected ? "" : "text-black/55 dark:text-white/55";
              return (
                <motion.button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  key={f.name}
                  onClick={() => onSelect?.(f.name)}
                  onDoubleClick={() => onOpen?.(f.name)}
                  initial={reduce ? false : { opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.05, ease: EASE }}
                  className={`relative grid w-full cursor-default grid-cols-[1fr_18%_14%_20%] items-center rounded-[0.5cqw] px-[1.4cqw] py-[0.45cqw] text-left outline-none ${
                    isSelected ? "bg-[#0a63e1] text-white" : i % 2 ? "bg-black/[0.028] dark:bg-white/[0.035]" : ""
                  }`}
                >
                  <span className="flex min-w-0 items-center gap-[0.8cqw]">
                    <FileIcon type={f.icon} className="size-[2cqw] shrink-0" />
                    <span className={`truncate ${f.name === hint?.file && !isSelected ? "font-medium" : ""}`}>{f.name}</span>
                  </span>
                  {hint && f.name === hint.file && !isSelected ? (
                    <span className="relative -ml-[1cqw] inline-flex w-max">
                      <span className="absolute inset-0 animate-ping rounded-full bg-[#d47a1f]/35" />
                      <span className="relative whitespace-nowrap rounded-full bg-[#2a2520] px-[1cqw] py-[0.3cqw] text-[1cqw] font-medium text-white dark:bg-[#f3eee7] dark:text-[#2a2520]">
                        {hint.label}
                      </span>
                    </span>
                  ) : (
                    <span className={`truncate ${dim}`}>{f.modified}</span>
                  )}
                  <span className={`pr-[1cqw] text-right tabular-nums ${isSelected ? "" : f.name === hint?.file ? "font-semibold text-[#1d1d1f] dark:text-white" : dim}`}>{f.size}</span>
                  <span className={`truncate ${dim}`}>{f.kind}</span>
                </motion.button>
              );
            })}
          </div>
          <div className="mt-[0.8cqw] border-t border-black/[0.07] py-[0.7cqw] text-center text-[1.05cqw] text-black/45 dark:border-white/[0.08] dark:text-white/45">
            8 items, 1.7 TB available
          </div>
        </div>
      </div>
    </div>
  );
}

function SideHeading({ children }: { children: ReactNode }) {
  return <p className="px-[0.6cqw] pb-[0.4cqw] text-[1cqw] font-semibold text-black/40 dark:text-white/40">{children}</p>;
}

function SideItem({ icon, children, active, trailing }: { icon: ReactNode; children: ReactNode; active?: boolean; trailing?: ReactNode }) {
  return (
    <div className={`flex items-center gap-[0.8cqw] rounded-[0.55cqw] px-[0.6cqw] py-[0.42cqw] ${active ? "bg-black/[0.08] dark:bg-white/[0.1]" : ""}`}>
      <span className="grid size-[1.6cqw] place-items-center text-[#0a63e1] dark:text-[#3b8bff] [&_svg]:size-full">{icon}</span>
      <span className="truncate">{children}</span>
      {trailing && <span className="ml-auto">{trailing}</span>}
    </div>
  );
}
