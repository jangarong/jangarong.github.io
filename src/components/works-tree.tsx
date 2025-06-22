import { HackathonCard } from "./ui/hackathon-card";

const experiences = [
    {
        title: "Google Cloud Security",
        description: "Part of the Event Threat Detection team, where I helped design and implement threat detections for common GCP products, as well as maintain log pipelines.",
        location: "Sunnyvale, CA",
        dates: "January 2025 - Current",
        image: "/assets/companies/icons/google.jpg",
        link: "https://cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview"
    },
    {
        title: "Trend Micro",
        description: "Worked on Trend Micro's EMail Security (EMS) product on log pipeline and email storage. Also developed an internal tool for UI development.",
        location: "Ottawa, ON",
        dates: "January 2024 - December 2024",
        image: "/assets/companies/icons/trend.jpg",
        link: "https://www.trendmicro.com/en_us/business/products.html",
    },
    {
        title: "BlackBerry Cylance",
        description: "Helped with migrating CylanceMDR's alerts infrastructure and tenancy system for SOC analysts.",
        location: "Mississauga, ON",
        dates: "September 2023 - December 2023",
        image: "/assets/companies/icons/bb.jpg",
        link: "https://docs.blackberry.com/en/unified-endpoint-security/cylancemdr",
    },
    {
        title: "CertiK",
        description: "Worked on Skynet, an on-chain monitoring tool that provides security-related analytics for blockchain projects.",
        location: "New York, NY (Remote)",
        dates: "May 2022 - August 2022",
        image: "/assets/companies/icons/certik.jpg",
        link: "https://www.certik.com/products/skynet",
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
                        // links={project.links}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}
