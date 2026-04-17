import Header from '@/components/b/header'
import Image from 'next/image'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export const metadata = {
    title: 'Jan Garong [B] - Dance Dance Revolution',
}
/* eslint-disable @next/next/no-img-element, jsx-a11y/alt-text, react/no-unescaped-entities */

export default function Page() {
    return (
        <div>
            <Header>Dance Dance Revolution - SPENG</Header>
            <div className="m-[24px]">
                <h1 className="title font-semibold text-2xl tracking-tighter">
                    Holy Grails
                </h1>
                <Table className="mb-[25px] mt-[25px]">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Song Name</TableHead>
                            <TableHead>Sanbai Level</TableHead>
                            <TableHead>Money Score</TableHead>
                            <TableHead className="text-right">Screenshot</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">MEGALOVANIA</TableCell>
                            <TableCell>CSP 18.10</TableCell>
                            <TableCell>935910</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/ddr/18-0.jpeg">Link</a></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">True Blue</TableCell>
                            <TableCell>CSP 17.10</TableCell>
                            <TableCell>940260</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/ddr/17-0.jpeg">Link</a></TableCell>
                        </TableRow>
                        <TableRow className="bg-[#fff7cc]">
                            <TableCell className="font-medium">MEGALOVANIA</TableCell>
                            <TableCell>ESP 16.30</TableCell>
                            <TableCell>991070</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/ddr/16-0.jpeg">Link</a></TableCell>
                        </TableRow>
                        <TableRow className="bg-[#fff7cc]">
                            <TableCell className="font-medium">BRE∀K DOWN!</TableCell>
                            <TableCell>ESP 15.35</TableCell>
                            <TableCell>992370</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/ddr/15-3.jpeg">Link</a></TableCell>
                        </TableRow>
                        <TableRow className="bg-[#fff7cc]">
                            <TableCell className="font-medium">悲報！ワイ！ニート！ (HEY! HO! NEET!)</TableCell>
                            <TableCell>ESP 15.30</TableCell>
                            <TableCell>995770</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/ddr/15-0.jpeg">Link</a></TableCell>
                        </TableRow>
                        <TableRow className="bg-[#fff7cc]">
                            <TableCell className="font-medium">Avenger</TableCell>
                            <TableCell>ESP 14.85</TableCell>
                            <TableCell>991340</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/ddr/14-5.jpeg">Link</a></TableCell>
                        </TableRow>
                        <TableRow className="bg-[#fff7cc]">
                            <TableCell className="font-medium">患部で止まってすぐ溶ける～狂気の優曇華院 (unofficially aka "Overdrive")</TableCell>
                            <TableCell>ESP 14.65</TableCell>
                            <TableCell>990000</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/ddr/14-1.jpeg">Link</a></TableCell>
                        </TableRow>
                        <TableRow className="bg-[#fff7cc]">
                            <TableCell className="font-medium">Reach The Sky, Without you</TableCell>
                            <TableCell>ESP 14.60</TableCell>
                            <TableCell>990670</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/ddr/14-4.jpeg">Link</a></TableCell>
                        </TableRow>
                        <TableRow className="bg-[#fff7cc]">
                            <TableCell className="font-medium">SABER WING</TableCell>
                            <TableCell>CSP 13.85</TableCell>
                            <TableCell>991430</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/ddr/13-1.jpeg">Link</a></TableCell>
                        </TableRow>
                        <TableRow className="bg-[#fff7cc]">
                            <TableCell className="font-medium">ΔMAX</TableCell>
                            <TableCell>DSP 13.85</TableCell>
                            <TableCell>993250</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/ddr/13-0.jpeg">Link</a></TableCell>
                        </TableRow>
                        <TableRow className="bg-[#FFD700]">
                            <TableCell className="font-medium">ヴァンパイア (Vampire)</TableCell>
                            <TableCell>ESP 13.00</TableCell>
                            <TableCell>999420</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/ddr/13-2.jpg">Link</a></TableCell>
                        </TableRow>
                        <TableRow className="bg-[#fff7cc]">
                            <TableCell className="font-medium">Heaven is a '57 metallic gray ~gimmix~</TableCell>
                            <TableCell>ESP 12.80</TableCell>
                            <TableCell>991920</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/ddr/12-0.jpeg">Link</a></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div className="flex flex-col items-center justify-center mb-[48px] mt-[24px]">
                    <div className="w-[300px] md:w-[650px] grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-1 gap-2 mb-[24px]">
                        <a href="/assets/b/ddr/16-0.jpeg">
                            <img src="/assets/b/ddr/16-0.jpeg" className="object-cover w-full h-full" />
                        </a>
                        <a href="/assets/b/ddr/14-5.jpeg">
                            <img src="/assets/b/ddr/14-5.jpeg" className="object-cover w-full h-full" />
                        </a>
                        <a href="/assets/b/ddr/13-1.jpeg">
                            <img src="/assets/b/ddr/13-1.jpeg" className="object-cover w-full h-full" />
                        </a>
                    </div>
                </div>
                <h1 className="title font-semibold text-2xl tracking-tighter">
                    Tournaments
                </h1>
                <Table className="mb-[25px] mt-[25px]">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Tournament</TableHead>
                            <TableHead>Sanbai Level</TableHead>
                            <TableHead>Placement</TableHead>
                            <TableHead className="text-right">Link</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Run It Back Series 1 - Group 6</TableCell>
                            <TableCell>12.55 - 14.50</TableCell>
                            <TableCell>2nd</TableCell>
                            <TableCell className="text-right"><a href="https://www.start.gg/tournament/the-run-it-back-series/event/the-ribs/brackets/2250716/3262634">Group 6 Bracket</a></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <div className="flex flex-col justify-center align-center items-center text-center">
                    <Image src="/assets/b/ddr/ribs.JPG" width={300} height={150} alt={"group photo - ribs"} />
                    <div className="mt-[8px]">Me at my first DDR Tournament with friends from Stonestown B)</div>
                </div>
            </div>
        </div>
    )
}
