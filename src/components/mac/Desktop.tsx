import type { ReactNode } from "react";
import { AppleLogo, BatteryFull, MagnifyingGlass, WifiHigh } from "@phosphor-icons/react/dist/ssr";
import { StreamDiskGlyph } from "./Glyph";

// An original wallpaper: warm dunes at dusk in StreamDisk's amber, drawn as layered curves so it stays
// sharp at any size. Darker in the dark theme, like macOS's dynamic wallpapers.
function Wallpaper() {
  return (
    <svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" className="[stop-color:#f6d9b0] dark:[stop-color:#3a2414]" />
          <stop offset="0.55" className="[stop-color:#f0b36d] dark:[stop-color:#6b3a17]" />
          <stop offset="1" className="[stop-color:#e08a3c] dark:[stop-color:#8a4a1c]" />
        </linearGradient>
        <radialGradient id="sun" cx="0.72" cy="0.42" r="0.35">
          <stop offset="0" stopColor="#fff3dc" stopOpacity="0.95" />
          <stop offset="1" stopColor="#fff3dc" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="1000" fill="url(#sky)" />
      <rect width="1600" height="1000" fill="url(#sun)" className="dark:opacity-30" />
      <path d="M0 610 C 260 540 520 600 760 560 S 1250 470 1600 540 V1000 H0Z" className="fill-[#d9822f] dark:fill-[#5a2f12]" opacity="0.85" />
      <path d="M0 720 C 300 650 560 720 860 680 S 1340 610 1600 660 V1000 H0Z" className="fill-[#c66d22] dark:fill-[#46230d]" opacity="0.9" />
      <path d="M0 830 C 340 770 640 840 980 800 S 1400 760 1600 790 V1000 H0Z" className="fill-[#a9561a] dark:fill-[#331809]" />
    </svg>
  );
}

// A Mac desktop: wallpaper and menu bar, with whatever windows the scene places on it.
// Everything is in cqw of the desktop's width.
export function Desktop({ children, glyphActive = false }: { children?: ReactNode; glyphActive?: boolean }) {
  return (
    <div className="mac relative aspect-[16/9.4] overflow-hidden rounded-[1.4cqw] [container-type:inline-size] shadow-[0_0_0_1px_var(--line-strong),0_40px_100px_-40px_rgb(var(--shade)/0.5)]">
      <Wallpaper />
      <div className="absolute inset-x-0 top-0 z-20 flex h-[3.2%] min-h-[18px] items-center justify-between bg-white/30 px-[1.4cqw] text-[1.05cqw] text-[#1d1d1f] backdrop-blur-xl dark:bg-black/30 dark:text-white">
        <span className="flex items-center gap-[1.5cqw]">
          <AppleLogo weight="fill" className="size-[1.3cqw]" />
          <b className="font-semibold">Finder</b>
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Go</span>
          <span>Window</span>
          <span>Help</span>
        </span>
        <span className="flex items-center gap-[1.3cqw]">
          <span className={`grid place-items-center rounded-[0.4cqw] px-[0.35cqw] py-[0.1cqw] ${glyphActive ? "bg-black/15 dark:bg-white/20" : ""}`}>
            <StreamDiskGlyph className="size-[1.45cqw]" />
          </span>
          <BatteryFull weight="fill" className="size-[1.7cqw]" />
          <WifiHigh weight="bold" className="size-[1.4cqw]" />
          <MagnifyingGlass weight="bold" className="size-[1.3cqw]" />
          <span>Sun 8 Nov&nbsp; 12:15 PM</span>
        </span>
      </div>
      {children}
    </div>
  );
}
