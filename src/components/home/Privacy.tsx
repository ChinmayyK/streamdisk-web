import { FolderSimple, Key, Memory, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import type { ReactNode } from "react";
import { Reveal } from "../Reveal";
import { SectionIntro } from "../SectionIntro";

const POINTS: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: <ShieldCheck size={20} weight="duotone" />,
    title: "No StreamDisk server",
    body: "Your Mac talks to Google directly. Your files and your account never pass through anyone else.",
  },
  {
    icon: <Key size={20} weight="duotone" />,
    title: "Sign-in in your Keychain",
    body: "Google's sign-in token is kept in the macOS Keychain. Signing out revokes it at Google too.",
  },
  {
    icon: <FolderSimple size={20} weight="duotone" />,
    title: "Only its own folder, unless you say so",
    body: "By default StreamDisk can see only the files in its StreamDisk folder. Your whole Drive is a choice you make.",
  },
  {
    icon: <Memory size={20} weight="duotone" />,
    title: "Streamed to memory, not disk",
    body: "What you open is held in memory while you use it and dropped after. Only kept items are saved on this Mac.",
  },
];

export function Privacy() {
  return (
    <section className="mx-auto max-w-[1120px] px-5 pt-32 md:px-8 md:pt-44">
      <SectionIntro
        eyebrow="Private"
        title={
          <>
            Between you and Google. <span className="accent-phrase">Nothing in between.</span>
          </>
        }
      />
      <Reveal delay={0.1} className="mt-16 grid gap-px overflow-hidden rounded-[22px] border border-line bg-line sm:grid-cols-2">
        {POINTS.map((p) => (
          <div key={p.title} className="bg-raised p-8">
            <span className="grid size-11 place-items-center rounded-full bg-accent-soft text-accent-ink">{p.icon}</span>
            <p className="mt-5 text-[17px] font-semibold tracking-[-0.01em] text-ink">{p.title}</p>
            <p className="mt-2 max-w-[42ch] text-[15px] leading-relaxed text-muted">{p.body}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
