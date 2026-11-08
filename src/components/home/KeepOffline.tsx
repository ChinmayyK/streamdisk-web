import { ArrowsClockwise, CaretRight, Trash } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../Reveal";
import { SectionIntro } from "../SectionIntro";
import { Shot } from "../Shot";
import { FileIcon } from "../mac/FileIcon";

// Keeping files on this Mac: Finder's right-click menu, and the list in Settings.
export function KeepOffline() {
  return (
    <section id="offline" className="scroll-mt-24 mx-auto max-w-[1120px] px-5 pt-32 md:px-8 md:pt-44">
      <SectionIntro
        eyebrow="Keep on This Mac"
        title={
          <>
            Going somewhere offline? <span className="accent-phrase">Keep it on this Mac.</span>
          </>
        }
        lede="Right-click a file or a folder and keep it. StreamDisk downloads a full copy, so it opens on a flight or a train, and keeps it in step with your Drive."
      />
      <div className="mt-16 grid items-start gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
        <Reveal>
          <ContextMenu />
        </Reveal>
        <Reveal delay={0.1}>
          <Shot
            name="settings-kept"
            alt="StreamDisk Settings, Kept on This Mac: a lecture and a tax document on this Mac, and a wedding folder of 214 files downloading"
            width={1200}
            height={1096}
          />
        </Reveal>
      </div>
      <Reveal delay={0.15} className="mt-14 grid gap-8 sm:grid-cols-2">
        <Point icon={<ArrowsClockwise size={18} weight="bold" />} title="Folders stay in step">
          New and changed files in a kept folder download on their own; files deleted from Drive leave this Mac too.
        </Point>
        <Point icon={<Trash size={18} weight="bold" />} title="Remove it any time">
          Removing a kept item frees the space here. The original stays in your Drive, and in Finder.
        </Point>
      </Reveal>
    </section>
  );
}

function Point({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent-soft text-accent-ink">{icon}</span>
      <div>
        <p className="text-[16px] font-semibold text-ink">{title}</p>
        <p className="mt-1.5 max-w-[44ch] text-[15px] leading-relaxed text-muted">{children}</p>
      </div>
    </div>
  );
}

// Finder's right-click menu on a folder, with StreamDisk's item in it.
function ContextMenu() {
  const items: (string | null)[] = ["Open", "Open in New Tab", null, "Get Info", "Rename", "Compress", "Copy", null, "Quick Look", null];
  return (
    <div className="mac relative mx-auto w-full max-w-[460px] pt-2 text-[14px]">
      <div className="flex items-center gap-3 rounded-[8px] bg-[#0a63e1] px-3 py-2 text-white shadow-[0_10px_30px_-12px_rgb(10_99_225/0.6)]">
        <FileIcon type="folder" className="size-6" />
        Wedding, Pune (raw)
      </div>
      <div className="relative ml-8 mt-1 w-[230px] rounded-[12px] border border-black/10 bg-[#f4f2ef]/95 p-1.5 text-[#1d1d1f] shadow-[0_24px_60px_-20px_rgb(var(--shade)/0.5)] backdrop-blur-xl dark:border-white/10 dark:bg-[#2b2826]/95 dark:text-[#f5f5f7]">
        {items.map((label, i) =>
          label === null ? (
            <div key={i} className="mx-2 my-1 h-px bg-black/10 dark:bg-white/10" />
          ) : (
            <div key={i} className="truncate rounded-[6px] px-2.5 py-[5px]">
              {label}
            </div>
          ),
        )}
        <div className="flex items-center rounded-[6px] bg-[#0a63e1] px-2.5 py-[5px] text-white">
          Services
          <CaretRight weight="bold" size={12} className="ml-auto" />
        </div>
        <div className="absolute left-[calc(100%+4px)] bottom-1 w-[196px] whitespace-nowrap rounded-[12px] border border-black/10 bg-[#f4f2ef]/95 p-1.5 text-[#1d1d1f] shadow-[0_24px_60px_-20px_rgb(var(--shade)/0.5)] backdrop-blur-xl dark:border-white/10 dark:bg-[#2b2826]/95 dark:text-[#f5f5f7]">
          <div className="rounded-[6px] bg-[#0a63e1] px-2.5 py-[5px] font-medium text-white">Keep on This Mac</div>
          <div className="rounded-[6px] px-2.5 py-[5px]">Remove from This Mac</div>
        </div>
      </div>
    </div>
  );
}
