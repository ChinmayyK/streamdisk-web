import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-[background,transform,box-shadow] duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants = {
  primary:
    "bg-accent text-on-accent shadow-[0_1px_0_rgb(255_255_255/0.25)_inset,0_10px_24px_-10px_rgb(212_122_31/0.7)] hover:brightness-[1.05]",
  secondary: "bg-raised text-ink shadow-[0_0_0_1px_var(--line-strong)] hover:bg-sunken",
} as const;

const sizes = { md: "h-10 px-5 text-[14.5px]", lg: "h-12 px-6 text-[15.5px]" } as const;

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: keyof typeof variants; size?: keyof typeof sizes; children: ReactNode }) {
  return (
    <Link className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
