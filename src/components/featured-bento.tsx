import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Image from "next/image";

const features = [
  {
    name: "Security Command Center",
    description: "Google's Cloud Security solution providing mutliple detections on your cloud infrastructure like IAMs, VPCs, K8s, Databases, etc.",
    href: "https://cloud.google.com/security/products/security-command-center",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute opacity-50 w-[100%] h-[100%] bg-[url('/screenshots/scc.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      </div>
    ),
    Icon:  <Image src={'/companies/google.svg'} alt={'Google'} width={100} height={50} className="dark:invert origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
  },
  {
    name: "Email Security",
    description: "Stops phishing, ransomware, BEC, other advanced email threats, and spam from entering businesses' mailboxes.",
    className: "col-span-3 lg:col-span-1",
    href: "https://www.trendmicro.com/en_us/business/products/email-security.html",
    cta: "Learn more",
    background: (
      <div className="absolute opacity-50 w-[100%] h-[100%] bg-[url('/screenshots/ems.webp')] bg-cover bg-center bg-no-repeat bg-fixed">
      </div>
    ),
    Icon:  <Image src={'/companies/trend.svg'} alt={'Trend Micro'} width={100} height={50} className="dark:invert origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
  },
  {
    name: "CylanceMDR",
    description: "Detection and Response platform managed by BlackBerry's SOC team.",
    href: "https://www.blackberry.com/us/en/products/cylance-endpoint-security/cylance-mdr",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute opacity-40 w-[150%] h-[100%] bg-[url('/screenshots/mdr.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      </div>
    ),
    Icon:  <Image src={'/companies/blackberry.svg'} alt={'BlackBerry'} width={130} height={50} className="dark:invert origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75 mb-1" />
  },
  {
    name: "Skynet",
    description: "Access tools, blockchain data and security to perform due diligence across Web3 projects.",
    href: "https://www.certik.com/products/skynet",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute opacity-40 w-[100%] h-[100%] bg-[url('/screenshots/skynet.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      </div>
    ),
    Icon:  <Image src={'/companies/certik.svg'} alt={'CertiK'} width={110} height={50} className="dark:invert origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75 mb-1" />
  },
  {
    name: "Zodiac Tail: A Tale of Cat & Mouse",
    description: "A time-bending puzzle platformer featuring the Zodiac Animals!",
    href: "/zodiactail/index.html",
    cta: "Play Now!",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute opacity-50 w-[150%] h-[100%] bg-[url('/screenshots/zt.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      </div>
    ),
  },
];

export function FeaturedBento() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
