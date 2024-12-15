import JangCardDesktopContent from "@/components/jang-card-desktop-content";
import JangCardMobileFooter from "@/components/jang-card-mobile-footer";
import JangCardMobileHeader from "@/components/jang-card-mobile-header";
import RGBCardDesktop from "@/components/rgb-card-desktop";
import RGBCardMobile from "@/components/rgb-card-mobile";

export default function Home() {
  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 md:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start pb-[64px]">
          <div className="hidden md:block">
            <RGBCardDesktop width={650} height={350}>
              <JangCardDesktopContent />
            </RGBCardDesktop>
          </div>
          <div className="visible md:hidden">
            <RGBCardMobile header={<JangCardMobileHeader />} footer={<JangCardMobileFooter />} width={350} height={650} />
          </div>
        </main>
      </div>
    </div>
  );
}
