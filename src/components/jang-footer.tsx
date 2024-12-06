import { GithubIcon, LinkedinIcon, MailIcon, KeyRoundIcon, BriefcaseBusinessIcon, FileTextIcon, HomeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function JangFooter() {
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://keys.openpgp.org/search?q=6BDFD428487D50AC40774CB4AC382728823BDAEC"
                target="_blank"
                rel="noopener noreferrer"
            >
                <KeyRoundIcon className="opacity-50" />
                PGP Key
            </a>
            <Link
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="/"
            >
                <HomeIcon className="opacity-50" />
                Home
            </Link>
            <Link
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="/works"
            >
                <BriefcaseBusinessIcon className="opacity-50" />
                Contributions
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
        </footer>
    )
}
