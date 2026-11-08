"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Desktop } from "../mac/Desktop";
import { FinderWindow } from "../mac/FinderWindow";
import { EASE, useReducedMotionSafe } from "@/lib/motion";
import { HeroCopy } from "./HeroCopy";

// Option 1: a Finder window on the StreamDisk disk, on a warm desktop. Your Drive's files sit there at
// full size; a moment later the film is selected, the way you'd pick it to open.
export function FinderHero() {
  const reduce = useReducedMotionSafe();
  const [selected, setSelected] = useState<string>();
  useEffect(() => {
    const t = setTimeout(() => setSelected("Ladakh ride 4K.mov"), reduce ? 0 : 1600);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <section className="relative px-5 pt-16 md:px-8 md:pt-24">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(60%_60%_at_50%_0%,var(--accent-soft),transparent)]" />
      <HeroCopy
        title={
          <>
            Your Google Drive,
            <br />
            as a disk on your Mac.
          </>
        }
        lede="Every file shows up in Finder at full size and takes no space on your Mac. Open one and it starts in a second or two, even a 60 GB film."
      />
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.15, ease: EASE }}
        className="mx-auto mt-16 max-w-[1120px]"
      >
        <Desktop>
          <div className="absolute left-1/2 top-[9%] w-[80%] -translate-x-1/2">
            <FinderWindow selected={selected} />
          </div>
        </Desktop>
      </motion.div>
    </section>
  );
}
