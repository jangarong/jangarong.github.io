import { FileTextIcon, HomeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function WorksFooter() {
    return (
        <div className="flex flex-row flex-wrap items-center justify-center gap-6 opacity-50 mt-8">
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
    )
}
