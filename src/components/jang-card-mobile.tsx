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

export function JangCardMobile() {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <div className="flex flex-col items-center justify-between">
                    <Image
                        className="dark:invert p-4"
                        src="/jang.svg"
                        alt="Next.js logo"
                        width={180}
                        height={42}
                        priority
                    />
                    <CardTitle className="p-2">Jan Garong</CardTitle>
                    <CardDescription>Cybersecurity's Software Developer</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <Teams />
            </CardContent>
            <CardFooter className="flex justify-between">
                <ModeToggle />
                <Button>Contact</Button>
            </CardFooter>
        </Card>
    )
}
