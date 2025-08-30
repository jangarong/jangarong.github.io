import { Card } from "@/components/ui/card";
import styles from "./drawer-no-js.module.css"
import Slide from "./slide";

export default function DrawerNoJS({ children }: { children: React.ReactNode }) {
    return (
        <Slide down>
            <Card className={`${styles.card}`}>
                <div className="bg-muted mx-auto mb-8 h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block">
                </div>
                {children}
            </Card>
        </Slide>
    );
}
