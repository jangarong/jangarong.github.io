import { FeaturedBento } from "@/components/featured-bento";
import JangHero from "@/components/jang-hero";
import { TechnologiesMarquee } from "@/components/technologies-marquee";

export default function Home() {
  return (
    <div>
      <JangHero />
      <TechnologiesMarquee />
      <div className="mx-[32px] md:mx-[128px] my-[64px]">
        <FeaturedBento />
      </div>
    </div>
  );
}
