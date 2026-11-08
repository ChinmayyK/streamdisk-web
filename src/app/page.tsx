import { Hero } from "@/components/home/Hero";
import { FinderDemo } from "@/components/home/FinderDemo";
import { Numbers } from "@/components/home/Numbers";
import { HowItWorks } from "@/components/home/HowItWorks";
import { KeepOffline } from "@/components/home/KeepOffline";
import { Privacy } from "@/components/home/Privacy";
import { Questions } from "@/components/home/Questions";
import { Download } from "@/components/home/Download";
import { SectionIntro } from "@/components/SectionIntro";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="finder" className="scroll-mt-24 mx-auto max-w-[1180px] px-5 pt-24 md:px-8 md:pt-32">
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
      <Numbers />
      <HowItWorks />
      <KeepOffline />
      <Privacy />
      <Questions />
      <Download />
    </>
  );
}
