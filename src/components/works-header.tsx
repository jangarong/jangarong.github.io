import { FileTextIcon, HomeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function WorksHeader() {
    return (
        <nav className="fixed top-0 left-0 w-full z-10 mt-8 flex flex-col items-center">
            <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                Contributions
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center gap-6 opacity-50">
                <Link
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="/"
                >
                    <HomeIcon className="opacity-50" />
                    Home
                </Link>
                <Link
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="/resume.pdf"
                >
                    <FileTextIcon className="opacity-50" />
                    Resume
                </Link>
                <Link
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="/zodiactail/index.html"
                >
                    <Image src={"/zodiactail-icon.png"} alt={"zt-icon"} width={20} height={20} />
                    Zodiac Tail
                </Link>
            </div>
        </nav>
    )
}
