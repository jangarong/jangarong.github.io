import { HackathonCard, WorkNode } from "@/components/ui/hackathon-card";

export function WorksTree({experiences} : {experiences: WorkNode[]} ) {
    return (
        <div className="m-[48px] flex justify-center">
            <div className="w-[100%] sm:w-[480px]">
                <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                    {experiences.map((project, id) => (
                        <HackathonCard
                            title={project.title}
                            description={project.description}
                            // location={project.location}
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
