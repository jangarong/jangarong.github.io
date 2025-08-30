import { WorksTree } from "@/components/works-tree";

const experiences = [
    {
        title: "Identity and Access Management (IAM)",
        team: "Workforce Pools",
        description: (<div>
            Writing critical features for integrating Google Cloud services with external identity providers. Dealing with cookie/session management.
        </div>),
        dates: "July 2025 - Current",
        image: "/assets/companies/icons/google.jpg",
        link: "https://cloud.google.com/iam/docs/workforce-identity-federation"
    },
    {
        title: "Security Command Center",
        team: "Event Threat Detection",
        description: (<div>
            Aided with designing and implementing threat detections that happen on GCP, sourced from internal and external cloud logging and threat intelligence.
        </div>),
        dates: "Jan 2025 - Current",
        image: "/assets/companies/icons/google.jpg",
        link: "https://cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview"
    },
]

export default function Home() {
    return (
        <div>
            <div className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                Google Cloud Security
            </div>
            <p className="text-muted-foreground text-xl font-italic text-center pt-4">
                Make Google part of your Security team.
            </p>
            <WorksTree
                experiences={experiences}
            />
        </div>
    );
}
