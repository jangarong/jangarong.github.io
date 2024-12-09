import GlitchedContent from "@/components/glitched-content";
import PortalCardDesktopContent from "@/components/portal-card-desktop-content";
import PortalCardMobileFooter from "@/components/portal-card-mobile-footer";
import PortalCardMobileHeader from "@/components/portal-card-mobile-header";
import RGBCard from "@/components/rgb-card";
import TVStaticContent from "@/components/tv-static-content";

export default function Home() {
  return (
    <div>
      <div className="bkg__spotlight w-[100%] h-[100%] min-h-[640px] overflow-auto"></div>
      <TVStaticContent>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 md:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start pb-[64px]">
            <GlitchedContent>
              <RGBCard
                headerMobile={<PortalCardMobileHeader />
                }
                footerMobile={<PortalCardMobileFooter />
                }
                contentDesktop={
                  <PortalCardDesktopContent />
                }
              />
            </GlitchedContent>
          </main>
        </div>
      </TVStaticContent>
    </div>
  );
}
