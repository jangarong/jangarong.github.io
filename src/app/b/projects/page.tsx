import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
    title: 'Jan Garong [B] - Projects',
    // description: 'Read my blog.',
}

function ProjectItem({ href, src }: { href: string, src: string }) {
    return (
        <Link className="w-[200px]" href={href}>
            <Image src={src} alt={src} height={200} width={200} />
        </Link>
    )
}

export default function Page() {
    return (
        <div className="mt-[48px] mx-[24px] mb-[72px]">
            <h1 className="font-semibold text-2xl mb-4 tracking-tighter">List of Projects</h1>
            <div className="mb-8">Click on the following boxes to go to their project page!</div>
            <div className="grid flex flex-col justify-center align-center md:grid-cols-3 gap-4 mb-[32px]">
                <ProjectItem href="/b/projects/zodiactail" src="/assets/b/zodiactail.png" />
                <ProjectItem href="/b/projects/hex" src="/assets/b/hex.png" />
                <ProjectItem href="/b/projects/solidguard" src="/assets/b/solidguard.png" />
                <ProjectItem href="/b/projects/this" src="/assets/b/this.png" />
                <ProjectItem href="/b/projects/stockmarket" src="/assets/b/stock-market-headlines.png" />
                <ProjectItem href="/b/projects/mummyrun" src="/assets/b/mummyrun.png" />
            </div>
        </div>
    )
}
