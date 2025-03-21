import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";

interface TeamProps {
    avatar: string;
    teamLogo: string; // TODO: Hack; teamLogo is CSS className
    description: string;
    team: string;
    date: string;
    url: string;
    color: string;
    invert?: boolean;
}

export function TeamCard({ avatar, description, team, date, url, color, invert, teamLogo }: TeamProps) {
    return (
        <Card className={`border-${color} bg-${color} h-[420px] w-[280px] md:h-[520px] md:w-[320px] rounded-3xl flex flex-col`}>
            <CardContent className="flex-grow z-10">
                <div className="flex gap-3 flex-row items-center mb-[16px] mt-[16px] mr-[16px]">
                    <Avatar>
                        <AvatarImage src={avatar} />
                        <AvatarFallback> src={team}</AvatarFallback>
                    </Avatar>
                    <div className={`flex flex-col ${invert ? 'invert' : ''}`}>
                        <Link href={url} target="_blank"
                            rel="noopener noreferrer" className="text-md font-bold">{team}</Link>
                        <p className="text-sm opacity-80">{date}</p>
                    </div>
                </div>
                <div className={`${invert ? 'invert' : ''}`}>
                    <p>{description}</p>
                </div>
            </CardContent>
            <CardFooter className={`z-10 bottom-0 left-0 right-0 flex justify-end ${invert ? 'invert' : ''}`}>
                <Link href={url} target="_blank"
                    rel="noopener noreferrer">
                    <ArrowRightIcon />
                </Link>
            </CardFooter>
            <Card className={`absolute border-${color} bg-${color} ${teamLogo} h-[420px] w-[280px] md:h-[520px] md:w-[320px] rounded-3xl flex flex-col opacity-30`}></Card>
        </Card>
    )
}
