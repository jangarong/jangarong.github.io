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
import { ChevronRight } from "lucide-react"
import { CarouselItem } from "./ui/carousel"
import { TeamDrawer } from "./team-drawer"

interface TeamProps {
    company: string;
    logo: string;
    description: string;
    enabled: boolean;
}

export function TeamCard({ company, logo, description, enabled }: TeamProps) {
    return (
        <div className="p-1">
            <Card>
                <CardContent className="flex flex-col items-center aspect-square justify-center p-6">
                    <Image
                        className="dark:invert p-4"
                        src={logo}
                        alt={company}
                        width={300}
                        height={300}
                        priority
                    />
                    <CardDescription>{description}</CardDescription>
                </CardContent>
                <CardFooter className="-mt-12 flex justify-end">
                    <TeamDrawer />
                </CardFooter>
            </Card>
        </div>
    )
}
