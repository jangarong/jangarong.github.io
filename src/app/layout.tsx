import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jan Garong",
  description: "My ordinary website."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-[100vh] w-[100%]">
          {/* <div className="absolute w-[100%]">
            <Navbar />
          </div> */}
          <div className="h-[100%] min-h-[800px]">
            {children}
            {/* <footer className="bg-black text-white p-12 text-center">
              Website code and design by me (jangarong).
            </footer> */}
          </div>
        </div>
      </body>
    </html>
  );
}
