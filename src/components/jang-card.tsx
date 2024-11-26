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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Image from "next/image";
import { ModeToggle } from "./mode-toggle"
import { Separator } from "@/components/ui/separator"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { Teams } from "./teams"

export function JangCard() {
    return (
        <Card className="w-[650px] h-[350px] flex flex-row">
            <Card className="ml-[40px] w-[225px] rounded-none">
                <div className="opacity-10 w-[100%] h-[100%] bg-[url('/jang45.svg')] dark:invert bg-repeat-space bg-[length:40px_40px]"></div>
            </Card>
            <div className="flex flex-col">

                <CardHeader>
                    <div className="flex flex-col items-center justify-between p-12">
                        <CardTitle className="p-2">Jan Garong</CardTitle>
                        <CardDescription>Cybersecurity's Software Developer</CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    {/* <Teams /> */}
                </CardContent>
                <CardFooter className="flex justify-between">
                    <ModeToggle />
                    <Button>Contact</Button>
                </CardFooter>
            </div>
        </Card>
    )
}
