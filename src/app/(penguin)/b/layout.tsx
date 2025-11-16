import Link from "next/link";
import "./globals.css"
import Image from "next/image";
import Hero from "@/components/b/hero";

export const metadata = {
    title: 'Jan Garong',
    robots: {
        index: false
    }
}

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className="">
            <body className="">
                <div className="w-[100%] min-h-[100%] flex flex-row justify-center align-center bg-[#eeeeee]">
                    <div className="base">
                        <Hero />
                        <div className="navbar-penguin flex flex-wrap">
                            <Link href="/b" className="text-nowrap border-b border-r border-black pl-[16px] pr-[16px] py-[6px] h-[100%] flex flex-col">
                                HOME
                            </Link>
                            <Link href="/b/log" className="text-nowrap border-b border-r border-black pl-[16px] pr-[16px] py-[6px] h-[100%] flex flex-col">
                                WHAT&apos;S NEW
                            </Link>
                            <Link href="/b/projects" className="text-nowrap border-b border-r border-black pl-[16px] pr-[16px] py-[6px] h-[100%] flex flex-col">
                                PROJECTS
                            </Link>
                            <Link href="/b/art" className=" text-nowrap border-b border-r border-black pl-[16px] pr-[16px] py-[6px] h-[100%] flex flex-col">
                                SKETCHES
                            </Link>
                        </div>
                        <div>
                            {children}
                        </div>
                        <footer className="p-12 text-center text-sm bg-[#fdfad6]">
                            Side B website code and design by me (jangarong). Inspired by clubpenguin.com.
                        </footer>
                    </div>
                </div>
            </body>
        </html>

    )
}
