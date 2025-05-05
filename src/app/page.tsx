import { Experience } from "@/components/experience";
import { TheWorld } from "@/components/the-world";

export default function Home() {
  return (
    <div className="h-[100vh]">
       <div className="h-[100%]">
            <div className={"flex justify-center items-center h-[100%]"}>
                <TheWorld />
            </div>
            <div className="space-around">
                <div className={"spacedTitle"}>
                    CONTRIBUTIONS
                </div>
                <Experience />
            </div>
        </div>
    </div>
  );
}
