import Image from "next/image";
import styles from './the-world.module.css';

export function TheWorld() {
    return (
        <div>
            <div className={`hidden md:flex flex-wrap justify-evenly align-center`}>
                <Image
                    className={styles.circle}
                    src={"/assets/the-world.png"}
                    alt={"Tower of Babel"}
                    width={400}
                    height={600}
                />
                <Image
                    className={styles.ring + ` mt-[72px]`}
                    src={"/assets/ring.svg"}
                    alt={"JAN GARONG • SOFTWARE ENGINEER • CYBERSECURITY "}
                    width={500}
                    height={500}
                />
            </div>
            <div className={`flex md:hidden flex-wrap justify-evenly align-center  w-[100%] h-[100%] overflow-hidden`}>
                <Image
                    className={styles.circle}
                    src={"/assets/the-world.png"}
                    alt={"Tower of Babel"}
                    width={300}
                    height={400}
                />
                <Image
                    className={styles.ring + ` mt-[42px]`}
                    src={"/assets/ring.svg"}
                    alt={"JAN GARONG • SOFTWARE ENGINEER • CYBERSECURITY "}
                    width={400}
                    height={400}
                />
            </div>
        </div>
    )
}
