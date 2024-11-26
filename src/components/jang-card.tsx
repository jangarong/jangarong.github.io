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
import { CodeIcon, DownloadIcon } from "lucide-react"

export function JangCard() {
    return (
        <Card className="w-[650px] h-[350px] flex flex-row">
            <ShineBorder
                className="flex w-[650px] h-[350px] flex-row items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
                <Card className="ml-[40px] w-[275px] h-[350px] rounded-none">
                    <div className="opacity-10 w-[100%] h-[100%] bg-[url('/jang45.svg')] dark:invert bg-repeat-space bg-[length:40px_40px]"></div>
                </Card>
                <div className="flex flex-col items-center">

                    <CardHeader>
                        <div className="flex flex-col items-center justify-between pt-4 text-xl">
                            <CardTitle className="p-2">Jan Garong</CardTitle>
                            <CardDescription className="text-center">Developing Cybersecurity tools at</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="w-[80%]">
                        <TeamsContent />
                        <div className="flex w-[100%] text-xxs text-center justify-center">
                            *Starting January 2025
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between w-[100%]">
                        <Button variant="outline">
                            Contributions
                            <CodeIcon />
                        </Button>
                        <Button>
                            Resume
                            <DownloadIcon />
                        </Button>
                    </CardFooter>
                </div>
            </ShineBorder>
        </Card>
    )
}
