// https://ui.shadcn.com/docs/components/typography

import { JangFooter } from "@/components/jang-footer";
import TeamTimeline from "@/components/team-timeline";
import DotPattern from "@/components/ui/dot-pattern";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Works() {
  return (
    <div className="flex flex-col items-center">
      {/* <div className="bkg__spotlight w-[100%] h-[100%] min-h-[640px] overflow-auto"></div> */}
      <div className="mt-[64px] mb-[64px]">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          My Works
        </span>
        <Separator className="mb-[64px]" />
        <TeamTimeline />
      </div>
      {/* <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
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
      </p> */}
      <JangFooter />
    </div>
  );
}
