import Image from "next/image";
import Link from "next/link";

function BFeaturedItem({ children, src, title }: { children: React.ReactNode | string, src: string, title: string }) {
    return (
        <div className="flex flex-row mb-[32px]">
            <div className="w-[280px] z-10 pl-[20px]">
                <Image src={src} alt={src} width={200} height={150} />
            </div>
            <div className="w-[100%]">
                <div className="z-1 ml-[-209px] pl-[240px] bg-[#ffcc00] mt-[32px] font-[acme-bold]">{title}</div>
                <div className="m-4 ml-8">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default function BFeatured() {
    return (
        <div className="w-[100%] flex flex-col">
            <BFeaturedItem src="/assets/b/blog.png" title="What's New">
                <div>
                    This is where I post very infrequently about anything.
                </div>
                <div className="mt-[16px]">
                    <Link href="/b/log">View posts here!</Link>
                </div>
            </BFeaturedItem>
            <BFeaturedItem src="/assets/b/zodiactail.png" title="Zodiac Tail: A Game of Cat and Mouse">
                <div>
                    Join the Zodiac Tail animals on this puzzle platformer manipulating time and space for the Jade Talisman!
                    Art direction done by Amy Li.
                </div>
                <div className="mt-[16px]">
                    <Link href="/b/zodiactail">Click here to play!</Link>
                </div>
            </BFeaturedItem>
            <BFeaturedItem src="/assets/b/solidguard.png" title="SolidGuard">
                Prototype that audits smart contracts' open sourced code on the blockchain for newly discovered vulnerabilities.
                <b>This does not work anymore post-merge, but you can check the source code for reference!</b>
                <div className="mt-[16px]">
                    <Link href="https://github.com/sit-n-coding/solidguard">GitHub Repository</Link>
                </div>
            </BFeaturedItem>
        </div>
    )
}
