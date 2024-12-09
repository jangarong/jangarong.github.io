import styles from './glitched-content.module.css';

export default function GlitchedContent({ children }: { children: JSX.Element }) {
    return (
        <div>
            <div className={styles.glitchedContent}>{children}</div>
            <div className={styles.glitchedContent}>{children}</div>
            <div className={styles.glitchedContent}>{children}</div>
        </div>
    );
}
