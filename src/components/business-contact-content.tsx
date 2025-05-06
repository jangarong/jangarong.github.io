import { TeamsContent } from "@/components/teams-content";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import { CardTitle, CardDescription, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { CompassIcon, FileTextIcon, KeyRoundIcon, MailIcon } from "lucide-react";
import Link from "next/link";

export default function BusinessContactContent() {
    return (
        <div className="flex flex-col justify-center ml-[24px]">
            <CardHeader>
                <div className="flex flex-col items-left justify-between pt-4 text-xl">
                    <CardTitle className="mb-1">
                        Jan Garong
                    </CardTitle>
                    <CardDescription className="text-left">
                        <AnimatedShinyText className="inline-flex items-left justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                            <span>Software Engineer</span>
                        </AnimatedShinyText>
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent className="w-[90%] mt-[-8px] text-sm">
                <div className="mb-2 flex flex-row items-center"><span className="mr-[8px]"><MailIcon width={20} /></span> <a href="mailto:jan.garong@alumni.utoronto.ca">jan.garong@alumni.utoronto.ca</a></div>
                <div className="mb-2 flex flex-row items-center"><span className="mr-[8px]"><KeyRoundIcon width={20} /></span> <a href="/6BDFD428487D50AC40774CB4AC382728823BDAEC.asc">PGP Key (6BDFD428)</a></div>
                <div className="mb-2 flex flex-row items-center"><GitHubLogoIcon className="h-[20px] w-[20px] mr-[8px]" /><a href="https://github.com/jangarong/">https://github.com/jangarong</a></div>
                <div className="mb-2 flex flex-row items-center"><LinkedInLogoIcon className="h-[20px] w-[20px] mr-[8px]" /><a href="https://www.linkedin.com/in/jangarong/">https://www.linkedin.com/in/jangarong/</a></div>
            </CardContent>
        </div>
    );
}
