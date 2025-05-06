import { Experience } from "@/components/experience";
import { InfoMail } from "@/components/info-mail";
import { TheWorld } from "@/components/the-world";
import "../app/globals.css"
import RGBCardDesktop from "@/components/rgb-card-desktop";
import BusinessContactContent from "@/components/business-contact-content";
import RgbBusinessCard from "@/components/rgb-business-card";

export default function Home() {
  return (
    <div className="h-[100vh]">
      <div className="h-[100%]">
        <div className={"flex justify-center items-center h-[100%]"}>
          <TheWorld />
        </div>
        <div className="pb-[64px]">
          <div className={"spacedTitle"}>
            CONTRIBUTIONS
          </div>
          <Experience />
        </div>
        <div className="pb-[128px] flex justify-center">
          <InfoMail />
        </div>
        <div className="pb-[128px] flex justify-center">
          <RgbBusinessCard />
        </div>
        <footer className="bg-black text-white p-12 text-center">
          website code and design by me
        </footer>
      </div>

    </div>
  );
}
