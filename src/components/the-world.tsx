import Image from "next/image";
import styles from './the-world.module.css';

export function TheWorld() {
    return (
        <div>
            <div className={`flex flex-row justify-center align-center`}>
                <Image
                    className={styles.circle + " mt-[18px]"}
                    src={"/assets/the-world.png"}
                    alt={"stacked-buildings"}
                    width={200}
                    height={300}
                />
                <Image
                    className={styles.ring + ` mt-[54px] dark:invert`}
                    src={"/assets/ring.svg"}
                    alt={"JAN GARONG • SOFTWARE ENGINEER • CYBERSECURITY "}
                    width={250}
                    height={250}
                />
            </div>
            {/* <div className={`flex md:hidden flex-wrap justify-evenly align-center  w-[100%] h-[100%] overflow-hidden`}>
                <Image
                    className={styles.circle}
                    src={"/assets/the-world.png"}
                    alt={"Tower of Babel"}
                    width={250}
                    height={350}
                />
                <Image
                    className={styles.ring + ` mt-[28px]`}
                    src={"/assets/ring.svg"}
                    alt={"JAN GARONG • SOFTWARE ENGINEER • CYBERSECURITY "}
                    width={350}
                    height={350}
                />
            </div> */}
        </div>
    )
}
