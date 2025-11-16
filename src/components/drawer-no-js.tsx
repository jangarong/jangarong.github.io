import { Card } from "@/components/ui/card";
import styles from "./drawer-no-js.module.css"
import Slide, { SlideDirection } from "./slide";

export default function DrawerNoJS({ children, open }: { children: React.ReactNode, open?:boolean }) {
    return (
        <Slide dir={open ? SlideDirection.UP : SlideDirection.UP_REVERSE}>
            <Card className={`${styles.card} pointer-events-none`}>
                <div className="bg-muted mx-auto mb-2 h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block">
                </div>
                <div className="width-[350px]">
                    {children}
                </div>
            </Card>
        </Slide>
    );
}
