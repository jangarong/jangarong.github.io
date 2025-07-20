import { HackathonCard } from "./ui/hackathon-card";

const experiences = [
    {
        title: "Google Cloud Security",
        team: "Workforce Identity Federation",
        description: (<div>
            Coding critical features for integrating Google Cloud services with external identity providers. Mainly dealing with cookie/session management.
        </div>),
        location: "Sunnyvale, CA",
        dates: "July 2025 - Current",
        image: "/assets/companies/icons/google.jpg",
        link: "https://cloud.google.com/iam/docs/workforce-identity-federation"
    },
    {
        team: "Event Threat Detection",
        description: (<div>
            Aided with designing and implementing threat detections that happen on GCP, sourced from internal and external cloud logging and threat intelligence.
        </div>),
        dates: "Jan 2025 - Current",
        link: "https://cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview"
    },
    {
        title: "Trend Micro",
        team: "Trend Micro EMail Security (TMEMS)",
        description: (<div>
            Worked on Trend Micro&apos;s Email Security product, with a focus on developing the logs pipeline and email storage (for sandboxing or quarantine usage). 
            Was also able to conceptualize from scratch an internal tool for UI development.
        </div>),
        location: "Ottawa, ON",
        dates: "Jan 2024 - Dec 2024",
        image: "/assets/companies/icons/trend.jpg",
        link: "https://www.trendmicro.com/en_us/business/products/email-and-collaboration.html",
    },
    {
        title: "BlackBerry Cylance",
        team: "CylanceMDR",
        description: (<div>
            Helped with migrating CylanceMDR&apos;s alerts infrastructure and tenancy system, substituting old APIs and systems with those based on AWS and GraphQL.
        </div>),
        location: "Mississauga, ON",
        dates: "Sept 2023 - Dec 2023",
        image: "/assets/companies/icons/cylance.jpg",
        link: "https://docs.blackberry.com/en/unified-endpoint-security/cylancemdr",
    },
    {
        title: "CertiK",
        team: "CertiK Skynet",
        description: (
            <div>
                Worked on Skynet, an on-chain monitoring tool that provides security-related analytics for blockchain projects.
                Mostly focused on integrating the new Bug Bounty UI components onto Skynet.
            </div>
        ),
        location: "New York, NY (Remote)",
        dates: "May 2022 - Aug 2022",
        image: "/assets/companies/icons/certik.jpg",
        link: "https://www.certik.com/products/skynet",
    },
    {
        team: "Smart Contract Audits",
        description: (
            <div>
                Audited EVM-based Solidity smart contracts for critical vulnerabilities and centralization issues across a wide variety 
                of applications and protocols such as ERC20s/721s, Decentralized Exchanges, etc.
            </div>
        ),
        dates: "Oct 2021 - Dec 2021",
        link: "https://www.certik.com/products/smart-contract-audit",
    },
]

export function WorksTree() {
    return (
        <div className="m-[48px] flex justify-center">
            <div className="w-[100%] sm:w-[480px]">
                <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                    {experiences.map((project, id) => (
                        <HackathonCard
                            title={project.title}
                            description={project.description}
                            location={project.location}
                            dates={project.dates}
                            image={project.image}
                            link={project.link}
                            key={id}
                            team={project.team}
                        // links={project.links}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}
