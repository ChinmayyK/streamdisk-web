import { CopyCommand } from "../CopyCommand";

const STEPS = [
  <>Open StreamDisk. When macOS says it can&rsquo;t verify it, click <b>Done</b>.</>,
  <>
    Open <b>System Settings › Privacy &amp; Security</b>, scroll to Security, and click <b>Open Anyway</b> next to StreamDisk.
  </>,
  <>
    Confirm with your password, then click <b>Open Anyway</b> once more. That&rsquo;s it: from now on it opens like any app.
  </>,
];

// How to open an app Apple hasn't notarized: shown under the download button, on the painting.
export function FirstOpen() {
  return (
    <div id="first-open" className="mx-auto mt-14 w-full max-w-[640px] scroll-mt-28 rounded-[20px] border border-white/15 bg-[rgb(24_16_9/0.55)] p-6 text-left text-[#f6efe6] backdrop-blur-xl md:p-8">
      <p className="text-[16px] font-semibold">Opening it the first time</p>
      <p className="mt-2 text-[14.5px] leading-relaxed text-[#f6efe6]/75">
        StreamDisk isn&rsquo;t signed by Apple yet, because that needs a paid developer account. So macOS stops the first open. It takes a minute, once:
      </p>
      <ol className="mt-5 flex flex-col gap-3.5">
        {STEPS.map((step, i) => (
          <li key={i} className="flex gap-3.5 text-[14.5px] leading-relaxed text-[#f6efe6]/90 [&_b]:font-semibold [&_b]:text-[#f6efe6]">
            <span className="accent-phrase !text-[#f2b46d] text-[22px] leading-[1.1]">{i + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-[13.5px] text-[#f6efe6]/70">Or, in Terminal:</p>
      <CopyCommand command="xattr -dr com.apple.quarantine /Applications/StreamDisk.app" className="mt-2" />
    </div>
  );
}
