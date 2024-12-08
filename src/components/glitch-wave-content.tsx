import styles from './glitched-content.module.css';

// TODO: This is not even done

export default function GlitchWaveContent({ children }: { children: JSX.Element }) {
    return (
        <div className={styles.glitch}>
            <div className={styles.glitch_content}>
                {children}
            </div>
            <div className={styles.glitch__layers}>
                <div className={styles.glitch__layer}>{children}</div>
                <div className={styles.glitch__layer}>{children}</div>
                <div className={styles.glitch__layer}>{children}</div>
            </div>
        </div>
    );
}
