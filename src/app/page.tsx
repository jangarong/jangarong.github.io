import { Experience } from "@/components/experience";
import { TheWorld } from "@/components/the-world";
import "../app/globals.css"
import RgbBusinessCard from "@/components/rgb-business-card";
import DownloadMyResume from "@/components/download-my-resume";

export default function Home() {
  return (
    <div className="h-[100vh]">
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
          website code and design by me (jangarong). while you're here though, you should try <a href="/zodiactail" className="text-[violet]">zodiactail</a>!
        </footer>
      </div>

    </div>
  );
}
