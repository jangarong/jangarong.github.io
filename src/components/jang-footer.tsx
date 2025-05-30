import { BriefcaseBusinessIcon, FileTextIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function JangFooter() {
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <Link
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="/works"
            >
                <BriefcaseBusinessIcon className="opacity-50" />
                Works
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
                <Image src={"/assets/zodiactail-icon.png"} alt={"zt-icon"} width={20} height={20} />
                Zodiac Tail
            </Link>
        </footer>
    )
}
