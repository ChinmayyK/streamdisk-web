import Image from "next/image";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-line">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-4 px-5 py-10 text-[13.5px] text-muted sm:flex-row sm:items-center sm:justify-between md:px-8">
        <span className="flex items-center gap-2.5">
          <Image src="/app-icon.png" alt="" width={22} height={22} className="size-[22px]" />
          StreamDisk, by Chinmay Kudalkar
        </span>
        <span>Made for macOS 15 and later.</span>
      </div>
    </footer>
  );
}
