import Link from "next/link";
import "./globals.css"
import Image from "next/image";

export const metadata = {
    title: 'Jan Garong',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-[100%] min-h-[100%] flex flex-row justify-center align-center bg-[#eeeeee]">
            <div className="base">
                <div className="base-banner pt-[48px]">
                    <div className="p-[24px] flex flex-col align-center">
                        <div className="flex flex-col align-center justify-center w-[250px]">
                            <Image src="/assets/jang-penguin.png" alt="JanG." width={250} height={50} />
                            <div className="text-center mt-[4px]">Side B of my ordinary website.</div>
                        </div>
                    </div>
                </div>
                <div className="navbar-penguin flex flex-wrap">
                    <Link href="/" className="text-nowrap border-b border-r border-black pl-[16px] pr-[16px] py-[6px] h-[100%] flex flex-col">
                        SIDE A
                    </Link>
                    <Link href="/b" className="text-nowrap border-b border-r border-black pl-[16px] pr-[16px] py-[6px] h-[100%] flex flex-col">
                        HOME
                    </Link>
                    <Link href="/b/log" className="text-nowrap border-b border-r border-black pl-[16px] pr-[16px] py-[6px] h-[100%] flex flex-col">
                        WHAT&apos;S NEW
                    </Link>
                    <Link href="/b/projects" className="text-nowrap border-b border-r border-black pl-[16px] pr-[16px] py-[6px] h-[100%] flex flex-col">
                        WORKS
                    </Link>
                    <Link href="/b/drawings" className="disabled text-nowrap border-b text-gray-400 pointer-events-none border-r border-black pl-[16px] pr-[16px] py-[6px] h-[100%] flex flex-col">
                        CREATIVE
                    </Link>
                    <Link href="/b/archive" className="disabled text-nowrap border-b text-gray-400 pointer-events-none border-r border-black pl-[16px] pr-[16px] py-[6px] h-[100%] flex flex-col">
                        ARCHIVE
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
    )
}
