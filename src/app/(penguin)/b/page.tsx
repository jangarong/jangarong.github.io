import BFeatured from "@/components/b-featured";
import "./globals.css";
import PersonalCard from "@/components/personal-card";
import Link from "next/link";
import Header from "@/components/b/header";

export const metadata = {
  title: 'Jan Garong [B]',
  // description: 'Read my blog.',
}

export default function Page() {
  return (
    <div className="min-h-[100vh]">
<Header>Hello world!</Header>
    </div>
  )
}
