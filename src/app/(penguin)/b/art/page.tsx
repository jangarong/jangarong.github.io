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
                <div className="flex justify-center space-x-0">
                    <Image src="/assets/b/art/ghost_alice2.png" alt="alice" height={180} width={180} />
                    <Image src="/assets/b/art/ghost_alice.png" alt="alice" height={180} width={180} />
                </div>
                <div>Ghost character I hope to include in future games.</div>
                <Image src="/assets/b/art/mao.png" alt="mao" height={300} width={300} />
                <div>Mao from <a href="/b/projects/zodiactail">Zodiac Tail</a>, drawn in 2024.</div>
                <Image src="/assets/b/art/egg-carton.png" alt="eggcarton" height={600} width={400} />
                <div>Drew an egg carton during my drawing class in 2023.</div>
                <Image src="/assets/b/art/magichanics.png" alt="magichanics" width={300} height={300} />
                <div>Profile picture since 2019.</div>
                <Image src="/assets/b/art/eye.png" alt="eye" width={400} height={300} />
                <div>Drew this in one of my high school art classes.</div>
                <Image src="/assets/b/art/fist.png" alt="fist" width={300} height={400} />
                <div>Drew this in one of my high school art classes.</div>
                <Image src="/assets/b/art/pinstripe.png" alt="pinstripe" width={400} height={300} />
                <div>Character I made using my Wacom tablet in 2017.</div>
            </div>
        </div>
    )
}
