"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Pause, Play, SpeakerHigh, X } from "@phosphor-icons/react";
import { FinderWindow } from "../mac/FinderWindow";
import { StreamDiskGlyph } from "../mac/Glyph";
import { EASE, useReducedMotionSafe } from "@/lib/motion";
import { DEMO_FILES } from "@/lib/demo";

const FILM = "Konkan monsoon 4K.mov";
const FILM_BYTES = DEMO_FILES.find((f) => f.name === FILM)!.bytes;
// What StreamDisk fetches to start: the file's index at the end, then the first seconds of video.
const START_BYTES = 9_400_000;
// Readahead while it plays, on an ordinary home connection.
const RATE = 4_300_000;
// About when the first frame shows, measured on a 3.5 MB/s link.
const FIRST_FRAME_MS = 1400;

const mb = (n: number) => (n < 1e9 ? `${(n / 1e6).toFixed(n < 1e8 ? 1 : 0)} MB` : `${(n / 1e9).toFixed(2)} GB`);

// The Finder demo: the StreamDisk disk on a painted riverbank. Double-click the 61 GB film and it
// opens at once; a readout shows how little of it came down and that none of it went to disk.
export function FinderDemo() {
  const reduce = useReducedMotionSafe();
  const [selected, setSelected] = useState<string>();
  const [open, setOpen] = useState(false);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [fetched, setFetched] = useState(0);
  const [clock, setClock] = useState(0);
  const timers = useRef<number[]>([]);

  const close = () => {
    timers.current.forEach(clearTimeout);
    setOpen(false);
    setStarted(false);
    setFetched(0);
    setClock(0);
  };

  const openFile = (name: string) => {
    setSelected(name);
    if (name !== FILM) return;
    close();
    setOpen(true);
    setPlaying(true);
    // Before the first frame: the index and the opening seconds.
    const steps = 8;
    for (let i = 1; i <= steps; i++) {
      timers.current.push(window.setTimeout(() => setFetched(Math.round((START_BYTES * i) / steps)), (FIRST_FRAME_MS * i) / steps));
    }
    timers.current.push(window.setTimeout(() => setStarted(true), reduce ? 0 : FIRST_FRAME_MS));
  };

  // While playing: readahead keeps a little ahead of the picture.
  useEffect(() => {
    if (!started || !playing) return;
    const id = window.setInterval(() => {
      setFetched((f) => Math.min(FILM_BYTES, f + RATE / 4));
      setClock((c) => c + 0.25);
    }, 250);
    return () => clearInterval(id);
  }, [started, playing]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const minutes = `${Math.floor(clock / 60)}:${String(Math.floor(clock % 60)).padStart(2, "0")}`;

  return (
    <div className="relative">
      {/* The painted riverbank, with a menu bar across the top like a Mac's screen */}
      <div className="mac relative overflow-hidden rounded-[22px] shadow-[0_0_0_1px_var(--line-strong),0_50px_120px_-50px_rgb(var(--shade)/0.6)] [container-type:inline-size]">
        <div className="relative aspect-[16/10.5] w-full">
          <Image src="/art/river.jpg" alt="" fill sizes="(min-width: 1180px) 1120px, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[rgb(30_14_2/0)] transition-colors dark:bg-[rgb(20_10_4/0.45)]" />
        </div>

        <div className="absolute inset-x-0 top-0 z-20 flex h-[3.4cqw] items-center justify-between bg-white/35 px-[1.6cqw] text-[1.15cqw] text-[#1d1d1f] backdrop-blur-xl dark:bg-black/35 dark:text-white">
          <span className="flex items-center gap-[1.6cqw]">
            <b className="font-semibold">Finder</b>
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Go</span>
          </span>
          <span className="flex items-center gap-[1.4cqw]">
            <span className={`grid place-items-center rounded-[0.45cqw] px-[0.4cqw] py-[0.15cqw] transition-colors ${open ? "bg-black/15 dark:bg-white/20" : ""}`}>
              <StreamDiskGlyph className="size-[1.6cqw]" />
            </span>
            <span>Sun 12:15 PM</span>
          </span>
        </div>

        <div className="absolute left-1/2 top-[11%] z-10 w-[78%] -translate-x-1/2">
          <FinderWindow
            selected={selected}
            onSelect={setSelected}
            onOpen={openFile}
            hint={open ? undefined : { file: FILM, label: "Double-click to play" }}
          />
        </div>

        {/* The player */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="player"
              initial={reduce ? false : { opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="absolute left-[7%] top-[24%] z-30 w-[56%] overflow-hidden rounded-[1cqw] bg-black text-white shadow-[0_0_0_0.08cqw_rgb(255_255_255/0.14),0_3cqw_8cqw_-1cqw_rgb(0_0_0/0.75)]"
            >
              <div className="flex h-[3cqw] items-center gap-[0.7cqw] bg-[#2a2826] px-[1cqw] text-[1.05cqw]">
                <button type="button" onClick={close} aria-label="Close" className="grid size-[1.15cqw] place-items-center rounded-full bg-[#ff5f57] text-black/0 hover:text-black/60">
                  <X weight="bold" className="size-[0.8cqw]" />
                </button>
                <span className="size-[1.15cqw] rounded-full bg-[#febc2e]" />
                <span className="size-[1.15cqw] rounded-full bg-[#28c840]" />
                <span className="flex-1 truncate text-center text-white/75">{FILM}</span>
                <span className="w-[4cqw]" />
              </div>
              <div className="relative aspect-video overflow-hidden">
                {started ? (
                  <div className="absolute inset-0" style={{ animation: reduce ? undefined : "kenburns 40s ease-in-out infinite alternate", animationPlayState: playing ? "running" : "paused" }}>
                    <Image src="/art/coast-day.jpg" alt="The Konkan monsoon film playing" fill sizes="640px" className="object-cover" />
                  </div>
                ) : (
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="size-[3cqw] animate-spin rounded-full border-[0.3cqw] border-white/20 border-t-white/80" />
                  </div>
                )}
                {started && (
                  <div className="absolute inset-x-[4%] bottom-[5%] flex items-center gap-[1cqw] rounded-[0.8cqw] bg-black/45 px-[1.2cqw] py-[0.7cqw] text-[1cqw] backdrop-blur-md">
                    <button type="button" onClick={() => setPlaying((p) => !p)} aria-label={playing ? "Pause" : "Play"}>
                      {playing ? <Pause weight="fill" className="size-[1.4cqw]" /> : <Play weight="fill" className="size-[1.4cqw]" />}
                    </button>
                    <span className="tabular-nums text-white/80">{minutes}</span>
                    <span className="relative h-[0.35cqw] flex-1 rounded-full bg-white/25">
                      <span className="absolute inset-y-0 left-0 rounded-full bg-white/45" style={{ width: `${Math.min(100, (clock / 2580) * 100 + 0.6)}%` }} />
                      <span className="absolute inset-y-0 left-0 rounded-full bg-white" style={{ width: `${Math.min(100, (clock / 2580) * 100)}%` }} />
                    </span>
                    <span className="tabular-nums text-white/80">43:00</span>
                    <SpeakerHigh weight="fill" className="size-[1.3cqw]" />
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The real StreamDisk menu bar window, dropping from its icon once the film plays */}
        <AnimatePresence>
          {started && (
            <motion.div
              key="popover"
              initial={reduce ? false : { opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, delay: reduce ? 0 : 0.5, ease: EASE }}
              style={{ transformOrigin: "85% 0%" }}
              className="absolute right-[4.5%] top-[4.2cqw] z-40 w-[27%] drop-shadow-[0_2cqw_3cqw_rgb(0_0_0/0.45)]"
            >
              <Image
                src="/shots/popover-dark.png"
                alt="StreamDisk's menu bar window: Google Drive mounted, the Konkan monsoon film streaming at 4.3 MB/s, an upload and an offline download in progress"
                width={640}
                height={882}
                className="h-auto w-full rounded-[1.4cqw]"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* The readout, outside the screen so it reads as the point, not part of macOS */}
      <div className="mx-auto mt-6 grid max-w-[760px] grid-cols-3 divide-x divide-line overflow-hidden rounded-2xl border border-line bg-raised text-center">
        <Readout label="Size in Finder" value="61.37 GB" />
        <Readout label="Downloaded so far" value={open ? mb(fetched) : "Nothing yet"} live={open && !started} accent={open} />
        <Readout label="Stored on your Mac" value="0 bytes" />
      </div>
      <p className="mx-auto mt-4 max-w-[60ch] text-center text-[13.5px] text-muted">
        {open
          ? started
            ? "Playing. StreamDisk fetches a little ahead of the picture and holds it in memory, never on disk."
            : "Fetching the file's index and its first seconds…"
          : "Files in Finder are only names and sizes until you open one."}
      </p>
    </div>
  );
}

function Readout({ label, value, live, accent }: { label: string; value: string; live?: boolean; accent?: boolean }) {
  return (
    <div className="px-4 py-5">
      <p className="text-[12.5px] text-muted">{label}</p>
      <p className={`mt-1.5 text-[clamp(1.1rem,2.4vw,1.6rem)] font-semibold tabular-nums tracking-[-0.02em] ${accent ? "text-accent-ink" : "text-ink"} ${live ? "animate-pulse" : ""}`}>
        {value}
      </p>
    </div>
  );
}
