import styles from './glitched-content.module.css';

export default function GlitchedContent({ children }: { children: JSX.Element }) {
    const tailwindCard = " w-[350px] h-[650px] md:w-[650px] md:h-[350px] rounded-xl z-[-10] "
    return (
        <div>
            <div className={styles.glitchedContent + ""}>{children}</div>
            <div className={styles.glitchedContent + tailwindCard + styles.bgGlitchRed}></div>
            <div className={styles.glitchedContent + tailwindCard + styles.bgGlitchBlue}></div>
        </div>
    );
}
