import Image from "next/image";
import { REPO_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-line">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-4 px-5 py-10 text-[13.5px] text-muted sm:flex-row sm:items-center sm:justify-between md:px-8">
        <span className="flex items-center gap-2.5">
          <Image src="/app-icon.png" alt="" width={22} height={22} className="size-[22px]" />
          StreamDisk, by Chinmay Kudalkar
        </span>
        <span className="flex items-center gap-5">
          <a href={REPO_URL} className="transition-colors hover:text-ink">
            Source on GitHub
          </a>
          <span>Made for macOS 15 and later</span>
        </span>
      </div>
    </footer>
  );
}
