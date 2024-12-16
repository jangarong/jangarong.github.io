import GlitchedContent from "./glitched-content";
import RGBCardMobile from "./rgb-card-mobile";
import Spotlight from "./spotlight";
import JangCardMobileHeader from "./jang-card-mobile-header";
import JangCardMobileFooter from "./jang-card-mobile-footer";

export default function JangHero() {
    return (
        <Spotlight>
            <div className="flex flex-col items-center justify-center h-[100vh]">
                {/* <div className="hidden md:block">
                <Image src={"/jang.svg"} alt={"Jan G."} width={400} height={200} className="dark:invert" />
            </div>
            <div className="block md:hidden">
                <Image src={"/jang.svg"} alt={"Jan G."} width={200} height={100} className="dark:invert" />
            </div>
            <div className="mt-[10px] text-xl md:text-3xl font-bold w-[350px] md:w-[650px] text-center opacity-75">a.k.a. Jan Garong</div>
            <div className="mt-[10px] md:mt-[25px] text-md md:text-xl w-[300px] md:w-[650px] text-center opacity-50">
                Just an average software developer specializing in large distributed systems in the cloud 
                with an interest in reading the latest hacks.
            </div> */}
                <GlitchedContent
                    height={650}
                    width={350}>
                    <RGBCardMobile
                        height={650}
                        width={350}
                        header={<JangCardMobileHeader />}
                        footer={<JangCardMobileFooter />} />
                </GlitchedContent>
            </div>
        </Spotlight>
    );
}
