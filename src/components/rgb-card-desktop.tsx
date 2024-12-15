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
        <Card className={` flex flex-row`} style={{ width: `${width}px`, height: `${height}px` }}>
            <ShineBorder
                className={`dark:bg-lightblack flex flex-row overflow-hidden rounded-lg border md:shadow-xl w-full`}
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
                <div className="flex flex-row items-center justify-start overflow-hidden ">
                    <div className="ml-[25px]">
                        <ShineBorder
                            className={`dark:bg-lightblack flex flex-row overflow-hidden border-2 md:shadow-xl w-full rounded-none`}
                            color={["dark"]}>
                            <Card className={`w-[200px] border-2 rounded-none dark:bg-lightblack`} style={{ height: `${height}px` }}>
                                <div className="opacity-10 w-[100%] h-[100%] bg-[url('/jang45.svg')] dark:invert bg-repeat-space bg-[length:35px_35px]"></div>
                            </Card>
                        </ShineBorder>
                    </div>
                    <div className="w-[400px]">
                        {children}
                    </div>
                </div>
            </ShineBorder>

        </Card >
    )
}
