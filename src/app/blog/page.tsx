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
            <Image src="./assets/jang-penguin.png" alt="JanG." width={250} height={50} />
            <div className="color-white">Developer Blog</div>
          </div>
        </div>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
        <BlogPosts />
      </div>
    </div>
  )
}
