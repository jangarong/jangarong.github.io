import { WorksTree } from "@/components/works-tree";

const experiences = [
    {
        title: "Identity and Access Management (IAM)",
        team: "Workforce Pools",
        description: (<div>
            Writing critical features for integrating Google Cloud services with external identity providers. Dealing with cookie/session management.
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
        dates: "Jan 2025 - Current",
        image: "/assets/companies/icons/scc.jpg",
    },
]

export default function Home() {
    return (
        <div>
            <WorksTree
                experiences={experiences}
            />
        </div>
    );
}
