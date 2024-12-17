import { FeaturedBento } from "@/components/featured-bento";
import JangHero from "@/components/jang-hero";
import { TechnologiesMarquee } from "@/components/technologies-marquee";

export default function Home() {
  return (
    <div className="">
      <JangHero />
      <div className="">
        <div className="my-[64px] text-center">
          <div className="text-3xl md:text-6xl font-bold mb-[8px]">Tools & Frameworks</div>
          <div className="text-md md:text-xl opacity-50">This is what I use to build everything!</div>
          <TechnologiesMarquee />
        </div>
        {/* <TechnologiesMarquee /> */}
        <div className="flex flex-col items-center justfiy-center">
          <div className="text-3xl md:text-6xl font-bold mb-[32px] md:mb-[64px] text-center">Contributions</div>
          <div className="w-[80vw] mb-[64px]">
            <FeaturedBento />
          </div>
        </div>
      </div>
    </div>
  );
}
