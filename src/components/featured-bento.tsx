import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    name: "Google Cloud Security Command Center *",
    description: "The industry's first multi-cloud security solution with virtual red teaming and built-in response capabilities.",
    href: "https://cloud.google.com/security/products/security-command-center",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute opacity-50 w-[100%] h-[100%] bg-[url('/screenshots/scc.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      </div>
    ),
  },
  {
    name: "CertiK Skynet",
    description: "Access tools, blockchain data and security to perform due diligence across Web3 projects.",
    href: "https://www.certik.com/products/skynet",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute opacity-50 w-[150%] h-[100%] bg-[url('/screenshots/skynet.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      </div>
    ),
  },
  {
    name: "Zodiac Tail: A Tale of Cat & Mouse",
    description: "A time-bending puzzle platformer featuring the Zodiac Animals! Art direction led by Amy Li.",
    href: "/zodiactail/index.html",
    cta: "Play Now!",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute opacity-50 w-[150%] h-[100%] bg-[url('/screenshots/zt.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      </div>
    ),
  },
  {
    name: "Trend Micro Email Security",
    description: "Stops phishing, ransomware, BEC, other advanced email threats, and spam from entering businesses' mailboxes.",
    className: "col-span-3 lg:col-span-2",
    href: "https://www.trendmicro.com/en_us/business/products/email-security.html",
    cta: "Learn more",
    background: (
      <div className="absolute opacity-50 w-[100%] h-[100%] bg-[url('/screenshots/ems.webp')] bg-cover bg-center bg-no-repeat bg-fixed">
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
