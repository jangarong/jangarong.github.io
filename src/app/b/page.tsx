import BFeatured from "@/components/b-featured";
import "./globals.css";
import PersonalCard from "@/components/personal-card";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Jan Garong',
  // description: 'Read my blog.',
}

export default function Page() {
  return (
    <div className="min-h-[100vh] bg-[#fdfad6]">
      <div>
        <div className="p-8">
          Welcome to Side B of my monolithic website. Here is where I post content that may
          not fit with my profession. This includes personal coding projects, posts on my whereabouts
          (sometimes engineering related), and half-decent drawings.
        </div>
        <BFeatured />
        <PersonalCard />
        {/* <div className="p-8 font-semibold">
          Note: This website is under construction, and I am currently quite busy with work to continue maintaining this website in the next month or 2. Expect bugs!
        </div> */}
        <p className="p-8">
          If you're looking for my professional security software work at companies like
          <Image src="/assets/b/Google.png" className="inline-block ml-[4px]" alt="Google" width={75} height={25} /> and
          <Image src="/assets/b/trendmicro.svg"  className="inline-block"  alt="Trend Micro" width={100} height={50} />, see the following page:
          <Link href="/" className="inline-block" >
            Side A
          </Link>
        </p>
      </div>
    </div>
  )
}
