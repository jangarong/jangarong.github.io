import Image from 'next/image'

export const metadata = {
    title: 'Jan Garong',
    // description: 'Read my blog.',
}

export default function Page() {
    return (
        <div className="mt-[48px] mx-[24px] mb-[72px] min-h-[100vh]">
            <h1 className="font-semibold text-2xl mb-4 tracking-tighter">Creative Works</h1>
            <div className="mb-4">
               TODO: Please add proper slideshow styling and old website designs.
               <Image src="/assets/b/art/magichanics.png" alt="magichanics" width={300} height={300} />
               <Image src="/assets/b/art/egg-carton.png" alt="eggcarton"  height={800} width={400} />
            </div>
        </div>
    )
}
