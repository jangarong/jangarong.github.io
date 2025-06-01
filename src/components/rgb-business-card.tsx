import * as React from "react"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import ShineBorder from "@/components/ui/shine-border"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { MailIcon, KeyRoundIcon } from "lucide-react";
import AnimatedShinyText from "./ui/animated-shiny-text";

export default function RgbBusinessCard() {
    return (
        <Card className={`my-[200px] md:my-[75px] rotate-45 md:rotate-12 w-[650px] h-[350px] flex flex-row`}>
            <ShineBorder
                className={`dark:bg-lightblack flex flex-row overflow-hidden rounded-lg border shadow-xl w-full`}
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
                <div className="flex flex-row items-center justify-start overflow-hidden ">
                    <div className="ml-[25px]">

                        <Card className={`w-[200px] h-[350px] rounded-none dark:bg-lightblack`}>
                            <div className="opacity-10 w-[100%] h-[100%] bg-[url('/assets/jang45.svg')] dark:invert bg-repeat-space bg-[length:40px_40px]"></div>
                        </Card>
                    </div>
                    <div className="w-[400px]">
                        <div className="flex flex-col justify-center ml-[24px]">
                            <CardHeader>
                                <div className="flex flex-col items-left justify-between pt-4 text-xl">
                                    <CardTitle className="mb-1">
                                        Jan Garong
                                    </CardTitle>
                                    <CardDescription className="text-left">
                                        <AnimatedShinyText className="inline-flex items-left justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                                            <span>Software Engineer | UToronto CS &apos;23</span>
                                        </AnimatedShinyText>
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent className="w-[90%] mt-[-8px] text-sm">
                                <div className="mb-2 flex flex-row items-center"><span className="mr-[8px]"><MailIcon width={20} /></span> <a href="mailto:jan.garong@alumni.utoronto.ca">jan.garong@alumni.utoronto.ca</a></div>
                                <div className="mb-2 flex flex-row items-center"><span className="mr-[8px]"><KeyRoundIcon width={20} /></span> <a href="https://keys.openpgp.org/search?q=6BDFD428487D50AC40774CB4AC382728823BDAEC">PGP Key (6BDFD428)</a></div>
                                <div className="mb-2 flex flex-row items-center"><GitHubLogoIcon className="h-[20px] w-[20px] mr-[8px]" /><a href="https://github.com/jangarong/">https://github.com/jangarong</a></div>
                                <div className="mb-2 flex flex-row items-center"><LinkedInLogoIcon className="h-[20px] w-[20px] mr-[8px]" /><a href="https://www.linkedin.com/in/jangarong/">https://www.linkedin.com/in/jangarong/</a></div>
                            </CardContent>
                            <CardFooter className="flex justify-between w-[100%]">
                            </CardFooter>
                        </div>
                    </div>
                </div>
            </ShineBorder>

        </Card >
    )
}
