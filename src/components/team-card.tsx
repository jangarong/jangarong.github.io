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

export function TeamCard({ avatar, description, team, date, url }: TeamProps) {
    return (
        <Card className="max-w-[400px] no-border bg-white/20 filter blur-10">
            <CardHeader className="flex gap-3 flex-row items-center">
                <Avatar>
                    <AvatarImage src={avatar} />
                    <AvatarFallback> src={team}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <p className="text-md font-bold">{team}</p>
                    <p className="text-sm opacity-50">{date}</p>
                </div>
            </CardHeader>
            <Separator className="my-4" />
            <CardContent>
                <p>{description}</p>
            </CardContent>
            <Separator className="my-4" />
            <CardFooter>
                <Link
                    href={url}
                >
                    Product Page
                </Link>
            </CardFooter>
        </Card>
    )
}
