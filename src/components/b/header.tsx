import styles from "./header.module.css"

export default function Header({ children }: { children: JSX.Element | String }) {
    return (
        <div className={styles.header}>
            {children}
        </div>
    )
}
