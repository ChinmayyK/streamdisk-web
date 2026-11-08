import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "./Button";
import { ThemeToggle } from "./ThemeToggle";

const LINKS = [
  { href: "/#how", label: "How it works" },
  { href: "/#offline", label: "Keep offline" },
  { href: "/#faq", label: "Questions" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-3">
      <nav className="mx-auto flex h-14 max-w-[1120px] items-center justify-between rounded-full border border-line bg-bg/75 pl-4 pr-2 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-[-0.01em] text-ink">
          <Image src="/app-icon.png" alt="" width={28} height={28} className="size-7" priority />
          StreamDisk
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="rounded-full px-3.5 py-2 text-[14px] text-muted transition-colors hover:text-ink">
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <ButtonLink href="/#download" className="h-9 px-4 text-[14px]">
            Download
          </ButtonLink>
        </div>
      </nav>
    </header>
  );
}
