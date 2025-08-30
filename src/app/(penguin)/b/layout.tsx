import Link from "next/link";
import "./globals.css"
import Image from "next/image";

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
                        <div className="base-banner pt-[48px] flex flex-row justify-between w-[100%]">
                            <div className="flex flex-col align-center justify-end">
                                <div className="flex flex-col align-center justify-center w-[250px] p-[24px]">
                                    <Image src="/assets/jang-penguin.png" alt="JanG." width={250} height={50} />
                                    <div className="text-center mt-[4px]">Side B of my website.</div>
                                </div>
                            </div>
                            <div className="hidden sm:block flex flex-col align-center justify-end">
                                <Image src="/assets/pengdesk.png" alt="peng" className="mr-[32px]" width={250} height={100} />
                            </div>
                        </div>
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
                            <Link href="/b/ack" className="text-nowrap border-b border-r border-black pl-[16px] pr-[16px] py-[6px] h-[100%] flex flex-col">
                                COOL PEOPLE
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
