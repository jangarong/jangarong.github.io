import Link from "next/link";
import { Separator } from "./ui/separator";
import { FileTextIcon, GithubIcon, KeyRoundIcon, LinkedinIcon, MailIcon } from "lucide-react";


export default function LinktreeFooter() {
    return (
        <div className="flex flex-col items-center w-[100%] pb-[64px]">
            <Separator className="my-4 w-[80vw]" />
            <div className="flex flex-col justify-center h-[267px] md:h-[168px] w-[80vw] opacity-50">
                <div className="flex gap-8 justify-center flex-wrap pl-[24px] pr-[24px]">
                    <Link href={"https://www.linkedin.com/in/jangarong/"} className="flex hover:underline hover:underline-offset-4">
                        <LinkedinIcon className="mb-[4px] mr-[8px]" />
                        jangarong
                    </Link>
                    <Link href={"https://github.com/jangarong"} className="flex hover:underline hover:underline-offset-4">
                        <GithubIcon className="mb-[2px] mr-[8px]" />
                        jangarong
                    </Link>
                    <Link href={"https://keys.openpgp.org/search?q=6BDFD428487D50AC40774CB4AC382728823BDAEC"} className="flex hover:underline hover:underline-offset-4">
                        <KeyRoundIcon className="mb-[4px] mr-[8px]" />
                        PGP Key
                    </Link>
                    <Link href={"/resume.pdf"} className="flex hover:underline hover:underline-offset-4">
                        <FileTextIcon className="mb-[4px] mr-[8px]" />
                        Resume
                    </Link>
                    <Link href={"mailto:jan.garong@alumni.utoronto.ca"} className="flex hover:underline hover:underline-offset-4">
                        <MailIcon className="mr-[8px]" />
                        Email
                    </Link>
                </div>
            </div>
        </div>
    );
}
