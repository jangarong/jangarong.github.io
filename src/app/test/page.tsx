import { FeaturedBento } from "@/components/featured-bento";
import JangHero from "@/components/jang-hero";
import { TechnologiesMarquee } from "@/components/technologies-marquee";

export default function Home() {
  return (
    <div className="">
      <JangHero />
      <div className="">
        <div className="flex flex-col items-center justfiy-center">
          <div className="text-6xl font-bold mb-[64px]">Featured Works</div>
          <div className="w-[80%] max-w-[1024px] mb-[64px]"><FeaturedBento /></div>
          <div className="my-[32px] text-center">
            <div className="text-6xl font-bold mb-[8px]">Foundations</div>
            <div className="text-xl opacity-50">software design is my passion</div>
          </div>
          <TechnologiesMarquee />
        </div>
      </div>
    </div>
  );
}
