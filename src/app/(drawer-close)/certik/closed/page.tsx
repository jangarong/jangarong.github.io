import { WorksTree } from "@/components/works-tree";

const experiences = [
    {
        title: "CertiK Skynet",
        description: (
            <div>
                Worked on Skynet, an on-chain monitoring tool that provides security-related analytics for blockchain projects.
                Mostly focused on integrating the new Bug Bounty UI components onto Skynet.
            </div>
        ),
        dates: "May 2022 - Aug 2022",
        image: "/assets/companies/icons/certik.jpg",
    },
    {
        title: "Smart Contract Audits",
        description: (
            <div>
                Audited EVM-based Solidity smart contracts for critical vulnerabilities and centralization issues across a wide variety
                of applications and protocols such as ERC20s/721s, Decentralized Exchanges, etc.
            </div>
        ),
        dates: "Oct 2021 - Dec 2021",
        image: "/assets/companies/icons/certik.jpg",
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
