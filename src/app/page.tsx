import { Experience } from "@/components/experience";
import { InfoMail } from "@/components/info-mail";
import { TheWorld } from "@/components/the-world";
import "../app/globals.css"

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
        <footer className="bg-black text-white p-12 text-center">
        website design by me, with the help of shadcn and figma B)
      </footer>
      </div>

    </div>
  );
}
