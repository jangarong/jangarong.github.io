import { GithubIcon, LinkedinIcon, MailIcon, KeyRoundIcon } from "lucide-react";

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
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="mailto:jan.garong@alumni.utoronto.ca"
                target="_blank"
                rel="noopener noreferrer"
            >
                <MailIcon className="opacity-50" />
                jan.garong@alumni.utoronto.ca
            </a>
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://github.com/jangarong/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <GithubIcon className="opacity-50" />
                jangarong
            </a>
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://linkedin.com/in/jangarong/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <LinkedinIcon className="opacity-50" />
                jangarong
            </a>
        </footer>
    )
}