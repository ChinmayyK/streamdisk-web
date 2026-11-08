import { Reveal } from "../Reveal";

const NUMBERS = [
  { value: "1.7 s", label: "from double-click to the first frame of a 61 GB film, on a 3.5 MB/s connection" },
  { value: "0 bytes", label: "of your Mac's disk taken by a file, until you choose to keep it offline" },
  { value: "Any app", label: "opens files from StreamDisk, because to your Mac it is just another disk" },
];

const APPS = ["QuickTime", "IINA", "VLC", "Final Cut Pro", "Preview"];

// The point in three numbers, then the apps people already use.
export function Numbers() {
  return (
    <section className="mx-auto max-w-[1120px] px-5 pt-28 md:px-8 md:pt-36">
      <Reveal className="grid gap-px overflow-hidden rounded-[22px] border border-line bg-line md:grid-cols-3">
        {NUMBERS.map((n) => (
          <div key={n.value} className="bg-raised px-7 py-9">
            <p className="text-[clamp(2.4rem,5vw,3.4rem)] font-semibold leading-none tracking-[-0.04em] text-ink">{n.value}</p>
            <p className="mt-4 max-w-[30ch] text-[15px] leading-relaxed text-muted">{n.label}</p>
          </div>
        ))}
      </Reveal>
      <Reveal delay={0.1} className="mt-10 text-center">
        <p className="text-[13px] text-muted">Opens in the apps you already use</p>
        <p className="mt-4 flex flex-wrap items-center justify-center gap-x-9 gap-y-3 text-[19px] font-semibold tracking-[-0.01em] text-ink-soft">
          {APPS.map((a, i) => (
            <span key={a} className={i % 2 ? "accent-phrase !text-ink-soft text-[21px]" : ""}>
              {a}
            </span>
          ))}
        </p>
      </Reveal>
    </section>
  );
}
