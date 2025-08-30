import type { Metadata } from "next";
import localFont from "next/font/local";
import Spotlight from "@/components/spotlight";
import "./globals.css";
import RGBCardMobile from "@/components/rgb-card-mobile";
import JangCardMobileHeader from "@/components/jang-card-mobile-header";
import { TheWorld } from "@/components/the-world";
import JangCardMobileFooter from "@/components/jang-card-mobile-footer";
import DrawerNoJS from "@/components/drawer-no-js";

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
        <div className="w-[100%] h-[100vh] absolute z-30 flex flex-col flex-end">
          <DrawerNoJS>
            {children}
          </DrawerNoJS>
        </div>
        <div className="bg-black w-[100%] h-[100vh] absolute z-20 opacity-50">
        </div>
        <div className="flex w-full justify-center">
          <Spotlight>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 md:p-20 font-[family-name:var(--font-geist-sans)]">
              <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start pb-[64px]">
                <RGBCardMobile className="" header={<JangCardMobileHeader />} body={
                  <div className="dark:invert">
                    <TheWorld />
                  </div>
                } footer={<JangCardMobileFooter />} width={350} height={600} />
              </div>
            </div>
          </Spotlight>
        </div>
      </body>
    </html>
  );
}
