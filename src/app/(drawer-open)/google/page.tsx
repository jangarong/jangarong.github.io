import DrawerNoJS from "@/components/drawer-no-js";
import { WorksTree } from "@/components/works-tree";
import Link from "next/link";

const experiences = [
    {
        title: "Identity and Access Management (IAM)",
        team: "Workforce Experience",
        description: (<div>
            Developing workforce pool features + enhancing authentication flows for integrating Google Cloud with external identity providers.
        </div>),
        dates: "July 2025 - Current",
        image: "/assets/companies/icons/iam.jpg",
    },
    {
        title: "Security Command Center",
        team: "Event Threat Detection",
        description: (<div>
            Aided with designing and implementing threat detections that happen on GCP, sourced from internal and external cloud logging and threat intelligence.
        </div>),
        dates: "Jan 2025 - Jan 2026",
        image: "/assets/companies/icons/scc.jpg",
    },
]

export default function Home() {
    return (
        <Link href="/" className="w-[100%] h-[100%] absolute z-30 flex flex-col justify-end overflow-hidden">
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
