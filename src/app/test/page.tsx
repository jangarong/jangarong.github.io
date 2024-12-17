import { FeaturedBento } from "@/components/featured-bento";
import JangHero from "@/components/jang-hero";
import LinktreeFooter from "@/components/linktree-footer";
import { TechnologiesMarquee } from "@/components/technologies-marquee";

export default function Home() {
  return (
    <div>
      <JangHero />
      <div>
        <div className="flex flex-col items-center justfiy-center pt-[128px]">
          <div className="text-left w-[80vw]">
            <div className="text-3xl md:text-5xl font-bold w-[75%] md:w-[50%] leading-normal mb-[32px] md:mb-[64px]">
              My collaborative works.
            </div>
            <div className="w-[80vw] mb-[64px]">
              <FeaturedBento />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center my-[128px]">
          <div className="text-3xl md:text-5xl font-bold mb-[32px] w-[80vw] text-left">
            <div className="w-[75%] md:w-[50%] leading-normal">
              Built with the best tools possible.
            </div>
          </div>
          <div className="w-[80vw]">
            <TechnologiesMarquee />
          </div>
        </div>
      </div>
      <LinktreeFooter />
    </div>
  );
}
