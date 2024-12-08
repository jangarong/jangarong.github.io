import * as React from "react"

import {
    Card,
} from "@/components/ui/card"
import ShineBorder from "@/components/ui/shine-border"

interface RGBCardMobileProps {
    header: JSX.Element;
    footer: JSX.Element;
}

interface RGBCardDesktopProps {
    children: JSX.Element;
}

interface RGBCardProps {
    headerMobile: JSX.Element;
    footerMobile: JSX.Element;
    contentDesktop: JSX.Element;
}

function RGBCardMobile({ header, footer }: RGBCardMobileProps) {
    return (
        <Card className="w-[350px] h-[650px] flex flex-col">
            <ShineBorder
                className="dark:bg-lightblack flex w-[350px] h-[650px] flex-col overflow-hidden rounded-lg border md:shadow-xl"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
                <div className="flex flex-row justify-start mt-[-20px] mb-[-20px] overflow-hidden">
                    <div className="flex flex-col">
                        <div className="h-[100px]">
                            {header}
                        </div>
                        <div className="mt-[15px] mb-[5px]">
                            <Card className="w-[350px] h-[412px] rounded-none">
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

function RGBCardDesktop({ children }: RGBCardDesktopProps) {
    return (
        <Card className="w-[650px] h-[350px] flex flex-row">
            <ShineBorder
                className="w-[650px] h-[350px] dark:bg-lightblack flex flex-row overflow-hidden rounded-lg border md:shadow-xl"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
                <div className="flex flex-row items-center justify-start overflow-hidden">
                    <div className="ml-[25px]">
                        <Card className="w-[200px] h-[350px] rounded-none">
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

export default function RGBCard({ headerMobile, footerMobile, contentDesktop }: RGBCardProps) {
    return (
        <div>
            <div className="hidden md:block">
                <RGBCardDesktop>
                    {contentDesktop}
                </RGBCardDesktop>
            </div>
            <div className="visible md:hidden">
                <RGBCardMobile header={headerMobile} footer={footerMobile} />
            </div>
        </div>
    );
}
