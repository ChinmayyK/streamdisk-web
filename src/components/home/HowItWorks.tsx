import Image from "next/image";
import type { ReactNode } from "react";
import { Eject, HardDrives } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../Reveal";
import { SectionIntro } from "../SectionIntro";
import { Shot } from "../Shot";
import { StreamDiskGlyph } from "../mac/Glyph";

// Three steps, each beside the real screen it happens on.
export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-24 mx-auto max-w-[1120px] px-5 pt-32 md:px-8 md:pt-44">
      <SectionIntro
        eyebrow="How it works"
        title={
          <>
            Three steps. <span className="accent-phrase">Then it&rsquo;s just Finder.</span>
          </>
        }
      />
      <div className="mt-20 flex flex-col gap-24 md:gap-32">
        <Step
          n={1}
          title="Sign in with Google"
          body="Open StreamDisk, choose what it should show, a StreamDisk folder or your whole Drive, and sign in in your browser. Your sign-in is kept in your Mac's Keychain."
        >
          <Shot name="welcome" alt="StreamDisk's welcome window: your Google Drive, as a disk on your Mac" width={960} height={1056} className="mx-auto max-w-[400px]" />
        </Step>
        <Step
          n={2}
          flip
          title="Find it under Locations"
          body="StreamDisk mounts like a disk, right below Macintosh HD. Browse and search it, drag files in to upload them, and delete to send them to Drive's trash."
        >
          <Sidebar />
        </Step>
        <Step
          n={3}
          title="Open anything"
          body="Films, photos, archives, documents. Only the parts an app reads come down, a little ahead of where you are, and the menu bar shows what is streaming and uploading."
        >
          <div className="relative mx-auto max-w-[360px]">
            <Image
              src="/shots/popover-dark.png"
              alt="StreamDisk's menu bar window with a film streaming, an upload and an offline download in progress"
              width={640}
              height={882}
              className="h-auto w-full rounded-[18px] shadow-[0_40px_80px_-30px_rgb(var(--shade)/0.55)]"
            />
          </div>
        </Step>
      </div>
    </section>
  );
}

function Step({ n, title, body, flip, children }: { n: number; title: string; body: string; flip?: boolean; children: ReactNode }) {
  return (
    <div className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${flip ? "md:[&>*:first-child]:order-2" : ""}`}>
      <Reveal>
        <div className="flex items-baseline gap-5">
          <span className="accent-phrase text-[clamp(4.5rem,9vw,7.5rem)] leading-[0.8]">{n}</span>
          <h3 className="text-[clamp(1.6rem,2.8vw,2.2rem)] font-semibold leading-tight tracking-[-0.03em] text-ink">{title}</h3>
        </div>
        <p className="mt-6 max-w-[42ch] text-[17px] leading-relaxed text-muted">{body}</p>
      </Reveal>
      <Reveal delay={0.1}>{children}</Reveal>
    </div>
  );
}

// Finder's sidebar, close up: StreamDisk under Locations with its eject button.
function Sidebar() {
  return (
    <div className="mac mx-auto max-w-[380px] rounded-[16px] bg-[#f3f1ee] p-5 text-[15px] text-[#1d1d1f] shadow-[0_0_0_1px_rgb(0_0_0/0.1),0_40px_80px_-30px_rgb(var(--shade)/0.45)] dark:bg-[#2a2724] dark:text-[#f5f5f7] dark:shadow-[0_0_0_1px_rgb(255_255_255/0.1),0_40px_80px_-30px_rgb(0_0_0/0.8)]">
      <div className="flex gap-2 pb-6">
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
          <span key={c} className="size-3 rounded-full" style={{ background: c }} />
        ))}
      </div>
      <p className="px-2 pb-1.5 text-[12px] font-semibold text-black/40 dark:text-white/40">Locations</p>
      <Row icon={<HardDrives size={19} />}>Macintosh HD</Row>
      <Row icon={<StreamDiskGlyph className="size-[19px]" />} active>
        StreamDisk
        <Eject weight="fill" size={14} className="ml-auto opacity-55" />
      </Row>
      <Row icon={<span className="block size-[19px] rounded-full border border-current opacity-60" />} faded>
        Network
      </Row>
    </div>
  );
}

function Row({ icon, children, active, faded }: { icon: ReactNode; children: ReactNode; active?: boolean; faded?: boolean }) {
  return (
    <div className={`flex items-center gap-3 rounded-[8px] px-2 py-2 ${active ? "bg-black/[0.08] dark:bg-white/[0.1]" : ""} ${faded ? "opacity-45" : ""}`}>
      <span className="grid place-items-center text-[#0a63e1] dark:text-[#3b8bff]">{icon}</span>
      {children}
    </div>
  );
}
