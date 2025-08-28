import BFeatured from "@/components/b-featured";
import "./globals.css";
import PersonalCard from "@/components/personal-card";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Jan Garong [B]',
  // description: 'Read my blog.',
}

export default function Page() {
  return (
    <div className="min-h-[100vh] bg-[#fdfad6]">
      <div>
        <div className="p-8">
          Here is where I post content that may
          not fit with my profession. This includes personal coding projects, posts on my whereabouts
          (sometimes engineering related), and half-decent drawings. If you are looking for my more professional work in the software cybersecurity field, please see <Link href="/" className="inline-block" >
            Side A
          </Link>.
        </div>
        <BFeatured />
        <PersonalCard />
        {/* <div className="p-8 font-semibold">
          Note: This website is under construction, and I am currently quite busy with work to continue maintaining this website in the next month or 2. Expect bugs!
        </div> */}
        <div className="p-8 flex justify-center">
          <p className="w-[400px] grid grid-cols-3 grid-rows-2 gap-1 items-center justify-items-center">
            <a href="https://www.deviantart.com/maxiswhat/art/computer-nerd-stamp-195419460"><Image src="/assets/b/stamps/0.gif" alt="stamp0" width={100} height={55} className="mb-[25px]" /></a>
            <a href="https://www.deviantart.com/drayuu/art/Flash-User-STAMP-374456389"><Image src="/assets/b/stamps/1.png" alt="stamp0" width={100} height={55} className="mb-[25px]" /></a>
            <a href="https://www.deviantart.com/kiwano0/art/Procreate-app-Stamp-474612379"><Image src="/assets/b/stamps/2.png" alt="stamp0" width={100} height={55} className="mb-[25px]" /></a>
            <a href="https://www.deviantart.com/hormonours/art/Web-Developer-stamp-586619374"><Image src="/assets/b/stamps/3.png" alt="stamp0" width={100} height={55} className="mb-[25px]" /></a>
            <a href="https://www.deviantart.com/drake1/art/Google-Stamp-248241100"><Image src="/assets/b/stamps/4.gif" alt="stamp0" width={100} height={55} className="mb-[25px]" /></a>
            <a href="https://www.deviantart.com/sushibeth/art/Club-Penguin-Stamp-112706392"><Image src="/assets/b/stamps/5.gif" alt="stamp0" width={100} height={55} className="mb-[25px]" /></a>
          </p>
        </div>
        <div className="p-8 flex items-center text-center flex-col">
          <b>Computer Science Class of 2023 Graduate from the</b>
          <a href="https://www.utsc.utoronto.ca/admissions/programs/computer-science"><Image src="/assets/b/utsc.png" alt="utsc" width={300} height={100}/></a>
        </div>
      </div>
    </div>
  )
}
