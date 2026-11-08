"use client";

import { animate, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { InfoPanel } from "../mac/InfoPanel";
import { EASE, useReducedMotionSafe } from "@/lib/motion";
import { DEMO_FILES } from "@/lib/demo";
import { HeroCopy } from "./HeroCopy";
import { Reveal } from "../Reveal";

const IN_FINDER = DEMO_FILES.reduce((n, f) => n + f.bytes, 0);

const gb = (n: number) => `${(n / 1e9).toFixed(n >= 100e9 ? 0 : 1)} GB`;

// Option 2: what Finder says next to what your Mac says. The Drive's files add up to hundreds of
// gigabytes on the StreamDisk disk; Macintosh HD's free space does not move.
export function SpaceHero() {
  const reduce = useReducedMotionSafe();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) return setTotal(IN_FINDER);
    const c = animate(0, IN_FINDER, { duration: 2.2, delay: 0.4, ease: EASE, onUpdate: setTotal });
    return () => c.stop();
  }, [inView, reduce]);

  return (
    <section className="relative px-5 pt-16 md:px-8 md:pt-24">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(60%_60%_at_50%_0%,var(--accent-soft),transparent)]" />
      <HeroCopy
        title={
          <>
            Hundreds of gigabytes in Finder.
            <br />
            <span className="text-muted">None of it on your Mac.</span>
          </>
        }
        lede="StreamDisk puts your Google Drive in Finder as a disk. Files show at full size and stream when you open them, so your Mac's free space stays where it was."
      />

      <div ref={ref} className="mx-auto mt-16 grid max-w-[980px] items-start gap-6 md:grid-cols-2 md:gap-10">
        <motion.div initial={reduce ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease: EASE }}>
          <Label>On the StreamDisk disk</Label>
          <InfoPanel
            title="StreamDisk Info"
            icon="folder"
            name="StreamDisk"
            size={`${gb(total)} in ${DEMO_FILES.length} items`}
            rows={[
              ["Kind", "Volume"],
              ["Server", "Google Drive"],
              ["Capacity", "2 TB"],
              ["Used", "824 GB"],
            ]}
          />
        </motion.div>
        <motion.div initial={reduce ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.25, ease: EASE }}>
          <Label>On your Mac</Label>
          <InfoPanel
            title="Macintosh HD Info"
            icon="macintosh-hd"
            name="Macintosh HD"
            size="494.38 GB"
            rows={[
              ["Kind", "Volume"],
              ["Format", "APFS"],
              ["Capacity", "494.38 GB"],
              ["Available", "182.41 GB"],
            ]}
            footer={
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-black/[0.08] dark:bg-white/[0.1]">
                <div className="h-full w-[63%] rounded-full bg-[#8e8e93]" />
              </div>
            }
          />
        </motion.div>
      </div>
      <Reveal delay={0.3}>
        <p className="mx-auto mt-8 max-w-[52ch] text-center text-[15px] leading-relaxed text-muted">
          Available space stays the same after StreamDisk is set up. It only uses space for the files you choose to keep offline.
        </p>
      </Reveal>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-center text-[13px] font-medium text-accent-ink">{children}</p>;
}
