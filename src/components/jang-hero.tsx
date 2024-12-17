import Image from "next/image"

export default function JangHero() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center mt-[64px]">
                <div className="hidden md:block">
                    <div className="flex justify-between items-end mb-[64px]">
                        <Image src={"/jang.svg"} alt={"Jan G."} width={150} height={50} className="dark:invert" />
                        <p className="text-2xl">Cybersecurity&apos;s Software Developer</p>
                    </div>
                    <div className="rounded-[64px] w-[80vw] h-[680px] bg-[url('/screenshots/utsc-desktop.jpeg')] bg-cover bg-center bg-no-repeat"></div>
                </div>
                <div className="block md:hidden">
                <div className="flex flex-col justify-between items-center mb-[48px]">
                        <Image src={"/jang.svg"} alt={"Jan G."} width={100} height={25} className="dark:invert" />
                        <p className="text-md mt-[16px]">Cybersecurity&apos;s Software Developer</p>
                    </div>
                    <div className="rounded-[32px] w-[80vw] h-[680px] bg-[url('/screenshots/utsc-mobile.jpeg')] bg-cover bg-center bg-no-repeat"></div>
                </div>
            </div>
        </div>
    );
}
