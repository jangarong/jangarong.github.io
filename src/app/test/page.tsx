import { FeaturedBento } from "@/components/featured-bento";
import JangHero from "@/components/jang-hero";
import { TechnologiesMarquee } from "@/components/technologies-marquee";

export default function Home() {
  return (
    <div>
        <JangHero />
        <TechnologiesMarquee />
        <FeaturedBento />
    </div>
  );
}
