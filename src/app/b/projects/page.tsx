import Image from 'next/image'

export const metadata = {
    title: 'Jan Garong',
    // description: 'Read my blog.',
}

export default function Page() {
    return (
        <div className="mt-[48px] mx-[24px] mb-[72px]">
            <Image src="/assets/b/zodiactail.png" alt="zodiactail.png" height={200} width={200} />
            <Image src="/assets/b/solidguard.png" alt="solidguard.png" height={200} width={200} />
            <Image src="/assets/b/stock-market-headlines.png" alt="stock-market-headlines.png" height={200} width={200} />
        </div>
    )
}
