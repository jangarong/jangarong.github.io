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
        <Link href="/cylance/closed" className="w-[100%] h-[100%] absolute z-30 flex flex-col justify-end overflow-hidden">
            <DrawerNoJS open>
                <div>
                    <WorksTree
                        experiences={experiences}
                    />
                </div>
            </DrawerNoJS>
        </Link>
    );
}
