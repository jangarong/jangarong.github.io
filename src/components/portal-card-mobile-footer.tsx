import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { CardDescription, CardContent } from "@/components/ui/card";
import { BriefcaseIcon, GithubIcon, KeyRoundIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PortalCardMobileFooter() {
    const portalButtons = [
        {
            icon: <BriefcaseIcon className="mb-[4px]" />,
            link: "/works",
            title: "Works"
        },
        {
            icon: <Image src={"/assets/zodiactail-icon.png"} alt={"zt-icon"} width={20} height={20} />,
            link: "/zodiactail/index.html",
            title: "Zodiac Tail"
        },
        {
            icon: <KeyRoundIcon />,
            link: "https://keys.openpgp.org/search?q=6BDFD428487D50AC40774CB4AC382728823BDAEC",
            title: "PGP"
        },
        {
            icon: <LinkedinIcon className="mb-[4px]" />,
            link: "https://www.linkedin.com/in/jangarong/",
            title: "LinkedIn"
        },
        {
            icon: <GithubIcon className="mb-[4px]" />,
            link: "https://github.com/jangarong",
            title: "GitHub"
        },
    ]

    return (

        <CardContent>
            <CardDescription className="text-center">
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 text-base">
                    Portal Page
                </AnimatedShinyText>
                <div className="mt-[8px] flex flex-row gap-4 justify-center flex-wrap">
                    {portalButtons.map(props => <div key={props.title}><Link
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href={props.link}
                    >
                        {props.icon}
                        {props.title}
                    </Link></div>)}
                </div>
            </CardDescription>

        </CardContent>

    );
}
