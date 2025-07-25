import Image from 'next/image'

export const metadata = {
    title: 'Jan Garong [B] - Sketches',
    // description: 'Read my blog.',
}

export default function Page() {
    return (
        <div className="mt-[48px] mx-[24px] mb-[72px] min-h-[100vh]">
            <h1 className="font-semibold text-2xl mb-4 tracking-tighter">Sketchbook</h1>
            <div className="mb-4 flex flex-col items-center gap-8 text-center">
                <div>
                    All drawings posted here are in reverse chronological order.
                </div>
                <Image src="/assets/b/art/tori-w-tims.png" alt="tori-w-tims" height={300} width={300} />
                <div>Tori. She&apos;s from the UofT personifications from 2020.</div>
                <Image src="/assets/b/art/mao.png" alt="mao" height={300} width={300} />
                <div>Mao from <a href="/b/projects/zodiactail">Zodiac Tail</a>.</div>
                <Image src="/assets/b/art/standing.png" alt="standing" height={320} width={210} />
                <div>A random sketch I drew in 2024.</div>
                <Image src="/assets/b/art/egg-carton.png" alt="eggcarton" height={600} width={400} />
                <div>Drew an egg carton during my drawing class in 2023.</div>
                <Image src="/assets/b/art/magichanics.png" alt="magichanics" width={300} height={300} />
                <div>Profile picture since 2019.</div>
                <Image src="/assets/b/art/pinstripe.png" alt="pinstripe" width={400} height={300} />
                <div>Character I made using my Wacom tablet in 2017.</div>
            </div>
        </div>
    )
}
