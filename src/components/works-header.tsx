import { HomeIcon } from "lucide-react";
import Link from "next/link";

export function WorksHeader() {
    return (
        <div className="fixed top-0 left-0 w-full z-10 mt-12 flex flex-col items-center">
            <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 text-white opacity-75 mb-[8px]">
                Works
            </div>
            <div className="opacity-50">
                <Link
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href={"/"}
                >
                    <HomeIcon />
                    Home
                </Link>
            </div>
        </div>
    )
}
