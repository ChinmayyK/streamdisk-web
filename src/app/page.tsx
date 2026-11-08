import { Hero } from "@/components/home/Hero";
import { FinderDemo } from "@/components/home/FinderDemo";
import { SectionIntro } from "@/components/SectionIntro";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="how" className="scroll-mt-24 mx-auto max-w-[1180px] px-5 pt-24 md:px-8 md:pt-32">
        <SectionIntro
          eyebrow="See it in Finder"
          title={
            <>
              Open the big file. <span className="accent-phrase">It weighs nothing.</span>
            </>
          }
          lede="StreamDisk shows up under Locations like any other disk. Your Drive's files are all there at their real size, and they only come down while you use them."
        />
        <Reveal delay={0.1} className="mt-14">
          <FinderDemo />
        </Reveal>
      </section>
    </>
  );
}
