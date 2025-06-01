import styles from "./personal-card.module.css"
import { KeyRoundIcon, MailIcon } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function PersonalCard() {
    return (
        <div className="flex justify-center w-[100%] text-black mb-[32px]">
            <div className={"flex flex-col items-center p-[36px] w-[80%] sm:w-[60%] rounded-2xl border-l-2 border-t-2 border-b-2 bg-[#ff6600] " + styles.darkshadow}>
                <div className="font-semibold size-xl text-2xl text-center mt-[32px] mx-[64px] mb-[12px]">
                    Jan Garong
                </div>
                <div className="size-sm text-sm text-center mx-[64px] mb-[24px]">
                    pending subtitle change
                </div>
                <div className="flex flex-row justify-between w-[100px]">
                    <a href="mailto:jan.garong@alumni.utoronto.ca"><span className="mr-[8px]"><MailIcon width={20} /></span> </a>
                    <a href="/6BDFD428487D50AC40774CB4AC382728823BDAEC.asc"><span className="mr-[8px]"><KeyRoundIcon width={20} /></span></a>
                    <a href="https://github.com/jangarong/"><GitHubLogoIcon className="h-[20px] w-[20px] mr-[8px] mb-[22px]" /></a>
                </div>
            </div>
        </div>
    )
}
