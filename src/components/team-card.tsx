import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";
// import { Link } from "@nextui-org/link";

interface TeamProps {
    avatar: string;
    description: string;
    team: string;
    date: string;
    url: string;
    color: string;
}

export function TeamCard({ avatar, description, team, date, url, color }: TeamProps) {
    return (
        <Card className={`border-${color} bg-${color} h-[640px] w-[320px] rounded-3xl flex flex-col`}>
            <CardContent className="flex-grow">
                <div className="flex gap-3 flex-row items-center mb-[16px] mt-[16px] mr-[16px]">
                    <Avatar>
                        <AvatarImage src={avatar} />
                        <AvatarFallback> src={team}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <div className="text-md font-bold">{team}</div>
                        <p className="text-sm opacity-80">{date}</p>
                    </div>
                </div>
                <div>
                    <p>{description}</p>
                </div>
            </CardContent>
            <CardFooter className="bottom-0 left-0 right-0 flex justify-end">
                <Link href={url} target="_blank"
                    rel="noopener noreferrer">
                    <ArrowRightIcon />
                </Link>
            </CardFooter>
        </Card>
    )
}
