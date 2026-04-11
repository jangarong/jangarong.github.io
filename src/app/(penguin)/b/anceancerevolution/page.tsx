import Header from '@/components/b/header'
import Image from 'next/image'
import Link from 'next/link'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export const metadata = {
    title: 'Jan Garong [B] - Dance Dance Revolution',
    // description: 'Read my blog.',
}

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
                            <TableCell>ESP 16.30</TableCell>
                            <TableCell>991070</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/anceancerevolution/16-0.jpeg">Link</a></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">悲報！ワイ！ニート！</TableCell>
                            <TableCell>ESP 15.30</TableCell>
                            <TableCell>995770</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/anceancerevolution/15-0.jpeg">Link</a></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">ハイテックトキオ</TableCell>
                            <TableCell>ESP 15.25</TableCell>
                            <TableCell>991520</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/anceancerevolution/15-2.jpg">Link</a></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">ラビットホール</TableCell>
                            <TableCell>ESP 15.20</TableCell>
                            <TableCell>990460</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/anceancerevolution/15-1.jpeg">Link</a></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Death By Glamour</TableCell>
                            <TableCell>ESP 14.65</TableCell>
                            <TableCell>992740</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/anceancerevolution/14-0.jpeg">Link</a></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">患部で止まってすぐ溶ける～狂気の優曇華院</TableCell>
                            <TableCell>ESP 14.65</TableCell>
                            <TableCell>990000</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/anceancerevolution/14-1.jpeg">Link</a></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">人マニア</TableCell>
                            <TableCell>ESP 14.35</TableCell>
                            <TableCell>998020</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/anceancerevolution/14-2.jpeg">Link</a></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">ΔMAX</TableCell>
                            <TableCell>DSP 13.85</TableCell>
                            <TableCell>993250</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/anceancerevolution/13-0.jpeg">Link</a></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">SABER WING</TableCell>
                            <TableCell>CSP 13.85</TableCell>
                            <TableCell>991430</TableCell>
                            <TableCell className="text-right"><a href="/assets/b/anceancerevolution/13-1.jpeg">Link</a></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div className="flex flex-col items-center justify-center mb-[48px] mt-[24px]">
                    <div className="w-[300px] md:w-[650px] grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-1 gap-2 mb-[24px]">
                        <a href="/assets/b/anceancerevolution/16-0.jpeg">
                            <img src="/assets/b/anceancerevolution/16-0.jpeg" className="object-cover w-full h-full" />
                        </a>
                        <a href="/assets/b/anceancerevolution/14-2.jpeg">
                            <img src="/assets/b/anceancerevolution/14-2.jpeg" className="object-cover w-full h-full" />
                        </a>
                        <a href="/assets/b/anceancerevolution/13-1.jpeg">
                            <img src="/assets/b/anceancerevolution/13-1.jpeg" className="object-cover w-full h-full" />
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
                            <TableCell className="font-medium">Run It Back Series 1</TableCell>
                            <TableCell>12.55 - 14.50</TableCell>
                            <TableCell>2nd in Group 6, 22nd Overall</TableCell>
                            <TableCell className="text-right"><a href="https://www.start.gg/tournament/the-run-it-back-series/event/the-ribs/brackets/2250716/3262634">Group 6 Bracket</a></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <div className="flex flex-col justify-center align-center items-center text-center">
                    <Image src="/assets/b/anceancerevolution/ribs.JPG" width={300} height={150} alt={"group photo - ribs"} />
                    <div className="mt-[8px]">Me at my first DDR Tournament with friends from Stonestown B)</div>
                </div>
            </div>
        </div>
    )
}
