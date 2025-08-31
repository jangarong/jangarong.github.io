import DrawerNoJS from "@/components/drawer-no-js";
import JangCardMobileFooter from "@/components/jang-card-mobile-footer";
import JangCardMobileHeader from "@/components/jang-card-mobile-header";
import RGBCardMobile from "@/components/rgb-card-mobile";
import Slide, { SlideDirection } from "@/components/slide";
import Spotlight from "@/components/spotlight";
import { TheWorld } from "@/components/the-world";
import { WorkNode } from "@/components/ui/hackathon-card";
import { WorksTree } from "@/components/works-tree";
import Link from "next/link";

const experienceMap: { [key: string]: WorkNode[] } = {
  "trend": [
    {
      title: "Trend Micro Vision One",
      team: "Email Security",
      description: (<div>
        Worked on Trend Micro&apos;s Email Security product, with a focus on developing the logs pipeline and email storage (for sandboxing or quarantine usage).
        Was also able to conceptualize from scratch an internal tool for UI development.
      </div>),
      dates: "Jan 2024 - Dec 2024",
      image: "/assets/companies/icons/tmems.png",
    },
  ],
  "google": [
    {
      title: "Identity and Access Management (IAM)",
      team: "Workforce Pools",
      description: (<div>
        Writing critical features for integrating Google Cloud services with external identity providers. Dealing with cookie/session management.
      </div>),
      dates: "July 2025 - Current",
      image: "/assets/companies/icons/iam.jpg",
    },
    {
      title: "Security Command Center",
      team: "Event Threat Detection",
      description: (<div>
        Aided with designing and implementing threat detections that happen on GCP, sourced from internal and external cloud logging and threat intelligence.
      </div>),
      dates: "Jan 2025 - Current",
      image: "/assets/companies/icons/scc.jpg",
    },
  ],
  "cylance": [
    {
      title: "Cylance",
      team: "CylanceMDR",
      description: (<div>
        Helped with migrating CylanceMDR&apos;s alerts infrastructure and tenancy system, substituting old APIs and systems with those based on AWS and GraphQL.
      </div>),
      dates: "Sept 2023 - Dec 2023",
      image: "/assets/companies/icons/mdr.png",
    },
  ],
  "certik": [
    {
      title: "CertiK Skynet",
      description: (
        <div>
          Worked on Skynet, an on-chain monitoring tool that provides security-related analytics for blockchain projects.
          Mostly focused on integrating the new Bug Bounty UI components onto Skynet.
        </div>
      ),
      dates: "May 2022 - Aug 2022",
      image: "/assets/companies/icons/skynet.png",
    },
    {
      title: "Smart Contract Audits",
      description: (
        <div>
          Audited EVM-based Solidity smart contracts for critical vulnerabilities and centralization issues across a wide variety
          of applications and protocols such as ERC20s/721s, Decentralized Exchanges, etc.
        </div>
      ),
      dates: "Oct 2021 - Dec 2021",
      image: "/assets/companies/icons/audits.png",
    },
  ]
}

type SearchParams = { exp: string, drawer: string }

export default async function Home(props: {
  searchParams: SearchParams
}) {
  const searchParams = await props.searchParams
  const exp = searchParams.exp;
  const drawer = searchParams.drawer;
  const isValidDrawerQuery = !!exp && Object.keys(experienceMap).includes(exp) && (drawer === 'open' || drawer === 'close')

  return (
    <div>
      {isValidDrawerQuery && drawer === 'open' ?
        <Link href={`/?exp=${exp}&drawer=close`} className="w-[100%] h-[100%] absolute z-30 flex flex-col justify-end overflow-hidden">
          <DrawerNoJS open>
            <div>
              <WorksTree
                experiences={experienceMap[exp]}
              />
            </div>
          </DrawerNoJS>
        </Link> : null}
      {isValidDrawerQuery && drawer === 'close' ?
        <div className="removeAfterDelay w-[100%] h-[100%] absolute z-30 flex flex-col justify-end overflow-hidden">
          <DrawerNoJS>
            <div>
              <WorksTree
                experiences={experienceMap[exp]}
              />
            </div>
          </DrawerNoJS>
        </div> : null}
      {isValidDrawerQuery ? <div className="bg-black w-[100%] h-[100%] absolute z-20 opacity-50" /> : null}
      <Spotlight>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 md:p-20 font-[family-name:var(--font-geist-sans)]">
          <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start pb-[64px]">
            {isValidDrawerQuery ?
              <RGBCardMobile className="" header={<JangCardMobileHeader />} body={
                <div className="dark:invert">
                  <TheWorld />
                </div>
              } footer={<JangCardMobileFooter />} width={350} height={600} />
              : <Slide dir={SlideDirection.DOWN}>
                <RGBCardMobile className="" header={<JangCardMobileHeader />} body={
                  <div className="dark:invert">
                    <TheWorld />
                  </div>
                } footer={<JangCardMobileFooter />} width={350} height={600} />
              </Slide>}
          </div>
        </div>
      </Spotlight>
    </div>
  );
}
