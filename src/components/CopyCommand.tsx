"use client";

import { Check, Copy } from "@phosphor-icons/react";
import { useState } from "react";

// A one-line Terminal command with a copy button.
export function CopyCommand({ command, className = "" }: { command: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };
  return (
    <div className={`flex items-center gap-3 rounded-[12px] bg-black/40 py-2.5 pl-4 pr-2 font-mono text-[12.5px] text-[#f6efe6] ${className}`}>
      <span className="select-none text-[#f2b46d]">$</span>
      <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap">{command}</code>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Copied" : "Copy command"}
        className="grid size-8 shrink-0 place-items-center rounded-[8px] text-[#f6efe6]/70 transition-colors hover:bg-white/10 hover:text-[#f6efe6]"
      >
        {copied ? <Check size={15} weight="bold" /> : <Copy size={15} />}
      </button>
    </div>
  );
}
