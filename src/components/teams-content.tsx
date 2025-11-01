import Image from "next/image";
import Marquee from "@/components/ui/marquee";

interface TeamsContentProps {
    isMobile?: boolean;
}

export function TeamsContent({ isMobile }: TeamsContentProps) {

    const teams = [
        {
            "company": "Google Cloud Security",
            "logo": "/assets/companies/google.png",
            "url": "https://cloud.google.com/security",
            "width": 1.3,
            "height": 0.5
        },
        {
            "company": "Trend Micro",
            "logo": "/assets/companies/trend.svg",
            "url": "https://www.trendmicro.com/",
            "width": 1.5,
            "height": 0.5
        },
        {
            "company": "BlackBerry Cylance",
            "logo": "/assets/companies/cylance.png",
            "url": "https://cylance.com",
            "width": 1.75,
            "height": 0.5
        },
        {
            "company": "CertiK",
            "logo": "/assets/companies/certik.svg",
            "url": "https://certik.com",
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
            <Marquee pauseOnHover className="[--duration:20s] flex justify-center align-center">
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
