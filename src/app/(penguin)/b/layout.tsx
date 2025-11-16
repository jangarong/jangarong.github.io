import InternalBanner from "@/components/b/internal-banner";
import "./globals.css";
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
                <div className="w-[100%] min-h-[100%] flex flex-row justify-center align-center">
                    <div className={"bgContainer"}>
                        <div className="bgHeroContainer">
                            <div className={"bgHero1"}></div>
                            <div className={"bgHero2"}></div>
                        </div>
                        <div className={"bgBody"}></div>
                    </div>
                    <InternalBanner />
                    <div className="base">
                        <Hero />
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
