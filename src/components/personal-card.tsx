import styles from "./personal-card.module.css"
// import { KeyRoundIcon, MailIcon } from "lucide-react";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from 'next/image'
export default function PersonalCard() {
    return (
        <div className="flex justify-center w-[100%] text-black pb-[32px]">
            <div className={"flex flex-col items-center p-[32px] w-[425px] sm:w-[60%] rounded-2xl border-l-2 border-t-2 border-b-2 bg-[#ff6600] " + styles.darkshadow}>
                {/* <div className="font-semibold size-xl text-2xl text-center mt-[32px] mx-[64px] mb-[12px]">
                    Jan Garong
                </div>
                <div className="size-sm text-sm text-center mx-[64px] mb-[24px]">
                    pending subtitle change
                </div>
                <div className="flex flex-row justify-between w-[100px]">
                    <a href="mailto:jan.garong@alumni.utoronto.ca"><span className="mr-[8px]"><MailIcon width={20} /></span> </a>
                    <a href="/6BDFD428487D50AC40774CB4AC382728823BDAEC.asc"><span className="mr-[8px]"><KeyRoundIcon width={20} /></span></a>
                    <a href="https://github.com/jangarong/"><GitHubLogoIcon className="h-[20px] w-[20px] mr-[8px] mb-[22px]" /></a>
                </div> */}
                <div className="text-center flex flex-col align-center">
                    <div className="p-8 flex justify-center mb-[-25px]">
                        <p className="w-[400px] grid grid-cols-3 grid-rows-2 gap-1 items-center justify-items-center">
                            <a href="https://www.deviantart.com/maxiswhat/art/computer-nerd-stamp-195419460"><Image src="/assets/b/stamps/0.gif" alt="stamp0" width={100} height={55} className="mb-[25px]" /></a>
                            <a href="https://www.deviantart.com/drayuu/art/Flash-User-STAMP-374456389"><Image src="/assets/b/stamps/1.png" alt="stamp0" width={100} height={55} className="mb-[25px]" /></a>
                            <a href="https://www.deviantart.com/kiwano0/art/Procreate-app-Stamp-474612379"><Image src="/assets/b/stamps/2.png" alt="stamp0" width={100} height={55} className="mb-[25px]" /></a>
                            <a href="https://www.deviantart.com/hormonours/art/Web-Developer-stamp-586619374"><Image src="/assets/b/stamps/3.png" alt="stamp0" width={100} height={55} className="mb-[25px]" /></a>
                            <Image src="/assets/b/stamps/4.png" alt="stamp0" width={100} height={55} className="mb-[25px]" />
                            <a href="https://www.deviantart.com/sushibeth/art/Club-Penguin-Stamp-112706392"><Image src="/assets/b/stamps/5.gif" alt="stamp0" width={100} height={55} className="mb-[25px]" /></a>
                        </p>
                    </div>
                    <div className="text-center px-[24px]">
                        Also, here are some <a href="/b/ack" className="inline">cool people</a> who I think are worth checking out :)
                    </div>
                </div>
            </div>
        </div>
    )
}
