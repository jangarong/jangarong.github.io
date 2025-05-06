import { Experience } from "@/components/experience";
import { TheWorld } from "@/components/the-world";
import "../app/globals.css"
import RgbBusinessCard from "@/components/rgb-business-card";
import { Button } from "@/components/ui/button";
import { FileTextIcon } from "lucide-react";

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
          <div className="flex flex-col justify-center items-center">
            <div className="text-center mb-4 text-xl font-bold">Want to learn more about my work?</div>
            <div className="text-center mb-8 text-lg">Download my free resume!</div>
            <a href="/resume.pdf">
              <Button className="w-[300px] text-2xl font-bold p-8" >
                <FileTextIcon style={{height: '22px', width: '22px'}} /> Download
              </Button>
            </a>
          </div>
        </div>
        <div className="pb-[128px] flex justify-center">
          <RgbBusinessCard />
        </div>
        <footer className="bg-black text-white p-12 text-center">
          website code and design by me (jangarong). while you're here though, you should try <a href="/zodiactail">zodiactail</a>!
        </footer>
      </div>

    </div>
  );
}
