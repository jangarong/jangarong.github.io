import { Experience } from "@/components/experience";
import { TheWorld } from "@/components/the-world";
import styles from "./hero.module.css"

export default function Hero() {
    return (
        <div className="h-[100%]">
            <div className={"flex justify-center items-center h-[100%] bg-[red]"}>
                <TheWorld />
            </div>
            <div className="bg-[green]">
                <div className={styles.spacedTitle}>
                    CONTRIBUTIONS
                </div>
                <Experience />
            </div>
        </div>
    );
}
