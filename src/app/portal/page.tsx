import GlitchedContent from "@/components/glitched-content";
import PortalCardDesktopContent from "@/components/portal-card-desktop-content";
import PortalCardMobileFooter from "@/components/portal-card-mobile-footer";
import PortalCardMobileHeader from "@/components/portal-card-mobile-header";
import RGBCardDesktop from "@/components/rgb-card-desktop";
import RGBCardMobile from "@/components/rgb-card-mobile";
import TVStaticContent from "@/components/tv-static-content";

export default function Home() {
  return (
    <div>
      <TVStaticContent>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 md:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start pb-[64px]">
            <div className="hidden md:block">
              <GlitchedContent
                height={350}
                width={650}>
                <RGBCardDesktop
                  height={350}
                  width={650}>
                  <PortalCardDesktopContent />
                </RGBCardDesktop>
              </GlitchedContent>
            </div>
            <div className="visible md:hidden">
              <GlitchedContent
                height={650}
                width={350}>
                <RGBCardMobile
                  height={650}
                  width={350}
                  header={<PortalCardMobileHeader />}
                  footer={<PortalCardMobileFooter />} />
              </GlitchedContent>
            </div>
          </main>
        </div>
      </TVStaticContent>
    </div>
  );
}
