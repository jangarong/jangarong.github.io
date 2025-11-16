
import styles from "./internal-banner.module.css"

export default function InternalBanner() {
    return (
        <div className={styles.bannerContainer}>
            {process.env.RESTRICTED_MODE == 'true' ? <div className={styles.banner}>
                RESTRICTED Ver.
            </div> : null}
        </div>
    )
}
