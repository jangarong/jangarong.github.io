import * as React from "react"

import {
    Card,
} from "@/components/ui/card"
import ShineBorder from "@/components/ui/shine-border"

interface RGBCardMobileProps {
    header: JSX.Element;
    footer: JSX.Element;
    width: number;
    height: number;
}

export default function RGBCardMobile({ header, footer, width, height }: RGBCardMobileProps) {
    return (
        <Card className={`flex flex-col`} style={{width: `${width}px`, height: `${height}px`}}>
            <ShineBorder
                className={`dark:bg-lightblack flex flex-col overflow-hidden rounded-lg border`}
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
                <div className="flex flex-row justify-start overflow-hidden">
                    <div className="flex flex-col">
                        <div className="h-[100px] flex justify-center flex-col">
                            {header}
                        </div>
                        <div className="">
                            <Card className={`h-[400px] rounded-none dark:bg-lightblack`} style={{width: `${width}px`}}>
                                <div className="opacity-10 w-[100%] h-[100%] bg-[url('/assets/jang45.svg')] dark:invert bg-repeat-space bg-[length:50px_50px]"></div>
                            </Card>
                        </div>
                        <div className="h-[150px] mt-[15px]">
                            {footer}
                        </div>
                    </div>
                </div>
            </ShineBorder>
        </Card>
    )
}
