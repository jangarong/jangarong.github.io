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
              <div className="text-center mt-[4px]">Side B of my ordinary life.</div>
            </div>
          </div>
        </div>
        <div className="navbar-penguin h-[36px] flex">
          <a href="/" className="border-r border-black pl-[16px] pr-[16px] pt-[6px] h-[100%] flex flex-col">
            SIDE A
          </a>
          <a href="/blog" className="border-r border-black pl-[16px] pr-[16px] pt-[6px] h-[100%] flex flex-col">
            WHAT'S NEW
          </a>
          <a href="/software" className="border-r border-black pl-[16px] pr-[16px] pt-[6px] h-[100%] flex flex-col">
            SOFTWARE
          </a>
          <a href="/art" className="text-gray-400 pointer-events-none border-r border-black pl-[16px] pr-[16px] pt-[6px] h-[100%] flex flex-col">
            ART
          </a>
          <a href="/bayarea" className="text-gray-400 pointer-events-none border-r border-black pl-[16px] pr-[16px] pt-[6px] h-[100%] flex flex-col">
            SAN FRANCISCO BAY AREA
          </a>
          <a href="" className="text-gray-400 pointer-events-none border-r border-black pl-[16px] pr-[16px] pt-[6px] h-[100%] flex flex-col">
            ARCHIVE
          </a>
        </div>
        <div className="mt-[48px] mx-[24px]">
          <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
          <BlogPosts />
        </div>
      </div>
    </div>
  )
}
