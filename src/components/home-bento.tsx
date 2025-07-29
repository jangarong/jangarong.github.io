import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Image from "next/image";
import { WorksTree } from "@/components/works-tree";
import { KeyRoundIcon, MailIcon } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { TechnologiesMarquee } from "@/components/technologies-marquee";

const features = [
    {
        className: "col-span-4 row-span-8",
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
        className: "col-span-1 row-span-1",
        background: (
            <GitHubLogoIcon className="h-[64px] w-[64px] m-[32px]" />
        ),
        href: "https://github.com/jangarong/",
        isButton: true
    },
    {
        className: "col-span-1 row-span-1",
        background: (
            <LinkedInLogoIcon className="h-[64px] w-[64px] m-[32px]" />
        ),
        href: "https://www.linkedin.com/in/jangarong/",
        isButton: true
    },
    // {
    //     className: "col-span-1 row-span-1",
    //     background: (
    //         <a href="https://github.com/jangarong/" className="bg-[red] size-full flex flex-col justify-center items-center">
    //             <GitHubLogoIcon className="h-[64px] w-[64px] m-[48px]" />
    //         </a>
    //     ),
    //     isButton: true
    // },
    // {
    //     className: "col-span-1 row-span-1",
    //     background: (
    //         <a href="https://www.linkedin.com/in/jangarong/" className="bg-[red] size-full flex flex-col justify-center items-center">
    //             <LinkedInLogoIcon className="h-[64px] w-[64px] m-[48px]" />
    //         </a>
    //     ),
    //     isButton: true
    // },
    {
        className: "col-span-1 row-span-1",
        background: (
            <MailIcon width={64} className="h-[64px] w-[64px] m-[32px]" />
        ),
        isButton: true,
        href: "mailto:jan.garong@alumni.utoronto.ca"
    },
    {
        className: "col-span-1 row-span-1",
        background: (
            <KeyRoundIcon width={64} className="h-[64px] w-[64px] m-[32px]" />
        ),
        isButton: true,
        href: "https://keys.openpgp.org/search?q=6BDFD428487D50AC40774CB4AC382728823BDAEC"
    },
    {
        className: "col-span-5 row-span-3",
        background: (
            <div className="bg-[black] h-[100%] flex items-center justify-center">
                <TechnologiesMarquee />
            </div>
        ),
    },
    {
        className: "col-span-2 row-span-2",
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
    // {
    //     className: "col-span-1 row-span-1",
    //     background: (
    //         <a href="mailto:jan.garong@alumni.utoronto.ca" className="bg-[red] size-full flex flex-col justify-center items-center">
    //             <MailIcon width={64} className="h-[64px] w-[64px] m-[48px]" />
    //         </a>
    //     ),
    //     isButton: true
    // },
    // {
    //     className: "col-span-1 row-span-1",
    //     background: (
    //         <a href="https://keys.openpgp.org/search?q=6BDFD428487D50AC40774CB4AC382728823BDAEC" className="bg-[red] size-full flex flex-col justify-center items-center">
    //             <KeyRoundIcon width={64} className="h-[64px] w-[64px] m-[48px]" />
    //         </a>
    //     ),
    //     isButton: true
    // },
    {
        className: "col-span-5 row-span-1",
        background: (
            <div>
               Footer
                {/* <div className="mb-2 flex flex-row items-center"><span className="mr-[8px]"><MailIcon width={20} /></span> <a href="mailto:jan.garong@alumni.utoronto.ca">jan.garong@alumni.utoronto.ca</a></div>
                <div className="mb-2 flex flex-row items-center"><span className="mr-[8px]"><KeyRoundIcon width={20} /></span> <a href="https://keys.openpgp.org/search?q=6BDFD428487D50AC40774CB4AC382728823BDAEC">PGP Key (6BDFD428)</a></div>
                <div className="mb-2 flex flex-row items-center"><GitHubLogoIcon className="h-[20px] w-[20px] mr-[8px]" /><a href="https://github.com/jangarong/">https://github.com/jangarong</a></div>
                <div className="mb-2 flex flex-row items-center"><LinkedInLogoIcon className="h-[20px] w-[20px] mr-[8px]" /><a href="https://www.linkedin.com/in/jangarong/">https://www.linkedin.com/in/jangarong/</a></div> */}
            </div>
        ),
        isButton: true
    },
    //   {
    //     name: "Security Command Center",
    //     description: "Google's Cloud Security solution providing mutliple detections on your cloud infrastructure like IAMs, VPCs, K8s, Databases, etc.",
    //     href: "https://cloud.google.com/security/products/security-command-center",
    //     cta: "Learn more",
    //     className: "col-span-3 lg:col-span-2",
    //     background: (
    //       <div className="absolute opacity-50 w-[100%] h-[100%] bg-[url('/screenshots/scc.png')] bg-cover bg-center bg-no-repeat bg-fixed">
    //       </div>
    //     ),
    //     Icon:  <Image src={'/companies/google.svg'} alt={'Google'} width={100} height={50} className="dark:invert origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
    //   },
    //   {
    //     name: "Email Security",
    //     description: "Stops phishing, ransomware, BEC, other advanced email threats, and spam from entering businesses' mailboxes.",
    //     className: "col-span-3 lg:col-span-1",
    //     href: "https://www.trendmicro.com/en_us/business/products/email-security.html",
    //     cta: "Learn more",
    //     background: (
    //       <div className="absolute opacity-50 w-[100%] h-[100%] bg-[url('/screenshots/ems.webp')] bg-cover bg-center bg-no-repeat bg-fixed">
    //       </div>
    //     ),
    //     Icon:  <Image src={'/companies/trend.svg'} alt={'Trend Micro'} width={100} height={50} className="dark:invert origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
    //   },
    //   {
    //     name: "CylanceMDR",
    //     description: "Detection and Response platform managed by BlackBerry's SOC team.",
    //     href: "https://www.blackberry.com/us/en/products/cylance-endpoint-security/cylance-mdr",
    //     cta: "Learn more",
    //     className: "col-span-3 lg:col-span-1",
    //     background: (
    //       <div className="absolute opacity-40 w-[150%] h-[100%] bg-[url('/screenshots/mdr.png')] bg-cover bg-center bg-no-repeat bg-fixed">
    //       </div>
    //     ),
    //     Icon:  <Image src={'/companies/blackberry.svg'} alt={'BlackBerry'} width={130} height={50} className="dark:invert origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75 mb-1" />
    //   },
    //   {
    //     name: "Skynet",
    //     description: "Access tools, blockchain data and security to perform due diligence across Web3 projects.",
    //     href: "https://www.certik.com/products/skynet",
    //     cta: "Learn more",
    //     className: "col-span-3 lg:col-span-2",
    //     background: (
    //       <div className="absolute opacity-40 w-[100%] h-[100%] bg-[url('/screenshots/skynet.png')] bg-cover bg-center bg-no-repeat bg-fixed">
    //       </div>
    //     ),
    //     Icon:  <Image src={'/companies/certik.svg'} alt={'CertiK'} width={110} height={50} className="dark:invert origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75 mb-1" />
    //   },
    //   {
    //     name: "Zodiac Tail: A Tale of Cat & Mouse",
    //     description: "A time-bending puzzle platformer featuring the Zodiac Animals!",
    //     href: "/zodiactail/index.html",
    //     cta: "Play Now!",
    //     className: "col-span-3 lg:col-span-1",
    //     background: (
    //       <div className="absolute opacity-50 w-[150%] h-[100%] bg-[url('/screenshots/zt.png')] bg-cover bg-center bg-no-repeat bg-fixed">
    //       </div>
    //     ),
    //   },
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
