import { TheWorld } from "@/components/the-world";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { HomeBento } from "@/components/home-bento";

export default function Home() {
  return (
    <div className="h-[100%]">
      <div className="absolute w-[100%]">
        <Navbar />
      </div>
      <div className={"flex justify-center items-center h-[100%]"}>
        <TheWorld />
      </div>

      <div className="px-[32px] py-[128px] flex flex-col justify-center items-center">
        <HomeBento />
      </div>

      {/* <div className="">
        <div className={"spacedTitle"}>
          CONTRIBUTIONS
        </div>
        <WorksTree />
      </div>
      <div className="py-[128px] flex justify-center" id="resume">
        <DownloadMyResume />
      </div>
      <div className="pb-[128px] flex justify-center overflow-x-hidden" id="contacts">
        <RgbBusinessCard />
      </div> */}

      {/* <div className="grid w-full grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-8 mb-[128px]">
        <div className="grid-cols-1 grid-rows-1">
          <div className={"spacedTitle"}>
            CONTRIBUTIONS
          </div>
          <WorksTree />
        </div>
        <div className="grid-cols-1 grid-rows-1 flex flex-col justify-around">
          <RgbBusinessCard />
          <DownloadMyResume />
        </div>
      </div> */}

      {/* TODO: Move this footer to layout */}
      <footer className="bg-black text-white p-12 text-sm text-center">
        Website code and design by me (jangarong). Current version is v10.1.1.
      </footer>
    </div>
  );
}
