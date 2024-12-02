import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Divider } from "@nextui-org/divider";
import { Separator } from "@/components/ui/separator"
import Link from "next/link";
// import { Link } from "@nextui-org/link";

interface TeamProps {
    avatar: string;
    description: string;
    team: string;
    date: string;
    url: string;
}

export function TeamNode({ avatar, description, team, date, url }: TeamProps) {
    return (
        <div className="mb-[28px]">
            <div className="flex gap-3 flex-row items-center ml-[-6px]">
                <div className="w-3 h-3 bg-white rounded-full" />
                <Avatar>
                    <AvatarImage src={avatar} />
                    <AvatarFallback> src={team}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <p className="text-md font-bold">{team}</p>
                    <p className="text-sm opacity-50">{date}</p>
                </div>
            </div>
            <div className="flex-column ml-[16px]">
                <div>
                    <p>{description}</p>
                </div>
                <div>
                    <Link
                        href={url}
                    >
                        Product Page
                    </Link>
                </div>
            </div>
        </div>
    )
}
