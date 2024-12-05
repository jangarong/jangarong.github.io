import { GithubIcon, HomeIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

export function WorksHeader() {
    return (
        <nav className="fixed top-0 left-0 w-full z-10 mt-8 flex flex-col items-center">
            <div className="mb-4 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 text-white">
                My Works.
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center gap-6">
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
            </div>
        </nav>
    )
}
