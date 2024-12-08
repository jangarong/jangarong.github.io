import { JangFooter } from "@/components/jang-footer";
import RGBCard from "@/components/rgb-card";
import { TeamsContent } from "@/components/teams-content";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import { CardTitle, CardDescription, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="bkg__spotlight w-[100%] h-[100%] min-h-[640px] overflow-auto"></div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 md:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start pb-[64px]">
          <RGBCard
            headerMobile={
              <div className="flex flex-row items-center justify-between ml-6 mr-6 text-lg mt-[20px] mb-2">
                <div className="mt-3">
                  <CardTitle className="text-sm mb-1">Jan Garong</CardTitle>
                  <CardDescription className="opacity-80 text-sm">
                    Software Engineer
                  </CardDescription>
                </div>
                <div className="text-xs items-center flex flex-row justify-between">
                  <Link href="https://github.com/jangarong">
                    <GithubIcon className="ml-4 opacity-50" />
                  </Link>
                  <Link href="https://linkedin.com/in/jangarong/">
                    <LinkedinIcon className="ml-4 opacity-50" />
                  </Link>
                </div>
              </div>
            }
            footerMobile={
              <CardContent>
                <CardDescription className="text-center">
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                    Developing Cybersecurity tools at
                  </AnimatedShinyText>
                </CardDescription>
                <TeamsContent isMobile={true} />
                <div className="flex w-[100%] text-xxs text-center justify-center">
                  *Starting January 2025
                </div>
              </CardContent>
            }
            contentDesktop={
              <div className="flex flex-col items-center">
                <CardHeader>
                  <div className="flex flex-col items-center justify-between pt-4 text-xl">
                    <CardTitle className="p-2">
                      Jan Garong
                    </CardTitle>
                    <CardDescription className="text-center">
                      <AnimatedShinyText className="inline-flex items-center justify-center px-4 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        <span>Developing Cybersecurity tools at</span>
                      </AnimatedShinyText>
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="w-[90%] mt-[-8px]">
                  <TeamsContent />
                  <div className="flex w-[100%] mt-[20px] text-xxs text-center justify-center">
                    *Starting January 2025
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between w-[100%]">
                  <Link href="https://github.com/jangarong">
                    <Button variant="outline">
                      GitHub
                      <GithubIcon className="mb-[2px]" />
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/jangarong/">
                    <Button className="h-[34px] mb-[2px]">
                      LinkedIn
                      <LinkedinIcon className="mb-[2px]" />
                    </Button>
                  </Link>
                </CardFooter>
              </div>
            }
          />
        </main>
        <JangFooter />
      </div>
    </div>
  );
}
