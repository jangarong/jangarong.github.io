import BFeatured from "@/components/b-featured";
import "./globals.css";
import PersonalCard from "@/components/personal-card";

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
        <div className="p-8 font-semibold">
          Note: This website is under construction and is a work in progress.
        </div>
      </div>
    </div>
  )
}
