import { TeamCard } from "@/components/team-card";

export default function TeamCarousel() {
    const teams = [
        {
            "name": "Email Security",
            "date": "Jan 2024 - Dec 2024",
            "avatar": "/teams/tmems.png",
            "description": "Currently developing backend log features + development tools for the Email Security product. This product aims to prevent incoming malicious emails such as those that contain phishing, ransomware, spam, as well as other protocol filters like IP reputation, spoofing, etc.",
            "url": "https://www.trendmicro.com/en_ca/business/products/user-protection/sps/email-and-collaboration/email-security.html",
            "color": "trendmicro"
        },
        {
            "name": "CylanceMDR",
            "date": "Sept 2023 - Dec 2023",
            "avatar": "/teams/cylancemdr.webp",
            "description": "An MDR and threat intelligence platform for incoming malicious events. Monitored on devices with Cylance's AI, and managed by security analysts available 24/7. Previously developed microservices used to maintain the data pipeline, as well as APIs that are used for multi-tenancy and showing alerts detected on client endpoints.",
            "url": "https://docs.blackberry.com/en/unified-endpoint-security/cylancemdr",
            "color": "blackberry"
        },
        {
            "name": "Skynet",
            "date": "May 2022 - Aug 2022",
            "avatar": "/teams/skynet.jpg",
            "description": "An all-in-one security analytics platform that gives insights to a variety of Web3 projects. This includes on-chain data, visualizations, security features, project activity, and many more! Worked on developing many of the widgets, most notably the bug bounty feature.",
            "url": "https://www.certik.com/products/skynet",
            "color": "neutral-900"
        },
        {
            "name": "Zodiac Tail",
            "date": "July 2023 - Sept 2023",
            "avatar": "/teams/zodiactail.png",
            "description": "A puzzle platformer with time mechanics that features the Zodiac Animals!",
            "url": "/zodiactail/index.html",
            "color": "orange-500"
        }
    ]
    return (
        <div className="flex flex-row ml-[960px] md:ml-[640px] xl:ml-[0px]">
            {teams.map(team =>
                <div key={team.name} className="ml-3 mr-3">
                    <TeamCard team={team.name}
                        date={team.date}
                        avatar={team.avatar}
                        description={team.description}
                        url={team.url}
                        color={team.color}
                    />
                </div>)}
        </div>
    );
}
