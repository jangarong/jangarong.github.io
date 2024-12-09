import { CardTitle, CardDescription } from "@/components/ui/card";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

export default function PortalCardMobileHeader() {
    return (
        <div className="flex flex-row items-center justify-between ml-6 mr-6 text-lg md:mt-[20px] mb-2">
            <div className="pt-2">
                <CardTitle className="text-sm mb-1">Jan Garong</CardTitle>
                <CardDescription className="opacity-80 text-sm">
                    Software Engineer
                </CardDescription>
            </div>
            <div className="text-xs items-center flex flex-row justify-between">
                <Link href="/">
                    <HomeIcon className="ml-4 opacity-50" />
                </Link>
            </div>
        </div>

    );
}
