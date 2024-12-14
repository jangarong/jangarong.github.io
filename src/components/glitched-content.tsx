import styles from './glitched-content.module.css';

interface GlitchedContentProps {
    children: JSX.Element
    height: number
    width: number
}

export default function GlitchedContent({ children, width, height }: GlitchedContentProps) {
    const tailwindCard = ` w-[${width}px] h-[${height}px] rounded-xl z-[-10] `
    return (
        <div>
            <div className={styles.glitchedContent + ` mt-[-${height}px]`}>{children}</div>
            <div className={styles.glitchedContent2 + tailwindCard + styles.bgGlitchRed} style={{"marginTop": `-${height}px`}}></div>
            <div className={styles.glitchedContent3 + tailwindCard + styles.bgGlitchBlue} style={{"marginTop": `-${height}px`}}></div>
        </div>
    );
}
