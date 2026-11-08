import Image from "next/image";

// A real app capture in both appearances: the light one on the light page, the dark one on the dark page.
export function Shot({
  name,
  alt,
  width,
  height,
  sizes = "(min-width: 1024px) 560px, 92vw",
  className = "",
}: {
  name: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  className?: string;
}) {
  const img = "h-auto w-full rounded-[12px] shadow-[0_0_0_1px_rgb(0_0_0/0.12),0_40px_80px_-30px_rgb(var(--shade)/0.45)] dark:shadow-[0_0_0_1px_rgb(255_255_255/0.1),0_40px_80px_-30px_rgb(0_0_0/0.8)]";
  return (
    <div className={className}>
      <Image src={`/shots/${name}-light.png`} alt={alt} width={width} height={height} sizes={sizes} className={`${img} dark:hidden`} />
      <Image src={`/shots/${name}-dark.png`} alt={alt} width={width} height={height} sizes={sizes} className={`${img} hidden dark:block`} />
    </div>
  );
}
