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
        <Card className={`w-[${width}px] h-[${height}px] flex flex-col`}>
            <ShineBorder
                className={`dark:bg-lightblack flex w-[${width}px] h-[${height}px] flex-col overflow-hidden rounded-lg border md:shadow-xl`}
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
                <div className="flex flex-row justify-start overflow-hidden">
                    <div className="flex flex-col">
                        <div className="h-[80px]">
                            {header}
                        </div>
                        <div className="mt-[10px] mb-[10px]">
                            <Card className={`w-[${width}px] h-[425px] rounded-none`}>
                                <div className="opacity-10 w-[100%] h-[100%] bg-[url('/jang45.svg')] dark:invert bg-repeat-space bg-[length:40px_40px]"></div>
                            </Card>
                        </div>
                        <div className="h-[150px]">
                            {footer}
                        </div>
                    </div>
                </div>
            </ShineBorder>
        </Card>
    )
}
