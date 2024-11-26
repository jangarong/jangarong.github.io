import Image from "next/image";

export function TeamsContent() {

    const teams = [
        {
            "company": "Google",
            "logo": "/companies/google.svg",
            "url": "",
            "description": "Google Cloud Security",
            "enabled": false
        },
        {
            "company": "Trend Micro",
            "logo": "/companies/trend.svg",
            "url": "",
            "description": "Trend Micro Email Security",
            "enabled": true
        },
        {
            "company": "BlackBerry",
            "logo": "/companies/blackberry.svg",
            "url": "",
            "description": "BlackBerry CylanceMDR",
            "enabled": true
        },
        {
            "company": "CertiK",
            "logo": "/companies/certik.svg",
            "url": "",
            "description": "CertiK Skynet",
            "enabled": true
        },
    ]

    return (
        <div className="flex flex-wrap justify-center align-center">
            {teams.map((team) => (
                <div className="flex">
                    <Image
                        className="dark:invert m-2 mb-6"
                        src={team.logo}
                        alt={team.company}
                        width={100}
                        height={75}
                        priority
                    />
                    {team.enabled ? null : <div className="text-2xl ml-[-8px] mr-[6px]">*</div>}
                </div>
            ))}
            <div className="flex w-[100%] text-xs text-center justify-center">
                *Starting January 2025
            </div>
        </div>
    )
}
