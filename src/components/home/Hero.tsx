"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { AppleLogo } from "@phosphor-icons/react";
import { ButtonLink } from "../Button";
import { EASE, useReducedMotionSafe } from "@/lib/motion";

// The opening: one plain promise over the Konkan coast at golden hour (dusk in the dark theme).
// The painting rises out of the page colour; two painted clouds drift and part as you scroll.
export function Hero() {
  const reduce = useReducedMotionSafe();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const left = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-18%"]);
  const right = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const art = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "10%"]);

  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18, filter: "blur(6px)" },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          transition: { duration: 0.9, delay, ease: EASE },
        };

  return (
    <section ref={ref} className="relative isolate -mt-[68px] overflow-hidden">
      {/* The painting, day and dusk, faded into the page at the top */}
      <motion.div style={{ y: art }} className="absolute inset-x-0 bottom-0 top-[22%] -z-10 md:top-[14%]">
        <Image src="/art/coast-day.jpg" alt="" fill priority sizes="100vw" className="art-day object-cover object-[50%_70%]" />
        <Image src="/art/coast-night.jpg" alt="" fill sizes="100vw" className="art-night object-cover object-[50%_70%]" />
        <div className="absolute inset-x-0 top-0 h-[62%] bg-[linear-gradient(180deg,var(--bg)_8%,rgb(from_var(--bg)_r_g_b/0.86)_38%,rgb(from_var(--bg)_r_g_b/0)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[18%] bg-[linear-gradient(0deg,var(--bg),transparent)]" />
      </motion.div>

      {/* Clouds that part as you scroll */}
      <motion.div style={{ x: left }} className="pointer-events-none absolute -left-[6%] top-[34%] -z-10 w-[38%] max-w-[560px] md:top-[30%]">
        <Image src="/art/cloud-wide.png" alt="" width={1479} height={361} className="drift h-auto w-full [--drift:28px] dark:opacity-60 dark:brightness-[0.55]" />
      </motion.div>
      <motion.div style={{ x: right }} className="pointer-events-none absolute -right-[5%] top-[20%] -z-10 w-[30%] max-w-[440px] md:top-[17%]">
        <Image src="/art/cloud-tall.png" alt="" width={1315} height={624} className="drift h-auto w-full [--drift:-24px] dark:opacity-60 dark:brightness-[0.55]" />
      </motion.div>

      <div className="relative mx-auto flex min-h-[max(100svh,780px)] max-w-[1120px] flex-col items-center px-5 pt-[clamp(150px,20vh,210px)] text-center md:px-8">
        <motion.h1 {...enter(0.05)} className="text-balance text-[clamp(2.9rem,7vw,5.6rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-ink">
          Your Google Drive,
          <br />
          <span className="accent-phrase text-[1.08em]">as a disk on your Mac.</span>
        </motion.h1>
        <motion.p {...enter(0.18)} className="mt-7 max-w-[46ch] text-[18.5px] leading-relaxed text-ink-soft">
          Every file shows up in Finder at full size, and none of it fills your Mac. Open a 60 GB film and it starts playing in a second or two.
        </motion.p>
        <motion.div {...enter(0.3)} className="mt-9 flex flex-col items-center gap-3">
          <ButtonLink href="/#download" size="lg">
            <AppleLogo weight="fill" size={18} />
            Download for Mac
          </ButtonLink>
          <span className="text-[13px] text-muted">Free · macOS 15 or later</span>
        </motion.div>
      </div>
    </section>
  );
}
