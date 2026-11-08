import Image from "next/image";
import { AppleLogo, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink } from "../Button";
import { Reveal } from "../Reveal";
import { DOWNLOAD_URL, REPO_URL } from "@/lib/site";

// The close: the same coast, now at dusk, and one button.
export function Download() {
  return (
    <section id="download" className="scroll-mt-24 px-3 pt-32 md:px-5 md:pt-44">
      <div className="relative isolate mx-auto max-w-[1360px] overflow-hidden rounded-[28px]">
        <Image src="/art/coast-night.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover object-[50%_65%]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(18_12_6/0.55),rgb(18_12_6/0.15)_55%,rgb(18_12_6/0.5))]" />
        <Reveal className="flex min-h-[560px] flex-col items-center justify-center px-6 py-24 text-center">
          <Image src="/app-icon.png" alt="" width={96} height={96} className="size-24 drop-shadow-[0_20px_30px_rgb(0_0_0/0.45)]" />
          <h2 className="mt-8 text-balance text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#f6efe6]">
            Your Drive, <span className="accent-phrase !text-[#f2b46d]">one double-click away.</span>
          </h2>
          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href={DOWNLOAD_URL} size="lg">
                <AppleLogo weight="fill" size={18} />
                Download for Mac
              </ButtonLink>
              <a
                href={REPO_URL}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-white/12 px-6 text-[15.5px] font-medium text-[#f6efe6] shadow-[0_0_0_1px_rgb(255_255_255/0.22)] backdrop-blur-md transition-colors hover:bg-white/20"
              >
                <GithubLogo weight="fill" size={18} />
                Source on GitHub
              </a>
            </div>
            <span className="text-[13px] text-[#f6efe6]/75">Free and open source · Apple silicon · macOS 15 or later</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
