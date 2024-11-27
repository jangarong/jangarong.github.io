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
            "enabled": false
        },
        {
            "company": "Trend Micro",
            "logo": "/companies/trend.svg",
            "url": "https://www.trendmicro.com/",
            "description": "Trend Micro Email Security",
            "enabled": true
        },
        {
            "company": "BlackBerry",
            "logo": "/companies/blackberry.svg",
            "url": "https://www.blackberry.com",
            "description": "BlackBerry CylanceMDR",
            "enabled": true
        },
        {
            "company": "CertiK",
            "logo": "/companies/certik.svg",
            "url": "https://certik.com",
            "description": "CertiK Skynet",
            "enabled": true
        },
    ]

    let logoWidth = 90
    let logoMargin = 2
    let logoMarginBottom = 6
    if (!!isMobile){
        logoWidth = 80
        logoMargin = 0
        logoMarginBottom = 4
    }

    return (
        <div className="flex flex-wrap justify-center align-center">
            {teams.map((team) => (
                <a href={team.url} className={`flex pl-${logoMargin} pr-${logoMargin}`} key={team.company}>
                    <Image
                        className={`dark:invert m-2 mb-${logoMarginBottom}`}
                        src={team.logo}
                        alt={team.company}
                        width={logoWidth}
                        height={logoWidth/ 2}
                        priority
                    />
                    {team.enabled ? null : <div className="text-2xl ml-[-8px] mr-[6px]">*</div>}
                </a>
            ))}
        </div>
    )
}
