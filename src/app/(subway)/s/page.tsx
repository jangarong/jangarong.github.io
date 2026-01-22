import Link from "next/link";
import "./globals.css";
import Header from "@/components/b/header";
import BFeatured from "@/components/b-featured";
import PersonalCard from "@/components/personal-card";
import TTCLine1 from "@/components/subway/ttc-line-1";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const metadata = {
    title: 'Jan Garong',
    // description: 'Read my blog.',
}

export default function Page() {

    const teams = [
        {
            "company": "Google Cloud Security",
            "logo": "/assets/companies/google.png",
            "avatar": "/assets/companies/icons/google.jpg",
            "url": "/google",
            "width": 2,
            "height": 1
        },
        {
            "company": "Trend Micro",
            "logo": "/assets/companies/trend.svg",
            "avatar": "/assets/companies/icons/trend.jpg",
            "url": "/trend",
            "width": 2,
            "height": 0.75
        },
        {
            "company": "BlackBerry Cylance",
            "logo": "/assets/companies/cylance.png",
            "avatar": "/assets/companies/icons/cylance.jpg",
            "url": "/cylance",
            "width": 2,
            "height": 0.75
        },
        {
            "company": "CertiK",
            "logo": "/assets/companies/certik.svg",
            "avatar": "/assets/companies/icons/certik.jpg",
            "url": "/certik",
            "width": 2,
            "height": 0.5
        },
        {
            "company": "University of Toronto Scarborough"
        }
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
            <TTCLine1 items={teams.map(team => <div className="mt-[-6px] font-medium">
                {team.company}
                <Card size="sm" className="mx-auto w-full max-w-sm">
                    <CardHeader className="flex flex-row align-center">
                        <Avatar className="border size-14 m-auto">
                            <AvatarImage src={team.avatar} alt={team.company} className="object-contain" />
                            <AvatarFallback>{team.company}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col justify-center ml-4">
                            <CardTitle>{team.company}</CardTitle>
                            <CardDescription>
                                This card uses the small size variant.
                            </CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p>
                            The card component supports a size prop that can be set to
                            &quot;sm&quot; for a more compact appearance.
                        </p>
                    </CardContent>
                    <CardFooter>
                        test
                    </CardFooter>
                </Card>
                <Image
                    className={`m-2 mb-${logoMarginBottom} dark:invert`}
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
