import styles from './glitched-content.module.css';

interface GlitchedContentProps {
    children: JSX.Element
    height: number
    width: number
}

export default function GlitchedContent({ children, width, height }: GlitchedContentProps) {
    const tailwindCard = ` rounded-xl z-[-10] `
    return (
        <div>
            <div className={styles.glitchedContent}>{children}</div>
            <div className={styles.glitchedContent2 + tailwindCard + styles.bgGlitchRed} style={{"marginTop": `-${height}px`, height: `${height}px`, width: `${width}px`}}></div>
            <div className={styles.glitchedContent3 + tailwindCard + styles.bgGlitchBlue} style={{"marginTop": `-${height}px`, height: `${height}px`, width: `${width}px`}}></div>
        </div>
    );
}
