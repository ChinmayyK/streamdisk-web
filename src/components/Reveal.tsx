"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { EASE, useReducedMotionSafe } from "@/lib/motion";

// Fades content up as it enters the viewport, so each section lands in reading order.
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotionSafe();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={reduce ? { duration: 0 } : { duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
