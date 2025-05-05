import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
} from "@/components/ui/card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { FileTextIcon } from "lucide-react"
import Link from "next/link"

export function InfoMail() {
    return (
        <Card className="md:w-[480px]">
            <div className="flex flex-1 flex-col">
                <div className="flex items-start p-4">
                    <div className="flex items-start gap-4 text-sm">
                        <Avatar>
                            <AvatarImage src={"/assets/magichanics.png"} alt={"Jan Garong"} />
                        </Avatar>
                        <div className="grid gap-1">
                            <div className="font-semibold">Jan Garong</div>
                            <div className="line-clamp-1 text-xs">Re: My Ordinary Website</div>
                        </div>
                    </div>
                    <div className="ml-auto text-xs text-muted-foreground">
                        May 5, 2025
                    </div>
                </div>
                <Separator />
                <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
                    Welcome to my website!
                    <br />
                    <br />
                    If you want to contact me, you can do so through the following platforms!
                    <br />
                    <br />
                    <b>Contact Information</b>
                    <li className="ml-[10pt]">Email: <a className="text-[purple]" href="mailto:jan.garong@mail.utoronto.ca">jan.garong@alumni.utoronto.ca</a></li>
                    <li className="ml-[10pt]">LinkedIn: <a className="text-[purple]" href="https://linkedin.com/in/jangarong">jangarong</a></li>
                    <li className="ml-[10pt]">GitHub: <a className="text-[purple]" href="https://github.com/jangarong">jangarong</a></li>
                    <li className="ml-[10pt]">PGP Key: <a className="text-[purple]" href="/6BDFD428487D50AC40774CB4AC382728823BDAEC.asc">6BDFD428</a></li>
                    <br />
                    Sadly this website is under construction. Thinking of opening up new pages. In the meantime, feel
                    free to take a look at my resume! I have attached it to the bottom of this card.
                    <br />
                    <br />
                    Best,
                    <br />
                    Jan
                </div>
                <Separator className="mt-auto" />
                <div className="p-4">
                <Link href="/resume.pdf">
                        <Button className="w-full" >
                            <FileTextIcon /> Download Resume
                        </Button>
                    </Link>
                </div>
            </div>
        </Card>
    )
}