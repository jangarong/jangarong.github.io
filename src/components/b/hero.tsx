import Image from "next/image";
import styles from "./hero.module.css"

export default function Hero() {
    return (
        <div className={"pt-[48px] flex flex-row justify-between w-[100%] " + styles.hero}>
            {/* <div className="flex flex-col align-center justify-end">
                <div className="flex flex-col align-center justify-center w-[250px] p-[24px]">
                    <Image src="/assets/b/jang-penguin.png" alt="JanG." width={250} height={50} />
                    <div className="text-center mt-[4px]">coding penguins</div>
                </div>
            </div>
            <div className="hidden sm:block flex flex-col align-center justify-end">
                <Image src="/assets/b/pengdesk.png" alt="peng" className="mr-[32px]" width={250} height={100} />
            </div> */}
            <div className={styles.logoOuterContainer}>
                <div className={styles.logoInnerContainer}>
                    <Image src="/assets/b/jang-penguin.png" alt="JanG." width={250} height={50} />
                </div>
            </div>
            <div className={styles.navbarOuterContainer}>
                <div className={styles.navbarInnerContainer}>
                    <div className={styles.navbar}>
                        What's New | Projects | Sketches
                    </div>
                </div>
            </div>
        </div>
    )
}
