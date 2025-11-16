import Image from "next/image";


export default function Hero() {
    return (
        <div className="base-banner pt-[48px] flex flex-row justify-between w-[100%]">
            <div className="flex flex-col align-center justify-end">
                <div className="flex flex-col align-center justify-center w-[250px] p-[24px]">
                    <Image src="/assets/b/jang-penguin.png" alt="JanG." width={250} height={50} />
                    <div className="text-center mt-[4px]">coding penguins</div>
                </div>
            </div>
            <div className="hidden sm:block flex flex-col align-center justify-end">
                <Image src="/assets/b/pengdesk.png" alt="peng" className="mr-[32px]" width={250} height={100} />
            </div>
        </div>
    )
}
