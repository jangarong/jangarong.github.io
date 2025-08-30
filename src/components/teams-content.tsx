import Image from "next/image";
import Marquee from "@/components/ui/marquee";

interface TeamsContentProps {
    isMobile?: boolean;
}

export function TeamsContent({ isMobile }: TeamsContentProps) {

    const teams = [
        {
            "company": "Google",
            "logo": "/assets/companies/google.png",
            "url": "/google",
            "description": "Google Cloud Security",
            "width": 1.3,
            "height": 0.5
        },
        {
            "company": "Trend Micro",
            "logo": "/assets/companies/trend.svg",
            "url": "https://www.trendmicro.com/",
            "description": "Trend Micro Email Security",
            "width": 1.5,
            "height": 0.5
        },
        {
            "company": "BlackBerry",
            "logo": "/assets/companies/cylance.png",
            "url": "https://www.blackberry.com/cylance",
            "description": "BlackBerry CylanceMDR",
            "width": 1.75,
            "height": 0.5
        },
        {
            "company": "CertiK",
            "logo": "/assets/companies/certik.svg",
            "url": "https://www.certik.com/company/about",
            "description": "CertiK Skynet",
            "width": 1.5,
            "height": 0.5
        },
    ]

    let logoWidth = 90
    let logoMargin = 2
    let logoMarginBottom = 2
    if (!!isMobile) {
        logoWidth = 70
        logoMargin = 0
        logoMarginBottom = 2
    }

    return (
        <div className={`w-[300px] flex flex-wrap dark:invert justify-evenly align-center mt-[8px]`}>
            <Marquee className="[--duration:20s] flex justify-center align-center">
                {teams.map((team) => (
                <a href={team.url} className={`flex pl-${logoMargin} pr-${logoMargin}`} key={team.company}>
                    <Image
                        className={`m-2 mb-${logoMarginBottom}`}
                        src={team.logo}
                        alt={team.company}
                        width={logoWidth * team.width}
                        height={logoWidth * team.height}
                        priority
                    />
                </a>
                ))}
            </Marquee>
        </div>
    )
}
