import styles from "./ttc-line-1.module.css"

function SubwayStart() {
    return (
        <div>
            <div className={styles.dot}></div>
            <div className={styles.dotBgStart}></div>
            <div className={styles.dotBgStart2}></div>
        </div>
    )
}

function SubwayMiddle() {
    return (
        <div>
            <div className={styles.dot}></div>
            <div className={styles.dotBg}></div>
        </div>
    )
}

function SubwayEnd() {
    return (
        <div>
            <div className={styles.dot}></div>
            <div className={styles.dotBgEnd}></div>
        </div>
    )
}

function SubwayItem({ children }: { children: JSX.Element }) {
    return (
        <div className={styles.lineItem}>
            {children}
        </div>
    )
}

export default function TTCLine1({ items }: { items: JSX.Element[] }) {
    let count = 0
    return (
        <ul className={styles.line}>
            <li className={styles.line} key={count++}><SubwayStart /><SubwayItem>{items[0]}</SubwayItem></li>
            {items.slice(1, -1).map((item) => <li className={styles.line} key={count++}>
                <SubwayMiddle /><SubwayItem>{item}</SubwayItem></li>)}
            <li className={styles.line} key={count++}><SubwayEnd /><SubwayItem>{items[items.length - 1]}</SubwayItem></li>
        </ul>
    )
}
