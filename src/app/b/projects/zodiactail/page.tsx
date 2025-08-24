import Image from 'next/image'

export const metadata = {
    title: 'Jan Garong - Zodiac Tail: A Game of Cat and Mouse',
    // description: 'Read my blog.',
}

export default function Page() {
    return (
        <div className="mt-[48px] mx-[24px] mb-[72px]">
            <h1 className="font-semibold text-2xl mb-4 tracking-tighter">Zodiac Tail: A Game of Cat and Mouse</h1>
            <div className="mb-4">
                A puzzle platformer featuring the zodiac animals! Meet Mao, one of the Jade emperor&apos;s most valued prophets, and Laoshu, a researcher in time manipulation who are both at a race to find the Jade Talisman.
            </div><div className="mb-4">
                You will need to use Mao&apos;s teleporting abilities and Laoshu&apos;s time manipulation abilities in order to progress through these levels!
            </div><div className="mb-8">
                Please note that this is a beta version, so not all aspects of the game will be polished, and you will run into missing sprites.
            </div>
            <div className="w-[100%] flex justify-center my-8">
                <Image src={"/assets/b/zodiactail/zt0.png"} alt="screenshot0" width={480} height={360} />
            </div>
            <div className="w-[100%] flex justify-center my-8">
                <Image src={"/assets/b/zodiactail/zt1.png"} alt="screenshot1" width={480} height={360} />
            </div>
            <div className="w-[100%] flex justify-center my-8">
                <Image src={"/assets/b/zodiactail/zt2.jpg"} alt="screenshot2" width={480} height={360} />
            </div>
            <div className="font-semibold mb-4">
                Here&apos;s how you can play!
            </div>
            <div className="ml-4">
                <div className="mb-4">
                    • <a href="/b/webgames/zodiactail/index.html"  className="text-blue-600 hover:text-purple-400">WebGL Version</a>
                </div>
                <div className="mb-4">
                    • PC Version: ( <a href="/assets/ZodiacTail-MacOS-0.2.13-beta.zip" className="text-blue-600 hover:text-purple-400">
                        MacOS ARM
                    </a> / <a href="/assets/ZodiacTail-Windows-0.2.13-beta.zip" className="text-blue-600 hover:text-purple-400">
                        Windows x86
                    </a> / <a href="/assets/ZodiacTail-Linux-0.2.13-beta.zip" className="text-blue-600 hover:text-purple-400">
                        Linux x86
                    </a> ) </div>
                <div className="mb-4">
                    • Signatures: ( <a href="/assets/ZodiacTail-MacOS-0.2.13-beta.zip.asc" className="text-blue-600 hover:text-purple-400">
                        MacOS ARM
                    </a> / <a href="/assets/ZodiacTail-Windows-0.2.13-beta.zip.asc" className="text-blue-600 hover:text-purple-400">
                        Windows x86
                    </a> / <a href="/assets/ZodiacTail-Linux-0.2.13-beta.zip.asc" className="text-blue-600 hover:text-purple-400">
                        Linux x86
                    </a> ) </div>
                <div className="mb-4"> • Official page found at <a href="https://zodiactail.itch.io/prologue">itch.io</a></div>
            </div>
            <div className="font-semibold mb-4">
                Credits:
            </div>
            <div className="ml-4">
                <div className="mb-4">
                    • Created by Amy Li and Jan Garong
                </div>
                <div className="mb-4">
                    • Designed by Amy Li, Cassidy Henstock, Eden Jung, Zach Golding, Raphael Santiago and Jacqueline Sun.
                </div>
                <div className="mb-4">
                    • Developed by Jan Garong, Jess Cao and Leo Wang.
                </div>
                <div className="mb-4">
                    • Written by Amy Li.
                </div>
                <div className="mb-4">
                    • Music composed by Rahul Sharma.
                </div>
            </div>
        </div>
    )
}
