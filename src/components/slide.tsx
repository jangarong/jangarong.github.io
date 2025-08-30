import styles from './slide.module.css';

export default function Slide({ children, down }: { children: JSX.Element, down?: boolean }) {
    return (
        <div className={!down ? styles.slideTop : styles.slideBottom}>
            {children}
        </div>
    );
}
