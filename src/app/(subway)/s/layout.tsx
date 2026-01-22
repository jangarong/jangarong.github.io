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
        <html className="dark">
            <body className="">
                  {children}
            </body>
        </html>

    )
}
