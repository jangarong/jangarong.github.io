import { TeamsContent } from "@/components/teams-content";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import { CardTitle, CardDescription, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CompassIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

export default function JangCardDesktopContent() {
    return (
        <div className="flex flex-col items-center">
            <CardHeader>
                <div className="flex flex-col items-center justify-between pt-4 text-xl">
                    <CardTitle className="p-2">
                        Jan Garong
                    </CardTitle>
                    <CardDescription className="text-center">
                        <AnimatedShinyText className="inline-flex items-center justify-center px-4 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                            <span>Developing Cybersecurity tools at</span>
                        </AnimatedShinyText>
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent className="w-[90%] mt-[-8px]">
                <TeamsContent />
                <div className="flex w-[100%] mt-[20px] text-xxs text-center justify-center">
                    *Starting January 2025
                </div>
            </CardContent>
            <CardFooter className="flex justify-between w-[100%]">
                <Link href="/portal">
                    <Button variant="outline">
                        Portal
                        <CompassIcon className="mb-[2px]" />
                    </Button>
                </Link>
                <Link href="https://linkedin.com/in/jangarong/">
                    <Button className="h-[34px] mb-[2px]">
                        LinkedIn
                        <LinkedinIcon className="mb-[2px]" />
                    </Button>
                </Link>
            </CardFooter>
        </div>
    );
}
