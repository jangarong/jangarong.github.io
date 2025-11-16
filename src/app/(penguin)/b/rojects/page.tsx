import Header from '@/components/b/header'
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
        <div>
            <Header>Projects</Header>
            <div className="mt-[24px] mx-[24px] mb-[72px]">
                <div className="mb-8">Click on the following boxes to go to their project page!</div>
                <div className="grid flex flex-col justify-center align-center md:grid-cols-3 gap-4 mb-[32px]">
                    <ProjectItem href="/b/rojects/this" src="/assets/b/this.png" />
                    <ProjectItem href="/b/rojects/psa" src="/assets/b/psa.png" />
                    <ProjectItem href="/b/rojects/zodiactail" src="/assets/b/zodiactail.png" />
                    <ProjectItem href="/b/rojects/solidguard" src="/assets/b/solidguard.png" />
                    <ProjectItem href="/b/rojects/grr" src="/assets/b/grr.png" />
                    <ProjectItem href="/b/rojects/stockmarket" src="/assets/b/stock-market-headlines.png" />
                    <ProjectItem href="/b/rojects/mummyrun" src="/assets/b/mummyrun.png" />
                </div>
            </div>
        </div>
    )
}
