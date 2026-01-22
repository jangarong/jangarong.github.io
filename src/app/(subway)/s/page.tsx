import Link from "next/link";
import "./globals.css";
import Header from "@/components/b/header";
import BFeatured from "@/components/b-featured";
import PersonalCard from "@/components/personal-card";
import TTCLine1 from "@/components/subway/ttc-line-1";
import Image from "next/image";

export const metadata = {
    title: 'Jan Garong',
    // description: 'Read my blog.',
}

export default function Page() {

    const teams = [
        {
            "company": "Google Cloud Security",
            "logo": "/assets/companies/google.png",
            "url": "/google",
            "width": 2,
            "height": 1
        },
        {
            "company": "Trend Micro",
            "logo": "/assets/companies/trend.svg",
            "url": "/trend",
            "width": 2,
            "height": 0.75
        },
        {
            "company": "BlackBerry Cylance",
            "logo": "/assets/companies/cylance.png",
            "url": "/cylance",
            "width": 2,
            "height": 0.75
        },
        {
            "company": "CertiK",
            "logo": "/assets/companies/certik.svg",
            "url": "/certik",
            "width": 2,
            "height": 0.5
        },
    ]

    let logoWidth = 90
    let logoMargin = 2
    let logoMarginBottom = 2
    if (true) {
        logoWidth = 70
        logoMargin = 0
        logoMarginBottom = 2
    }

    return (
        <div className="min-h-[100vh]">
            <TTCLine1 items={teams.map(team => <div>
                <Image
                    className={`m-2 mb-${logoMarginBottom}`}
                    src={team.logo}
                    alt={team.company}
                    width={logoWidth * team.width}
                    height={logoWidth * team.height}
                    priority
                />
            </div>)} />
        </div>
    )
}
