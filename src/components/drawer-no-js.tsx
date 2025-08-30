import { Card } from "@/components/ui/card";
import styles from "./drawer-no-js.module.css"

export default function DrawerNoJS({children} : {children: React.ReactNode}) {
    return (
        <Card className={`${styles.card}`}>
            
        {children}
        </Card>
    );
}
