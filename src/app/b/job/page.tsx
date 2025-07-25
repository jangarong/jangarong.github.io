import { WorksTree } from '@/components/works-tree'
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
            <div className="mb-8">Work history, copied from v10a. Yeah, it doesn't fit with the aesthetics of the website but it may be useful in the future when I change my website for the 847523th time.</div>
            <WorksTree />
        </div>
    )
}
