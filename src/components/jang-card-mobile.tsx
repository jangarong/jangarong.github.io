import * as React from "react"

import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"
import ShineBorder from "@/components/ui/shine-border"
import { TeamsContent } from "./teams-content"
import { CodeIcon, DownloadIcon, GithubIcon, LinkedinIcon } from "lucide-react"
import AnimatedShinyText from "@/components/ui/animated-shiny-text"

export function JangCardMobile() {
    return (
        <Card className="w-[350px] h-[650px] flex flex-col">
            <ShineBorder
                className="flex w-[350px] h-[650px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
                <div className="bg-lightblack flex flex-row items-center justify-center mt-[-20px] mb-[-20px] overflow-hidden">
                    <div className="flex flex-col">

                        <div className="flex flex-row items-center justify-between ml-6 mr-6 text-lg mt-[20px] mb-2">
                            <div className="mt-3">
                                <CardTitle className="text-sm mb-1">Jan Garong</CardTitle>
                                <CardDescription className="opacity-80 text-sm">
                                    Software Engineer
                                </CardDescription>
                            </div>
                            <div className="text-xs items-center flex flex-row justify-between">
                                <a href="https://github.com/jangarong">
                                    <GithubIcon className="ml-4 opacity-50" />
                                </a>
                                <a href="https://linkedin.com/in/jangarong/">
                                    <LinkedinIcon className="ml-4 opacity-50" />
                                </a>
                            </div>
                        </div>
                        <Card className="mt-[15px] w-[350px] h-[412px] rounded-none">
                            <div className="opacity-10 w-[100%] h-[100%] bg-[url('/jang45.svg')] dark:invert bg-repeat-space bg-[length:40px_40px]"></div>
                        </Card>
                        <CardContent className="mt-3">
                            <CardDescription className="text-center">
                                <AnimatedShinyText className="inline-flex items-center justify-center px-4 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                                    Developing Cybersecurity tools at
                                </AnimatedShinyText>
                            </CardDescription>
                            <TeamsContent isMobile={true} />
                            <div className="flex w-[100%] text-xxs text-center justify-center">
                                *Starting January 2025
                            </div>
                        </CardContent>
                    </div>
                </div>
            </ShineBorder>
        </Card>
    )
}
