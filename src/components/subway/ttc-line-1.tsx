import styles from "./ttc-line-1.module.css"

function SubwayStart() {
    return (
        <div>
            <div className={styles.dot}>awefawfawfawef</div>
        </div>
    )
}

function SubwayEnd() {
    return (
        <div>
            subway end
        </div>
    )
}

export default function TTCLine1({ items }: { items: JSX.Element[] }) {
    return (
        <ul>
            <li className={styles.line}><SubwayStart />{items[0]}</li>
            {items.slice(1, -1).map((item) => <li className={styles.line}>{item}</li>)}
            <li className={styles.line}><SubwayEnd />{items[items.length - 1]}</li>
        </ul>
    )
}
