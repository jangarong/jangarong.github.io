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
        <div className="w-[100%] min-h-[100%] flex flex-row justify-center align-center">
            <div className="base">
                <div className="base-banner pt-[48px]">
                    <div className="p-[24px] flex flex-col align-center">
                        <div className="flex flex-col align-center justify-center w-[250px]">
                            <Image src="/assets/jang-penguin.png" alt="JanG." width={250} height={50} />
                            <div className="text-center mt-[4px]">Side B of my ordinary life.</div>
                        </div>
                    </div>
                </div>
                <div className="navbar-penguin flex flex-wrap">
                    <a href="/" className="text-nowrap border-b border-r border-black pl-[16px] pr-[16px] py-[6px] h-[100%] flex flex-col">
                        SIDE A
                    </a>
                    <a href="/blog" className="text-nowrap border-b border-r border-black pl-[16px] pr-[16px] py-[6px] h-[100%] flex flex-col">
                        WHAT'S NEW
                    </a>
                    <a href="/software" className="text-nowrap border-b border-r border-black pl-[16px] pr-[16px] py-[6px] h-[100%] flex flex-col">
                        SOFTWARE
                    </a>
                    <a href="/art" className="text-nowrap border-b text-gray-400 pointer-events-none border-r border-black pl-[16px] pr-[16px] py-[6px] h-[100%] flex flex-col">
                        ART
                    </a>
                    <a href="" className="text-nowrap border-b text-gray-400 pointer-events-none border-r border-black pl-[16px] pr-[16px] py-[6px] h-[100%] flex flex-col">
                        ARCHIVE
                    </a>
                </div>
                <div className="mt-[48px] mx-[24px]">
                    {children}
                </div>
                <footer className="p-12 text-center text-sm">
                    Side B website code and design by me (jangarong). Inspired by clubpenguin.com.
                </footer>
            </div>
        </div>
    )
}
