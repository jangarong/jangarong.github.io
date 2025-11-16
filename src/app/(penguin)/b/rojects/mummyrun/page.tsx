import Image from 'next/image'
import Header from '@/components/b/header'

export const metadata = {
    title: 'Jan Garong [B] - Mummy Run: Boss Rush Mode',
    // description: 'Read my blog.',
}

export default function Page() {
    return (
               <div>            <Header>This Website</Header>
        <div className="mt-[48px] mx-[24px] mb-[72px]">
            <h1 className="font-semibold text-2xl mb-4 tracking-tighter">Mummy Run: Boss Rush Mode</h1>
            <div className="mb-4">
                This was for my Grade 11 Computer Science class (presented on Jan. 2018), where we all had to program in ActionScript (Flash).
                This was also a pretty huge milestone, since this was the first big coding project I had that
                required collaborating with other students. I have previously made games in GameMaker individually.
            </div><div className="mb-4">
                This is the same game, but only with the Boss Rush Mode tweaked to be playable for keyboard users. 
                Just as a fair warning, this game requires <b>heavy spamming</b> of the spacebar in order to progress.
                Also the music is <b>very loud</b>, sorry about that.
            </div>
            <div className="w-[100%] flex justify-center my-8">
                <Image src={"/assets/b/mummyrun/mummyrun.png"} alt="screenshot0" width={480} height={360} />
            </div>
            <div className="font-semibold mb-4">
                Here&apos;s how you can play!
            </div>
            <div className="ml-4">
                <div className="mb-4">
                    • <a href="/b/webgames/mummyrun/index.html"  className="text-blue-600 hover:text-purple-400">Ruffle version</a>
                </div>
            </div>
            <div className="font-semibold mb-4">
                Credits:
            </div>
            <div className="ml-4">
                <div className="mb-4">
                    • Main Coder/Main Setup: Jan Garong
                </div>
                <div className="mb-4">
                    • Main Photoshoppers/Artists: Jan, Emily.
                </div>
            </div>
        </div>
        </div>
    )
}
