"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { CaretLeft, CaretRight, Clock, DownloadSimple, Eject, FileText, Folder, HardDrives, SquaresFour, Rows, Columns, MagnifyingGlass, Desktop, AppStoreLogo } from "@phosphor-icons/react";
import { DEMO_FILES } from "@/lib/demo";
import { EASE, useReducedMotionSafe } from "@/lib/motion";

// A Finder window on the StreamDisk disk, after macOS 15's list view. Sizes are in cqw of the window's
// width, so it scales as one piece. Light and dark follow the page theme, like a Mac in that appearance.
export function FinderWindow({ selected, className = "" }: { selected?: string; className?: string }) {
  const reduce = useReducedMotionSafe();
  return (
    <div
      className={`mac relative overflow-hidden rounded-[1.1cqw] bg-white text-[1.25cqw] text-[#1d1d1f] shadow-[0_0_0_0.08cqw_rgb(0_0_0/0.18),0_2.5cqw_6cqw_-1cqw_rgb(var(--shade)/0.45)] [container-type:inline-size] dark:bg-[#1e1e1e] dark:text-[#f5f5f7] dark:shadow-[0_0_0_0.08cqw_rgb(255_255_255/0.12),0_2.5cqw_6cqw_-1cqw_rgb(0_0_0/0.7)] ${className}`}
    >
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-[21%] shrink-0 bg-[#f1efed] px-[1.1cqw] pb-[1.5cqw] pt-[1.3cqw] dark:bg-[#2a2826]">
          <div className="flex gap-[0.7cqw] pb-[2.2cqw] pl-[0.4cqw]">
            {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
              <span key={c} className="size-[1.1cqw] rounded-full" style={{ background: c }} />
            ))}
          </div>
          <SideHeading>Favourites</SideHeading>
          <SideItem icon={<Clock weight="regular" />}>Recents</SideItem>
          <SideItem icon={<AppStoreLogo weight="regular" />}>Applications</SideItem>
          <SideItem icon={<Desktop weight="regular" />}>Desktop</SideItem>
          <SideItem icon={<FileText weight="regular" />}>Documents</SideItem>
          <SideItem icon={<DownloadSimple weight="regular" />}>Downloads</SideItem>
          <div className="h-[1.4cqw]" />
          <SideHeading>Locations</SideHeading>
          <SideItem icon={<HardDrives weight="regular" />}>Macintosh HD</SideItem>
          <SideItem icon={<Glyph />} active trailing={<Eject weight="fill" className="size-[1.1cqw] opacity-60" />}>
            StreamDisk
          </SideItem>
        </aside>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <div className="flex h-[4.6cqw] items-center gap-[1.2cqw] border-b border-black/[0.07] px-[1.4cqw] dark:border-white/[0.08]">
            <span className="flex items-center gap-[0.2cqw] opacity-45">
              <CaretLeft weight="bold" className="size-[1.4cqw]" />
              <CaretRight weight="bold" className="size-[1.4cqw]" />
            </span>
            <b className="text-[1.45cqw] font-semibold">StreamDisk</b>
            <span className="ml-auto flex items-center gap-[1cqw] opacity-60">
              <SquaresFour className="size-[1.5cqw]" />
              <span className="rounded-[0.5cqw] bg-black/[0.07] px-[0.5cqw] py-[0.2cqw] dark:bg-white/[0.12]">
                <Rows className="size-[1.5cqw]" />
              </span>
              <Columns className="size-[1.5cqw]" />
              <MagnifyingGlass className="ml-[1cqw] size-[1.5cqw]" />
            </span>
          </div>
          <div className="grid grid-cols-[1fr_18%_14%_20%] border-b border-black/[0.07] px-[1.4cqw] py-[0.55cqw] text-[1.05cqw] font-medium text-black/50 dark:border-white/[0.08] dark:text-white/50">
            <span className="pl-[2.6cqw]">Name</span>
            <span>Date Modified</span>
            <span className="text-right pr-[1cqw]">Size</span>
            <span>Kind</span>
          </div>
          <div className="px-[0.7cqw] py-[0.5cqw]">
            {DEMO_FILES.map((f, i) => {
              const isSelected = f.name === selected;
              return (
                <motion.div
                  key={f.name}
                  initial={reduce ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.05, ease: EASE }}
                  className={`grid grid-cols-[1fr_18%_14%_20%] items-center rounded-[0.5cqw] px-[0.7cqw] py-[0.42cqw] ${
                    isSelected ? "bg-[#0a63e1] text-white" : i % 2 ? "bg-black/[0.03] dark:bg-white/[0.04]" : ""
                  }`}
                >
                  <span className="flex min-w-0 items-center gap-[0.8cqw]">
                    <Image src={`/mac/${f.icon}.png`} alt="" width={64} height={64} className="size-[1.9cqw] shrink-0" />
                    <span className="truncate">{f.name}</span>
                  </span>
                  <span className={`truncate ${isSelected ? "" : "text-black/55 dark:text-white/55"}`}>{f.modified}</span>
                  <span className={`pr-[1cqw] text-right tabular-nums ${isSelected ? "" : "text-black/55 dark:text-white/55"}`}>{f.size}</span>
                  <span className={`truncate ${isSelected ? "" : "text-black/55 dark:text-white/55"}`}>{f.kind}</span>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-[1cqw] border-t border-black/[0.07] py-[0.7cqw] text-center text-[1.05cqw] text-black/50 dark:border-white/[0.08] dark:text-white/50">
            8 items, 1.7 TB available
          </div>
        </div>
      </div>
    </div>
  );
}

function SideHeading({ children }: { children: React.ReactNode }) {
  return <p className="px-[0.6cqw] pb-[0.4cqw] text-[1cqw] font-semibold text-black/40 dark:text-white/40">{children}</p>;
}

function SideItem({ icon, children, active, trailing }: { icon: React.ReactNode; children: React.ReactNode; active?: boolean; trailing?: React.ReactNode }) {
  return (
    <div className={`flex items-center gap-[0.8cqw] rounded-[0.55cqw] px-[0.6cqw] py-[0.42cqw] ${active ? "bg-black/[0.08] dark:bg-white/[0.1]" : ""}`}>
      <span className="grid size-[1.6cqw] place-items-center text-[#0a63e1] dark:text-[#3b8bff] [&_svg]:size-full">{icon}</span>
      <span className="truncate">{children}</span>
      {trailing && <span className="ml-auto">{trailing}</span>}
    </div>
  );
}

function Glyph() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden>
      <rect x="2" y="3" width="14" height="12" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="12.5" cy="11.5" r="0.9" fill="currentColor" />
      <path d="M4.5 11.5h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
