import Image from "next/image";

export default function JangHero() {
    return (
        <div className="flex flex-col items-center justify-center h-[100vh]">
            <div className="hidden md:block">
                <Image src={"/jang.svg"} alt={"Jan G."} width={400} height={200} className="dark:invert" />
            </div>
            <div className="block md:hidden">
                <Image src={"/jang.svg"} alt={"Jan G."} width={200} height={100} className="dark:invert" />
            </div>
            <div className="mt-[10px] text-xl md:text-3xl font-bold w-[350px] md:w-[650px] text-center opacity-75">a.k.a. Jan Garong</div>
            <div className="mt-[10px] md:mt-[25px] text-md md:text-xl w-[300px] md:w-[650px] text-center opacity-50">
                Just an average software developer specializing in making cybersecurity tools.
                Mainly working on scaling large distributed systems in the cloud with an interest in
                reading the latest hacks.
            </div>
        </div>
    );
}
