import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import ShineBorder from "@/components/ui/shine-border"
import { TeamsContent } from "./teams-content"
import { GithubIcon, LinkedinIcon } from "lucide-react"
import AnimatedShinyText from "@/components/ui/animated-shiny-text"

export function JangCard() {
    return (
        <Card className="w-[650px] h-[350px] flex flex-row">
            <ShineBorder
                className="flex w-[650px] h-[350px] flex-row items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
                <div className="bg-lightblack flex flex-row items-center justify-center ml-[-20px] mr-[-10px] overflow-hidden">
                    <Card className="ml-[40px] w-[275px] h-[350px] rounded-none">
                        <div className="opacity-10 w-[100%] h-[100%] bg-[url('/jang45.svg')] dark:invert bg-repeat-space bg-[length:40px_40px]"></div>
                    </Card>
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
                            <a href="https://github.com/jangarong">
                                <Button variant="outline">
                                    GitHub
                                    <GithubIcon className="mb-[2px]" />
                                </Button>
                            </a>
                            <a href="https://linkedin.com/in/jangarong/">
                                <Button className="h-[34px] mb-[2px]">
                                    LinkedIn
                                    <LinkedinIcon className="mb-[2px]" />
                                </Button>
                            </a>
                        </CardFooter>
                    </div>
                </div>
            </ShineBorder>

        </Card >
    )
}
