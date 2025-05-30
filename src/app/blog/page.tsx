import { BlogPosts } from '@/components/blog/posts'
import "./globals.css"
import Image from "next/image";

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <div className="w-[100%] h-[100%] flex flex-row justify-center align-center">
      <div className="base">
        <div className="base-banner pt-[48px]">
          <div className="p-[24px] flex flex-col align-center">
            <div className="flex flex-col align-center justify-center w-[250px]">
              <Image src="./assets/jang-penguin.png" alt="JanG." width={250} height={50} />
              <div className="text-center mt-[4px]">My ordinary blog.</div>
            </div>
          </div>
        </div>
        <div className="navbar-penguin h-[36px] flex">
          <a href="/" className="border-r border-black pl-[16px] pr-[16px] pt-[6px] h-[100%] flex flex-col">
            HOME
          </a>
          <a href="/blog" className="border-r border-black pl-[16px] pr-[16px] pt-[6px] h-[100%] flex flex-col">
            WHAT'S NEW
          </a>
          <a href="/blog/games" className="border-r border-black pl-[16px] pr-[16px] pt-[6px] h-[100%] flex flex-col">
            GAMES
          </a>
          <a href="/blog/art" className="text-gray-400 pointer-events-none border-r border-black pl-[16px] pr-[16px] pt-[6px] h-[100%] flex flex-col">
            ART
          </a>
          <a href="/blog/bayarea" className="text-gray-400 pointer-events-none border-r border-black pl-[16px] pr-[16px] pt-[6px] h-[100%] flex flex-col">
            SAN FRANCISCO BAY AREA
          </a>
        </div>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
        <BlogPosts />
      </div>
    </div>
  )
}
