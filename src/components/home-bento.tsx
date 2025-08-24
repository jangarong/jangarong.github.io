import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Image from "next/image";
import { WorksTree } from "@/components/works-tree";
import { KeyRoundIcon, MailIcon } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { TechnologiesMarquee } from "@/components/technologies-marquee";
import styles from "./home-bento.module.css";

const features = [
    {
        className: "col-span-4 lg:col-span-4 lg:row-span-8 xl:row-span-8 xl:col-span-4 " + styles.paper,
        background: (
            <WorksTree />
        ),
        isButton: false
    },
    {
        className: "col-span-4 row-span-8 lg:col-span-4 lg:row-span-4 xl:col-span-3 xl:row-span-2",
        background: (
            <div className="absolute w-[100%] h-[100%] bg-[url('/assets/bike2.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed"></div>
        ),
        isButton: true
    },
    {
        className: "flex flex-col justify-center items-center col-span-1 row-span-1 " + styles.blue,
        background: (
            <GitHubLogoIcon className={"h-[32px] w-[32px] md:h-[48px] md:w-[48px] m-[24px] lg:m-[0px]"} />
        ),
        href: "https://github.com/jangarong/",
        isButton: true
    },
    {
        className: "flex flex-col justify-center items-center col-span-1 row-span-1 " + styles.cooked,
        background: (
            <LinkedInLogoIcon className="h-[32px] w-[32px] md:h-[48px] md:w-[48px]" />
        ),
        href: "https://www.linkedin.com/in/jangarong/",
        isButton: true
    },
    {
        className: "flex flex-col justify-center items-center col-span-1 row-span-1 " + styles.shore,
        background: (
            <MailIcon width={64} className="h-[32px] w-[32px] md:h-[48px] md:w-[48px]" />
        ),
        isButton: true,
        href: "mailto:jan.garong@alumni.utoronto.ca"
    },
    {
        className: "flex flex-col justify-center items-center col-span-1 row-span-1 " + styles.purpley,
        background: (
            <KeyRoundIcon width={64} className="h-[32px] w-[32px] md:h-[48px] md:w-[48px]" />
        ),
        isButton: true,
        href: "https://keys.openpgp.org/search?q=6BDFD428487D50AC40774CB4AC382728823BDAEC"
    },
    {
        className: "col-span-4 row-span-12 lg:row-span-1 xl:col-span-5 xl:row-span-3",
        background: (
            <div className={"h-[175%] flex items-center justify-center " + styles.dark}>
                <TechnologiesMarquee />
            </div>
        ),
    },
    {
        className: "col-span-4 row-span-1 xl:col-span-2 xl:row-span-2 " + styles.bluePaper,
        background: (
            <div className="flex flex-col items-start m-[32px]">
                <Image className="mb-[16px]" src="/assets/Utoronto_coa.png" alt="uoft" width={32} height={32} />
                <div className="text-lg font-semibold">University of Toronto</div>
                <div className="text-md mb-[16px]">HBSc - Computer Science</div>
                <div className="text-md text-muted-foreground font-italic">Graduated on Nov 9th, 2023 from the Scarborough Campus.</div>
            </div>
        ),
        isButton: true
    },
    {
        className: "col-span-2 row-span-12 sm:row-span-8 md:row-span-4 lg:col-span-4 lg:row-span-4 lg:row-span-5 xl:col-span-3 xl:row-span-2",
        background: (
            <div className="absolute w-[100%] h-[100%] bg-[url('/assets/IMG_1550.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed"></div>
        ),
        isButton: true
    },
    {
        className: "col-span-2 row-span-12 sm:row-span-8 md:row-span-4 lg:col-span-2 lg:row-span-4 lg:col-span-4 xl:col-span-3 xl:row-span-1",
        background: (
            <div className={"w-full h-full flex flex-row items-center justify-center padding-[32px] " + styles.trippy}>
                <Image src="/assets/laoshu.gif" alt="laoshu" className="mr-[16px] w-[48px] h-[48px]" width={32} height={32} />
                <Image src="/assets/mao.gif" alt="mao" className="w-[48px] h-[48px]"  width={32} height={32} />
            </div>
        ),
        href: "https://zodiactail.itch.io/prologue",
        isButton: true
    },
];

export function HomeBento() {
    return (
        <BentoGrid>
            {features.map((feature, idx) => (
                <BentoCard key={idx} {...feature} />
            ))}
        </BentoGrid>
    );
}
