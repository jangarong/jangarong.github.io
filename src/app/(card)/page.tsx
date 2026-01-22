import JangCardMobileFooter from "@/components/jang-card-mobile-footer";
import JangCardMobileHeader from "@/components/jang-card-mobile-header";
import RGBCardMobile from "@/components/rgb-card-mobile";
import { TheWorld } from "@/components/the-world";

export default function Home() {
  return (
    <RGBCardMobile className="" header={<JangCardMobileHeader />} body={
      <div className="dark:invert">
        <TheWorld />
      </div>
    } footer={<JangCardMobileFooter />} width={350} height={600} />
  );
}
