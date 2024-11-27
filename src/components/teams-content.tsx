import Image from "next/image";

interface TeamsContentProps {
    isMobile?: boolean;
}

export function TeamsContent({isMobile}: TeamsContentProps) {

    const teams = [
        {
            "company": "Google",
            "logo": "/companies/google.svg",
            "url": "https://about.google/",
            "description": "Google Cloud Security",
            "enabled": false,
            "width":1,
            "height":0.5
        },
        {
            "company": "Trend Micro",
            "logo": "/companies/trend.svg",
            "url": "https://www.trendmicro.com/",
            "description": "Trend Micro Email Security",
            "enabled": true,
            "width":1.25,
            "height":0.75
        },
        {
            "company": "BlackBerry",
            "logo": "/companies/blackberry.svg",
            "url": "https://www.blackberry.com",
            "description": "BlackBerry CylanceMDR",
            "enabled": true,
            "width":1.25,
            "height":0.5
        },
        {
            "company": "CertiK",
            "logo": "/companies/certik.svg",
            "url": "https://certik.com",
            "description": "CertiK Skynet",
            "enabled": true,
            "width":1.25,
            "height":0.5
        },
    ]

    let logoWidth = 100
    let logoMargin = 2
    let logoMarginBottom = 2
    if (!!isMobile){
        logoWidth = 70
        logoMargin = 0
        logoMarginBottom = 4
    }

    return (
        <div className={`flex flex-wrap justify-evenly align-center`}>
            {teams.map((team) => (
                <a href={team.url} className={`flex pl-${logoMargin} pr-${logoMargin}`} key={team.company}>
                    <Image
                        className={`dark:invert m-2 mb-${logoMarginBottom}`}
                        src={team.logo}
                        alt={team.company}
                        width={logoWidth * team.width}
                        height={logoWidth * team.height}
                        priority
                    />
                    {team.enabled ? null : <div className="text-2xl ml-[-8px] mr-[6px]">*</div>}
                </a>
            ))}
        </div>
    )
}
