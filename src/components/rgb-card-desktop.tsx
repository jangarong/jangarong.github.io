import * as React from "react"

import {
    Card,
} from "@/components/ui/card"
import ShineBorder from "@/components/ui/shine-border"

interface RGBCardDesktopProps {
    children: JSX.Element;
    width: number;
    height: number;
}

export default function RGBCardDesktop({ children, width, height }: RGBCardDesktopProps) {
    return (
        <Card className={`w-[${width}px] h-[${height}px] flex flex-row`}>
            <ShineBorder
                className={`w-[${width}px] h-[${height}px] dark:bg-lightblack flex flex-row overflow-hidden rounded-lg border md:shadow-xl`}
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
                <div className="flex flex-row items-center justify-start overflow-hidden">
                    <div className="ml-[25px]">
                        <Card className={`w-[200px] h-[${height}px] rounded-none`}>
                            <div className="opacity-10 w-[100%] h-[100%] bg-[url('/jang45.svg')] dark:invert bg-repeat-space bg-[length:40px_40px]"></div>
                        </Card>
                    </div>
                    <div className="w-[400px]">
                        {children}
                    </div>
                </div>
            </ShineBorder>

        </Card >
    )
}
