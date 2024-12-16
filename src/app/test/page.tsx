import { FeaturedBento } from "@/components/featured-bento";
import JangHero from "@/components/jang-hero";
import { TechnologiesMarquee } from "@/components/technologies-marquee";

export default function Home() {
  return (
    <div className="">
      <JangHero />
      <div className="">
        <TechnologiesMarquee />
        <div className="py-[64px] flex flex-col items-center">
          <div className="w-[80%] max-w-[1024px]"><FeaturedBento /></div>
        </div>
      </div>
    </div>
  );
}
