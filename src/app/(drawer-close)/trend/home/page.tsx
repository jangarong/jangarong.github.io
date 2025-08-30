import { WorksTree } from "@/components/works-tree";

const experiences = [
    {
        title: "Trend Micro",
        team: "Trend Micro EMail Security (TMEMS)",
        description: (<div>
            Worked on Trend Micro&apos;s Email Security product, with a focus on developing the logs pipeline and email storage (for sandboxing or quarantine usage).
            Was also able to conceptualize from scratch an internal tool for UI development.
        </div>),
        dates: "Jan 2024 - Dec 2024",
        image: "/assets/companies/icons/tmems.png",
    },
]

export default function Home() {
    return (
        <div>
            <div className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                Trend Micro
            </div>
            <p className="text-muted-foreground text-xl font-italic text-center pt-4">
                Proactive security starts Here.
            </p>
            <WorksTree
                experiences={experiences}
            />
        </div>
    );
}
