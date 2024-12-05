import { GithubIcon, HomeIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

export function HomeFooter() {
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <Link
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="/"
                rel="noopener noreferrer"
            >
                <HomeIcon className="opacity-50" />
                Home
            </Link>
            <Link
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://github.com/jangarong/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <GithubIcon className="opacity-50" />
                jangarong
            </Link>
            <Link
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://linkedin.com/in/jangarong/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <LinkedinIcon className="opacity-50" />
                jangarong
            </Link>
        </footer>
    )
}
