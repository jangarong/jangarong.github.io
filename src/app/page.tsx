import { Experience } from "@/components/experience";
import { TheWorld } from "@/components/the-world";
import "./globals.css"
import RgbBusinessCard from "@/components/rgb-business-card";
import DownloadMyResume from "@/components/download-my-resume";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="h-[100%]">
      <div className="absolute w-[100%]">
        <Navbar />
      </div>
      <div className={"flex justify-center items-center h-[100%]"}>
        <TheWorld />
      </div>
      <div className="">
        <div className={"spacedTitle"}>
          CONTRIBUTIONS
        </div>
        <Experience />
      </div>
      <div className="py-[128px] flex justify-center" id="resume">
        <DownloadMyResume />
      </div>
      <div className="pb-[128px] flex justify-center overflow-x-hidden" id="contacts">
        <RgbBusinessCard />
      </div>
      {/* TODO: Move this footer to layout */}
      <footer className="bg-black text-white p-12 text-sm text-center">
        Website code and design by me (jangarong). This website is currently a WIP!
      </footer>
    </div>
  );
}
