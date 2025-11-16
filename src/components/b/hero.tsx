import Image from "next/image";
import styles from "./hero.module.css"
import Link from "next/link";

export default function Hero() {
    return (
        <div className={"pt-[48px] flex flex-row justify-between w-[100%] " + styles.hero}>
            <div className={styles.logoOuterContainer}>
                <div className={styles.logoInnerContainer}>
                    <Image src="/assets/b/jang-penguin.png" alt="JanG." width={180} height={50} />
                </div>
            </div>
            <div className={styles.navbarOuterContainer}>
                <div className={styles.navbarInnerContainer}>
                    <div className={styles.navbar}>
                        <Link href="/b">
                            Home
                        </Link> | <Link href="/b/log" >
                            What&apos;s New?
                        </Link> | <Link href="/b/rojects" >
                            Projects
                        </Link> |
                        <Link href="/b/art">
                            Sketches
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
