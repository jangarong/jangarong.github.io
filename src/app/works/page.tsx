// https://ui.shadcn.com/docs/components/typography

import { HomeFooter } from "@/components/home-footer";
import TeamCarousel from "@/components/team-carousel";

export default function Works() {
  return (
    <div className="flex flex-col items-center">
      <div className="bkg__spotlight w-[100%] h-[100%] min-h-[640px] overflow-auto"></div>
      <nav className="fixed top-0 left-0 w-full z-10 mt-8">
        <div className="mb-4 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 text-white">
          My Works.
        </div>
      </nav>
      <main className="absolute flex flex-col gap-8 row-start-2 items-center sm:items-start ">
        <div className="m-[113px]">
          <TeamCarousel />
        </div>
      </main>
      <HomeFooter />
    </div>
  );
}
