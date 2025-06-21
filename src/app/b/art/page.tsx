import Image from 'next/image'

export const metadata = {
    title: 'Jan Garong',
    // description: 'Read my blog.',
}

export default function Page() {
    return (
        <div className="mt-[48px] mx-[24px] mb-[72px] min-h-[100vh]">
            <h1 className="font-semibold text-2xl mb-4 tracking-tighter">Sketchbook</h1>
            WIP Please style this page
            <div className="mb-4 flex flex-col items-center gap-8">
               <Image src="/assets/b/art/magichanics.png" alt="magichanics" width={300} height={300} />
               <Image src="/assets/b/art/egg-carton.png" alt="eggcarton"  height={800} width={400} />
               <Image src="/assets/b/art/standing.png" alt="standing"  height={640} width={420} />
               <Image src="/assets/b/art/mao.png" alt="mao"  height={300} width={300} />
            </div>
        </div>
    )
}
