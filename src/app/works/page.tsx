// https://ui.shadcn.com/docs/components/typography

import TeamCarousel from "@/components/team-carousel";
import { WorksHeader } from "@/components/works-header";

export default function Works() {
  return (
    <div className="flex flex-col min-h-[640px]">
      <div className="bkg__spotlight w-[100%] h-[100%] min-h-[640px] overflow-auto"></div>
      <WorksHeader />
      <main className="mt-[156px] flex flex-col gap-8 row-start-2 items-start works-xl:items-center flex-grow w-[100%]">
        <TeamCarousel />
      </main>
    </div>
  );
}
