import { JangCard } from "@/components/jang-card";
import { GithubIcon, LinkedinIcon, KeyRoundIcon } from "lucide-react";
import { JangCardMobile } from "@/components/jang-card-mobile";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-1 pb-20 gap-16 md:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <CardWithForm /> */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      {/* <ModeToggle /> */}
      <div className="hidden md:block">
      <JangCard />
      </div>
      <div className="visible md:hidden">
      <JangCardMobile />
      </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://keys.openpgp.org/search?q=6BDFD428487D50AC40774CB4AC382728823BDAEC"
          target="_blank"
          rel="noopener noreferrer"
        >
          <KeyRoundIcon className="opacity-50"/>
          PGP Key
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:jan.garong@alumni.utoronto.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          <KeyRoundIcon className="opacity-50"/>
          jan.garong@alumni.utoronto.ca
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/jangarong/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="opacity-50" />
          jangarong
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://linkedin.com/in/jangarong/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon className="opacity-50" />
          jangarong
        </a>
      </footer>
    </div>
  );
}
