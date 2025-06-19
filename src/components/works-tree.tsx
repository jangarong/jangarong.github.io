import { HackathonCard } from "./ui/hackathon-card";

const experiences = [
    {
        title: "Google Cloud Security",
        description: "Part of the Event Threat Detection team, where I helped design and implement threat detections on popular GCP products.",
        location: "Sunnyvale, CA",
        dates: "January 2025 - Current",
        image: "/assets/companies/icons/google.jpg"
    },
    {
        title: "Trend Micro",
        description: "Worked on Trend Micro's EMail Security (EMS) product on log infrastructure. Also developed an internal tool for UI development.",
        location: "Ottawa, ON",
        dates: "January 2024 - December 2024",
        image: "/assets/companies/icons/trend.jpg"
    },
    {
        title: "BlackBerry Cylance",
        description: "Helped with migrating CylanceMDR's alerts infra and tenancy system.",
        location: "Mississauga, ON",
        dates: "September 2023 - December 2023",
        image: "/assets/companies/icons/bb.jpg"
    },
    {
        title: "CertiK",
        description: "Audited smart contracts part-time, catching centralization and logical vulnerabilities.",
        location: "New York, NY (Remote)",
        dates: "October 2021 - December 2021",
        image: "/assets/companies/icons/certik.jpg"
    },
]

interface Experience {
    title: string;
    company: string;
    img: string;
}

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
                        // links={project.links}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}
