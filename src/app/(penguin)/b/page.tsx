import BFeatured from "@/components/b-featured";
import "./globals.css";
import PersonalCard from "@/components/personal-card";
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
      </div>
    </div>
  )
}
