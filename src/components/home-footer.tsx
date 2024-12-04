import { HomeIcon } from "lucide-react";

export function HomeFooter() {
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="/"
                rel="noopener noreferrer"
            >
                <HomeIcon className="opacity-50" />
                Home
            </a>
        </footer>
    )
}
