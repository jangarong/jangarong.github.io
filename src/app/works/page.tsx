// https://ui.shadcn.com/docs/components/typography

import { TeamCard } from "@/components/team-card";
import Link from "next/link";

export default function Works() {
  const teams = [
    {
      "name": "Trend Micro Email Security",
      "date": "January 2024 - December 2024",
      "avatar": "/teams/tmems.png",
      "description": "Currently developing backend log features + development tools for the Email Security product. This product aims to prevent incoming malicious emails such as those that contain phishing, ransomware, spam, as well as other protocol filters like IP reputation, spoofing, etc.",
      "url": "https://www.trendmicro.com/en_ca/business/products/user-protection/sps/email-and-collaboration/email-security.html"
    },
    {
      "name": "BlackBerry CylanceMDR",
      "date": "September 2023 - December 2023",
      "avatar": "/teams/cylancemdr.webp",
      "description": "An MDR and threat intelligence platform for incoming malicious events. Monitored on devices with Cylance's AI, and managed by security analysts available 24/7. Previously developed microservices used to maintain the data pipeline, as well as APIs that are used for multi-tenancy and showing alerts detected on client endpoints.&nbsp;",
      "url": "https://docs.blackberry.com/en/unified-endpoint-security/cylancemdr"
    },
    {
      "name": "CertiK Skynet",
      "date": "May 2022 - August 2022",
      "avatar": "/teams/skynet.jpg",
      "description": "An all-in-one security analytics platform that gives insights to a variety of Web3 projects. This includes on-chain data, visualizations, security features, project activity, and many more! Worked on developing many of the widgets, most notably the bug bounty feature.&nbsp;",
      "url": "https://www.certik.com/products/skynet"
    }
  ]
  return (
    <div className="m-8">
      <div>
        {teams.map(team => <TeamCard team={team.name}
          date={team.date}
          avatar={team.avatar}
          description={team.description}
          url={team.url}
        />)}
      </div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        My Works
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        This is a list of projects and teams I've been a part of. This page is a WIP.
      </p>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Contributions
      </h2>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Trend Micro Email Security
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Currently developing backend log features + development
        tools for the Email Security product. This product aims to
        prevent incoming malicious emails such as those that contain
        phishing, ransomware, spam, as well as other protocol
        filters like IP reputation, spoofing, etc.&nbsp;
        <a className="[&:not(:first-child)]:mt-6 underline" href="https://www.trendmicro.com/en_ca/business/products/user-protection/sps/email-and-collaboration/email-security.html">(Product Page)</a>
      </p>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        BlackBerry CylanceMDR
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        An MDR and threat intelligence platform for incoming
        malicious events. Monitored on devices with Cylance's AI,
        and managed by security analysts available 24/7. Previously
        developed microservices used to maintain the data pipeline,
        as well as APIs that are used for multi-tenancy and showing
        alerts detected on client endpoints.&nbsp;
        <a className="[&:not(:first-child)]:mt-6 underline" href="https://docs.blackberry.com/en/unified-endpoint-security/cylancemdr">(Product Page)</a>
      </p>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        CertiK Skynet
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        An all-in-one security analytics platform that gives
        insights to a variety of Web3 projects. This includes
        on-chain data, visualizations, security features, project
        activity, and many more! Worked on developing many of the
        widgets, most notably the bug bounty feature.&nbsp;
        <a className="[&:not(:first-child)]:mt-6 underline" href="https://www.certik.com/products/skynet">(Product Page)</a>
      </p>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Side Projects
      </h2>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <a className="[&:not(:first-child)]:mt-6 underline" href="/zodiactail/index.html">Zodiac Tail : A Game of Cat and Mouse</a> - A puzzle platformer with time mechanics that features the Zodiac Animals!</li>
        <li><a className="[&:not(:first-child)]:mt-6 underline" href="https://github.com/sit-n-coding/solidguard">SolidGuard</a> - Vulnerability database + 24/7 Automated Smart Contract auditor.</li>
        <li><a className="[&:not(:first-child)]:mt-6 underline" href="https://www.kaggle.com/code/magichanics/amateur-hour-using-headlines-to-predict-stocks">Amateur Hour - Using Headlines to Predict Stocks</a> - Machine Learning model that predicts stock movements based on news headlines.</li>
      </ul>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        <Link className="[&:not(:first-child)]:mt-6 underline" href="/">Go back home</Link>
      </p>
    </div>
  );
}
