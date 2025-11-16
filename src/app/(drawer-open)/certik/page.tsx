import DrawerNoJS from "@/components/drawer-no-js";
import { WorksTree } from "@/components/works-tree";
import Link from "next/link";

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
        image: "/assets/companies/icons/skynet.png",
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
        image: "/assets/companies/icons/audits.png",
    },
]

export default function Home() {
    return (
        <Link href="/certik/closed" className="w-[100%] h-[100%] absolute z-30 flex flex-col justify-end overflow-hidden">
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
