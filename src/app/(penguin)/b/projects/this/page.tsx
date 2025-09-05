import Image from 'next/image'

export const metadata = {
    title: 'Jan Garong [B] - This.'
}

export default function Page() {
    return (
        <div className="mt-[48px] mx-[24px] mb-[72px] min-h-[100vh]">
            <h1 className="font-semibold text-2xl mb-4 tracking-tighter">This Website</h1>
            <div className="mb-4">
                I&apos;ve been developing this website for quite a while since 2020, with lots of
                layout changes over the years. Here&apos;s a few screenshots of them, all developed by
                me, written in React.js or pure HTML/CSS.
            </div>
            <div className="mb-4 grid grid-cols-3 grid-rows-2 gap-1 items-center justify-items-center">
                <Image alt={'v0'} src="/assets/b/this/v0.png" width={300} height={100} className="object-cover w-half h-half" />
                <Image alt={'v2'} src="/assets/b/this/v2.png" width={300} height={100} className="object-cover w-half h-half" />
                <Image alt={'vM'} src="/assets/b/this/vM.png" width={300} height={100} className="object-cover w-half h-half" />
                <Image alt={'vL'} src="/assets/b/this/vL.png" width={300} height={100} className="object-cover w-half h-half" />
                <Image alt={'v7'} src="/assets/b/this/v7.png" width={300} height={100} className="object-cover w-half h-half" />
                <Image alt={'v9'} src="/assets/b/this/v9.png" width={300} height={100} className="object-cover w-half h-half" />
            </div>
            <div className="mb-4 text-center italic">
                From top-left to bottom-right: v0, v2, vMint, vAntony, v7, v9.
            </div>
            <div className="mb-4">
                v0 was supposed to parody a professor&apos;s website, which I guess was good enough, but
                then I started experimenting more with UI frameworks like MaterialUI or
                ShadCN to make the other versions, with the exception of v7, which was made when
                I wanted to make a lightweight website.
            </div>
            <div className="mb-4">vMint and vAntony was never made and only
                exist as Figma prototypes, since vAntony&apos;s assets were made by my friends, 
                and then I changed my mind midway wanting to make the website 100% made by
                me. Oh, and vMint had lots of complaints from my frineds saying it was too bright.
            </div>
            <div className="mb-4">
                From v11 (current) and onwards, I plan on making this website still prioritize 
                NoScript compatibility, while also providing my resume on the front page. 
                Everything else goes to the B-Side!
            </div>
        </div>
    )
}
