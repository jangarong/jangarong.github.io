import Image from "next/image";

interface TeamsContentProps {
    isMobile?: boolean;
}

export function TeamsContent({isMobile}: TeamsContentProps) {

    const teams = [
        {
            "company": "Google",
            "logo": "/companies/google.svg",
            "url": "https://cloud.google.com/security",
            "description": "Google Cloud Security",
            "width":1,
            "height":0.5
        },
        {
            "company": "Trend Micro",
            "logo": "/companies/trend.svg",
            "url": "https://www.trendmicro.com/about.html",
            "description": "Trend Micro Email Security",
            "width":1,
            "height":0.5
        },
        {
            "company": "BlackBerry",
            "logo": "/companies/blackberry.svg",
            "url": "https://www.blackberry.com/company/overview",
            "description": "BlackBerry CylanceMDR",
            "width":1.25,
            "height":0.5
        },
        {
            "company": "CertiK",
            "logo": "/companies/certik.svg",
            "url": "https://www.certik.com/company/about",
            "description": "CertiK Skynet",
            "width":1.25,
            "height":0.5
        },
    ]

    let logoWidth = 90
    let logoMargin = 2
    let logoMarginBottom = 2
    if (!!isMobile){
        logoWidth = 70
        logoMargin = 0
        logoMarginBottom = 4
    }

    return (
        <div className={`flex flex-wrap dark:invert justify-evenly align-center`}>
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
        </div>
    )
}
