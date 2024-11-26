import * as React from "react"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
} from "@/components/ui/card"
import Image from "next/image";
import { TeamDrawer } from "./team-drawer"

interface TeamProps {
    company: string;
    logo: string;
    description: string;
}

export function TeamCard({ company, logo, description }: TeamProps) {
    return (
        <div className="p-1">
            <Card>
                <CardContent className="flex flex-col items-center aspect-square justify-center p-6">
                    <Image
                        className="dark:invert p-4"
                        src={logo}
                        alt={company}
                        width={300}
                        height={300}
                        priority
                    />
                    <CardDescription>{description}</CardDescription>
                </CardContent>
                <CardFooter className="-mt-12 flex justify-end">
                    <TeamDrawer />
                </CardFooter>
            </Card>
        </div>
    )
}
