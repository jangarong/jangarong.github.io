import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
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
        <Card className={`border-${color} bg-${color} h-[480px] w-[320px]`}>
            <CardContent>
                <div className="flex gap-3 flex-row items-center mb-[16px] mt-[16px] mr-[16px]">
                    <Avatar>
                        <AvatarImage src={avatar} />
                        <AvatarFallback> src={team}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <Link href={url} className="text-md font-bold">{team}</Link>
                        <p className="text-sm opacity-50">{date}</p>
                    </div>
                </div>
                <div>
                    <p>{description}</p>
                </div>
            </CardContent>
        </Card>
    )
}
