import Image from 'next/image'
import Link from 'next/link'

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
                <ProjectItem href="/b/zodiactail" src="/assets/b/zodiactail.png" />
                <ProjectItem href="" src="/assets/b/hex.png" />
                <ProjectItem href="https://github.com/sit-n-coding/solidguard" src="/assets/b/solidguard.png" />
                <ProjectItem href="https://www.kaggle.com/code/magichanics/amateur-hour-using-headlines-to-predict-stocks" src="/assets/b/stock-market-headlines.png" />
            </div>
            <div className="mb-8 mb-[400px]">If you are looking for my more professional work at big corporations, please see Side A.</div>
        </div>
    )
}
