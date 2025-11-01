import * as React from "react"

import {
    Card,
} from "@/components/ui/card"
import ShineBorder from "@/components/ui/shine-border"

interface RGBCardMobileProps {
    header: JSX.Element;
    footer: JSX.Element;
    body: React.ReactNode;
    width: number;
    height: number;
    className: string;
}

export default function RGBCardMobile({ header, body, footer, width, height, className }: RGBCardMobileProps) {
    return (
        <Card className={`flex flex-col ${className}`} style={{ width: `${width}px`, height: `${height}px` }}>
            <ShineBorder
                className={`bg-lightwhite dark:bg-lightblack flex flex-col overflow-hidden rounded-lg border`}
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
                <div className="flex flex-row justify-start overflow-hidden">
                    <div className="flex flex-col">
                        <div className="h-[100px] flex justify-center flex-col">
                            {header}
                        </div>
                        <div className="border-2">
                            <Card className={`h-[350px] rounded-none bg-lightwhite2 border-0 mr-[-12px] dark:invert`} style={{ width: `${width}px` }}>
                                {/* very strange behaviour, height changes on color theem change */}
                                <div className="absolute opacity-10 w-[100%] h-[350px] bg-[url('/assets/jang45.svg')] bg-repeat-space bg-[length:40px_40px]"></div>
                                {body}
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
