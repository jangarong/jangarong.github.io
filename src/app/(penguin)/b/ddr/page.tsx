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
            <Header>Dance Dance Revolution</Header>
            <div className="m-[24px]">
                <h1 className="title font-semibold text-2xl tracking-tighter">
                    Quick Facts
                </h1>
                <div className="mb-4">
                    <ul className="list-disc list-inside ml-4">
                        <li>三倍icecream: <a href="https://3icecream.com/profile/trueblue">trueblue</a></li>
                        <li>DDR-CODE: 81388827</li>
                        <li>DANCER NAME: TRUEBLUE (formerly SPENG & JANG)</li>
                    </ul>
                </div>
                <h1 className="title font-semibold text-2xl tracking-tighter">
                    Holy Grails
                </h1>
                <Table className="mb-[25px] mt-[25px]">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Song Name</TableHead>
                            <TableHead>Sanbai Level</TableHead>
                            <TableHead>pprx.gg Spice</TableHead>
                            <TableHead>Money Score</TableHead>
                            <TableHead className="text-right">Screenshot</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow className="bg-[#fff7cc]">
                            <TableCell className="font-medium">Reach The Sky, Without you</TableCell>
                            <TableCell>ESP 14.60</TableCell>
                            <TableCell>10.77</TableCell>
                            <TableCell>997520</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/ddr/14-4.jpeg">Link</a></TableCell>
                        </TableRow>
                        <TableRow className="bg-[#FFD700]">
                            <TableCell className="font-medium">イガク (Igaku)</TableCell>
                            <TableCell>ESP 13.40</TableCell>
                            <TableCell>7.70</TableCell>
                            <TableCell>999640</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/ddr/13-3.jpeg">Link</a></TableCell>
                        </TableRow>
                        <TableRow className="bg-[#FFD700]">
                            <TableCell className="font-medium">人マニア (HITO Mania)</TableCell>
                            <TableCell>ESP 14.35</TableCell>
                            <TableCell>8.96</TableCell>
                            <TableCell>999400</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/ddr/14-7.jpeg">Link</a></TableCell>
                        </TableRow>
                        <TableRow className="bg-[#fff7cc]">
                            <TableCell className="font-medium">MEGALOVANIA</TableCell>
                            <TableCell>ESP 16.30</TableCell>
                            <TableCell>11.09</TableCell>
                            <TableCell>991070</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/ddr/16-0.jpeg">Link</a></TableCell>
                        </TableRow>
                        <TableRow className="bg-[#fff7cc]">
                            <TableCell className="font-medium">Avenger</TableCell>
                            <TableCell>ESP 14.85</TableCell>
                            <TableCell>11.03</TableCell>
                            <TableCell>991340</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/ddr/14-5.jpeg">Link</a></TableCell>
                        </TableRow>
                        <TableRow className="bg-[#fff7cc]">
                            <TableCell className="font-medium">突撃！ガラスのニーソ姫！(Charge! Kneesocks Princess of Glass!)</TableCell>
                            <TableCell>ESP 14.80</TableCell>
                            <TableCell>10.65</TableCell>
                            <TableCell>990530</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/ddr/14-6.jpeg">Link</a></TableCell>
                        </TableRow>
                        <TableRow className="bg-[#fff7cc]">
                            <TableCell className="font-medium">ZETA ~素数の世界と超越者~</TableCell>
                            <TableCell>ESP 15.40</TableCell>
                            <TableCell>10.36</TableCell>
                            <TableCell>994720</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/ddr/15-6.jpeg">Link</a></TableCell>
                        </TableRow>
                        <TableRow className="bg-[#fff7cc]">
                            <TableCell className="font-medium">SABER WING</TableCell>
                            <TableCell>CSP 13.85</TableCell>
                            <TableCell>9.85</TableCell>
                            <TableCell>998460</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/ddr/13-1.jpeg">Link</a></TableCell>
                        </TableRow>
                        <TableRow className="bg-[#fff7cc]">
                            <TableCell className="font-medium">悲報！ワイ！ニート！ (Hihou! Wai! Neet!)</TableCell>
                            <TableCell>ESP 15.30</TableCell>
                            <TableCell>9.46</TableCell>
                            <TableCell>995770</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/ddr/15-0.jpeg">Link</a></TableCell>
                        </TableRow>
                        <TableRow className="bg-[#fff7cc]">
                            <TableCell className="font-medium">ΔMAX</TableCell>
                            <TableCell>DSP 13.85</TableCell>
                            <TableCell></TableCell>
                            <TableCell>993250</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/ddr/13-0.jpeg">Link</a></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div className="flex flex-col items-center justify-center mb-[48px] mt-[24px]">
                    <div className="w-[300px] md:w-[650px] grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-1 gap-2 mb-[24px]">
                        <a href="/assets/b/ddr/15-6.jpeg">
                            <img src="/assets/b/ddr/15-6.jpeg" className="object-cover w-full h-full" />
                        </a>
                        <a href="/assets/b/ddr/14-4.jpeg">
                            <img src="/assets/b/ddr/14-4.jpeg" className="object-cover w-full h-full" />
                        </a>
                        <a href="/assets/b/ddr/13-3.jpeg">
                            <img src="/assets/b/ddr/13-3.jpeg" className="object-cover w-full h-full" />
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
