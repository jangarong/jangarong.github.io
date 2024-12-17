import Image from "next/image"

export default function JangHero() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-[100vh] mt-[64px]">
                <div className="hidden md:block">
                    <div className="flex justify-between items-end mb-[64px]">
                        <Image src={"/jang.svg"} alt={"Jan G."} width={150} height={50} className="dark:invert" />
                        <p className="text-2xl">Cybersecurity&apos;s Software Developer</p>
                    </div>
                    <div className="rounded-[64px] w-[80vw] h-[760px] bg-[url('/screenshots/utsc-desktop.jpeg')] bg-cover bg-center bg-no-repeat"></div>
                </div>
                <div className="block md:hidden">
                <div className="flex flex-col justify-between items-center mb-[48px]">
                        <Image src={"/jang.svg"} alt={"Jan G."} width={100} height={25} className="dark:invert" />
                        <p className="text-md mt-[16px]">Cybersecurity&apos;s Software Developer</p>
                    </div>
                    <div className="rounded-[32px] w-[80vw] h-[760px] bg-[url('/screenshots/utsc-mobile.jpeg')] bg-cover bg-center bg-no-repeat"></div>
                </div>
                {/* <div className="mt-[10px] text-xl md:text-3xl font-bold w-[350px] md:w-[650px] text-center opacity-75">a.k.a. Jan Garong</div>
                <div className="mt-[10px] md:mt-[25px] text-md md:text-xl w-[300px] md:w-[650px] text-center opacity-50">
                    Just an average software developer specializing in large distributed systems in the cloud
                    with an interest in reading the latest hacks.
                </div> */}
                {/* <GlitchedContent
                    height={650}
                    width={350}>
                    <RGBCardMobile
                        height={650}
                        width={350}
                        header={<JangCardMobileHeader />}
                        footer={<JangCardMobileFooter />} />
                </GlitchedContent> */}
            </div>
        </div>
    );
}
