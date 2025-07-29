import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Image from "next/image";
import { WorksTree } from "@/components/works-tree";
import { KeyRoundIcon, MailIcon } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { TechnologiesMarquee } from "@/components/technologies-marquee";
import styles from "./home-bento.module.css";

const features = [
    {
        className: "col-span-4 row-span-8 " + styles.paper,
        background: (
            <WorksTree />
        ),
        isButton: false
    },
    {
        className: "col-span-3 row-span-2",
        background: (
            <div className="absolute w-[100%] h-[100%] bg-[url('/assets/bike2.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed"></div>
        ),
        isButton: true
    },
    {
        className: "col-span-1 row-span-1 " + styles.blue,
        background: (
            <GitHubLogoIcon className={"h-[64px] w-[64px] m-[32px]"} />
        ),
        href: "https://github.com/jangarong/",
        isButton: true
    },
    {
        className: "col-span-1 row-span-1 " + styles.cooked,
        background: (
            <LinkedInLogoIcon className="h-[64px] w-[64px] m-[32px]" />
        ),
        href: "https://www.linkedin.com/in/jangarong/",
        isButton: true
    },
    {
        className: "col-span-1 row-span-1 " + styles.shore,
        background: (
            <MailIcon width={64} className="h-[64px] w-[64px] m-[32px]" />
        ),
        isButton: true,
        href: "mailto:jan.garong@alumni.utoronto.ca"
    },
    {
        className: "col-span-1 row-span-1 " + styles.purpley,
        background: (
            <KeyRoundIcon width={64} className="h-[64px] w-[64px] m-[32px]" />
        ),
        isButton: true,
        href: "https://keys.openpgp.org/search?q=6BDFD428487D50AC40774CB4AC382728823BDAEC"
    },
    {
        className: "col-span-5 row-span-3",
        background: (
            <div className={"h-[175%] flex items-center justify-center "+ styles.dark}>
                <TechnologiesMarquee />
            </div>
        ),
    },
    {
        className: "col-span-2 row-span-2 " + styles.bluePaper,
        background: (
            <div className="flex flex-col items-start m-[32px]">
                <Image className="mb-[16px]" src="/assets/Utoronto_coa.png" alt="uoft" width={32} height={32} />
                <div className="text-lg font-semibold">University of Toronto</div>
                <div className="text-md mb-[16px]">HBSc - Computer Science</div>
                <div className="text-md text-muted-foreground font-italic">Graduated on Nov 9th, 2023.</div>
            </div>
        ),
        isButton: true
    },
    {
        className: "col-span-3 row-span-2",
        background: (
            <div className="absolute w-[100%] h-[100%] bg-[url('/assets/IMG_1550.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed"></div>
        ),
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
