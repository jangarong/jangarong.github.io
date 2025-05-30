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
      <div className="pb-[128px]">
        <div className={"spacedTitle"}>
          CONTRIBUTIONS
        </div>
        <Experience />
      </div>
      <div className="pb-[128px] flex justify-center">
        <DownloadMyResume />
      </div>
      <div className="pb-[128px] flex justify-center overflow-x-hidden">
        <RgbBusinessCard />
      </div>
      {/* TODO: Move this footer to layout */}
      <footer className="bg-black text-white p-12 text-sm text-center">
        Side A website code and design by me (jangarong).
      </footer>
    </div>
  );
}
