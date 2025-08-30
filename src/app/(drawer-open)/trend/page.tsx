import DrawerNoJS from "@/components/drawer-no-js";
import { WorksTree } from "@/components/works-tree";
import Link from "next/link";

const experiences = [
    {
        title: "Trend Micro Vision One",
        team: "Email Security",
        description: (<div>
            Worked on Trend Micro&apos;s Email Security product, with a focus on developing the logs pipeline and email storage (for sandboxing or quarantine usage).
            Was also able to conceptualize from scratch an internal tool for UI development.
        </div>),
        dates: "Jan 2024 - Dec 2024",
        image: "/assets/companies/icons/tmems.png",
    },
]

export default function Home() {
    return (
        <Link href="/trend/home" className="w-[100%] h-[100%] absolute z-30 flex flex-col justify-end overflow-hidden">
            <DrawerNoJS open>
                <div>
                    <div className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                        Trend Micro
                    </div>
                    <p className="text-muted-foreground text-xl font-italic text-center pt-4">
                        Proactive Security starts here.
                    </p>
                    <WorksTree
                        experiences={experiences}
                    />
                </div>
            </DrawerNoJS>
        </Link>
    );
}
