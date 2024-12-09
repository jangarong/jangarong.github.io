import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { CardTitle, CardDescription, CardContent, CardHeader } from "@/components/ui/card";
import { BriefcaseIcon, GithubIcon, HomeIcon, KeyRoundIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import { PortalButton } from "./portal-button";

export default function PortalCardDesktopContent() {
    const portalButtons = [
        {
            icon: <HomeIcon />,
            link: "/",
            title: "Home"
        },
        {
            icon: <BriefcaseIcon />,
            link: "/works",
            title: "Works"
        },
        {
            icon: <Image src={"/zodiactail-icon.png"} alt={"zt-icon"} width={15} height={15} className="mb-[-4px]" />,
            link: "/zodiactail/index.html",
            title: "Zodiac Tail"
        },
        {
            icon: <KeyRoundIcon />,
            link: "https://keys.openpgp.org/search?q=6BDFD428487D50AC40774CB4AC382728823BDAEC",
            title: "PGP"
        },
        {
            icon: <LinkedinIcon />,
            link: "https://www.linkedin.com/in/jangarong/",
            title: "LinkedIn"
        },
        {
            icon: <GithubIcon />,
            link: "https://github.com/jangarong",
            title: "GitHub"
        },
    ]
    return (
        <div className="flex flex-col items-center">
            <CardHeader>
                <div className="flex flex-col items-center justify-between text-xl">
                    <CardTitle className="p-2">
                        Jan Garong
                    </CardTitle>
                    <CardDescription className="text-center">
                        <AnimatedShinyText className="inline-flex items-center justify-center px-4 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                            <span>Portal Page</span>
                        </AnimatedShinyText>
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent className="w-[400px] mt-[-8px] flex justify-center">
                <div className="grid grid-cols-3 gap-8">
                    {portalButtons.map((portalButtonProps =>
                        <div key={portalButtonProps.title} className="place-items-center">
                            <PortalButton
                                link={portalButtonProps.link}
                                icon={portalButtonProps.icon}
                                title={portalButtonProps.title}
                            />
                        </div>))}
                </div>
            </CardContent>
        </div>
    );
}
