import DrawerNoJS from "@/components/drawer-no-js";
import { WorksTree } from "@/components/works-tree";
import Link from "next/link";

const experiences = [
    {
        title: "Cylance",
        team: "CylanceMDR",
        description: (<div>
            Helped with migrating CylanceMDR&apos;s alerts infrastructure and tenancy system, substituting old APIs and systems with those based on AWS and GraphQL.
        </div>),
        dates: "Sept 2023 - Dec 2023",
        image: "/assets/companies/icons/mdr.png",
    },
]

export default function Home() {
    return (
        <Link href="/cylance/home" className="w-[100%] h-[100%] absolute z-30 flex flex-col justify-end overflow-hidden">
            <DrawerNoJS open>
                <div>
                    <div className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                        BlackBerry Cylance
                    </div>
                    <p className="text-muted-foreground text-xl font-italic text-center pt-4">
                        Ending cyber risk.
                    </p>
                    <WorksTree
                        experiences={experiences}
                    />
                </div>
            </DrawerNoJS>
        </Link>
    );
}
