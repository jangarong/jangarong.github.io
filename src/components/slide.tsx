import styles from './slide.module.css';

export default function TVStaticContent({ children }: { children: JSX.Element }) {
    return (
        <div className={styles.slideTop + " "}>
            {children}
        </div>
    );
}
