import { WorksTree } from "@/components/works-tree";

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
        <div>
            <WorksTree
                experiences={experiences}
            />
        </div>
    );
}
