import type { Metadata } from "next";
import localFont from "next/font/local";
import Spotlight from "@/components/spotlight";
import "./globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jan Garong",
  description: "My ordinary website."
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:dark`}
      >
        <Spotlight>
          <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 md:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start pb-[64px]">
              {children}
            </div>
          </div>
        </Spotlight>
      </body>
    </html>
  );
}
