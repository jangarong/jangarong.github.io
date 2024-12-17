import { CardTitle, CardDescription } from "@/components/ui/card";
import { CompassIcon, FileTextIcon } from "lucide-react";
import Link from "next/link";

export default function JangCardMobileHeader() {
    return (
        <div className="flex flex-row items-center justify-between ml-6 mr-6 text-lg mb-2">
            <div className="pt-2">
                <CardTitle className="text-sm mb-1">Jan Garong</CardTitle>
                <CardDescription className="opacity-80 text-sm">
                    Software Engineer
                </CardDescription>
            </div>
            <div className="text-xs items-center flex flex-row justify-between">
                <Link href="/test/portal">
                    <CompassIcon className="ml-4 opacity-50" />
                </Link>
                <Link href="/resume.pdf">
                    <FileTextIcon className="ml-4 opacity-50" />
                </Link>
            </div>
        </div>

    );
}
