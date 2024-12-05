import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
            <div className="flex gap-3 flex-row items-center ml-[-6.5px] mb-[16px]">
                <div className="w-3 h-3 bg-black rounded-full border border-white" />
                <Avatar>
                    <AvatarImage src={avatar} />
                    <AvatarFallback> src={team}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <Link href={url} className="text-md font-bold">{team}</Link>
                    <p className="text-sm opacity-50">{date}</p>
                </div>
            </div>
            <div className="ml-[18px]">
                    <p>{description}</p>
                </div>
        </div>
    )
}
