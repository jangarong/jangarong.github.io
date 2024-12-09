import JangCardDesktopContent from "@/components/jang-card-desktop-content";
import JangCardMobileFooter from "@/components/jang-card-mobile-footer";
import JangCardMobileHeader from "@/components/jang-card-mobile-header";
import RGBCard from "@/components/rgb-card";

export default function Home() {
  return (
    <div>
      <div className="bkg__spotlight w-[100%] h-[100%] min-h-[640px] overflow-auto"></div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 md:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start pb-[64px]">
          <RGBCard
            headerMobile={<JangCardMobileHeader />
            }
            footerMobile={<JangCardMobileFooter />
            }
            contentDesktop={
              <JangCardDesktopContent />
            }
          />
        </main>
      </div>
    </div>
  );
}
