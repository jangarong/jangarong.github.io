import Link from "next/link";
import "./globals.css";
import Header from "@/components/b/header";
import BFeatured from "@/components/b-featured";
import PersonalCard from "@/components/personal-card";
import TTCLine1 from "@/components/subway/ttc-line-1";

export const metadata = {
    title: 'Jan Garong',
    // description: 'Read my blog.',
}

export default function Page() {
    return (
        <div className="min-h-[100vh]">
            <TTCLine1 items={[
                <div>wan</div>,
                <div>too</div>,
                <div>tree</div>,
            ]} />
        </div>
    )
}
