import * as React from "react"

import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"
import ShineBorder from "@/components/ui/shine-border"
import { TeamsContent } from "./teams-content"
import { CodeIcon, DownloadIcon } from "lucide-react"
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

                        <div className="flex flex-row items-center justify-between ml-6 mr-6 text-lg mt-[20px]">
                            <CardTitle>Jan Garong</CardTitle>
                            <div className="text-xs items-center flex flex-row justify-end">
                                <CodeIcon className="ml-2 mr-2" height={40} />
                                <DownloadIcon className="ml-2 mr-2" height={40} />
                            </div>
                        </div>
                        <Card className="mt-[15px] w-[350px] h-[425px] rounded-none">
                            <div className="opacity-10 w-[100%] h-[100%] bg-[url('/jang45.svg')] dark:invert bg-repeat-space bg-[length:40px_40px]"></div>
                        </Card>
                        <CardContent className="mt-4">
                            <CardDescription className="text-center mb-2">
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
