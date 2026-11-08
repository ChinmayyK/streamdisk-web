import { Plus } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../Reveal";
import { SectionIntro } from "../SectionIntro";

const QUESTIONS = [
  {
    q: "Is StreamDisk free?",
    a: "Yes. It is free and open source, and the code is on GitHub for anyone to read, build and improve.",
  },
  {
    q: "Why does macOS say it can't verify StreamDisk?",
    a: "Apple only vouches for apps signed with a paid developer account, and StreamDisk isn't yet. The first time you open it, click Done, then go to System Settings › Privacy & Security and click Open Anyway next to StreamDisk. You only do this once, and the code is on GitHub if you want to see what it does.",
  },
  {
    q: "Does StreamDisk use space on my Mac?",
    a: "Not for the files you open: they are held in memory while you use them. Files you keep on this Mac are stored, and a file you copy onto the disk stays here until it has uploaded, so copying a large file needs that much free space for a while.",
  },
  {
    q: "Which apps can open files on it?",
    a: "Any app. To macOS, StreamDisk is a disk, so QuickTime, IINA, VLC, Final Cut Pro and Preview open its files the way they open files anywhere else.",
  },
  {
    q: "What happens without internet?",
    a: "Items you keep on this Mac open as usual. Everything else needs a connection, because it lives in your Drive.",
  },
  {
    q: "What can StreamDisk see in my Drive?",
    a: "By default only its own StreamDisk folder, which it creates at the top of your Drive. You can choose to show your whole Drive when you sign in. Google is still reviewing StreamDisk for whole-Drive access, so until then Google shows an \"unverified app\" screen for that choice: click Advanced, then Go to StreamDisk.",
  },
  {
    q: "Does it work with Dropbox or OneDrive?",
    a: "Not yet. StreamDisk works with Google Drive today.",
  },
  {
    q: "Which Macs does it run on?",
    a: "Macs with Apple silicon running macOS 15 Sequoia or later.",
  },
];

export function Questions() {
  return (
    <section id="faq" className="scroll-mt-24 mx-auto max-w-[820px] px-5 pt-32 md:px-8 md:pt-44">
      <SectionIntro title="Questions" />
      <Reveal delay={0.1} className="mt-12 divide-y divide-line border-y border-line">
        {QUESTIONS.map(({ q, a }) => (
          <details key={q} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[17px] font-medium text-ink [&::-webkit-details-marker]:hidden">
              {q}
              <Plus size={18} weight="bold" className="shrink-0 text-muted transition-transform duration-300 group-open:rotate-45" />
            </summary>
            <p className="-mt-1 max-w-[62ch] pb-7 text-[15.5px] leading-relaxed text-muted">{a}</p>
          </details>
        ))}
      </Reveal>
    </section>
  );
}
