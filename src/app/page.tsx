import { Experience } from "@/components/experience";
import { TheWorld } from "@/components/the-world";
import "../app/globals.css"
import RgbBusinessCard from "@/components/rgb-business-card";
import DownloadMyResume from "@/components/download-my-resume";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="h-[100vh]">
      <div className="absolute">
        <Navbar />
      </div>
      <div className="h-[100%]">
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
        <div className="pb-[128px] flex justify-center">
          <RgbBusinessCard />
        </div>
        <footer className="bg-black text-white p-12 text-center">
          Website code and design by me (jangarong). While you&apos;re here though, you should try my game <a href="/zodiactail.html" className="text-[violet]">Zodiac Tail</a>!
        </footer>
      </div>

    </div>
  );
}
