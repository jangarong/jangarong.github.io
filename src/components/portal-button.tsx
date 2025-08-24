import { Button } from "@/components/ui/button"
import Link from "next/link";

interface PortalButtonProps {
    icon: JSX.Element;
    title: string;
    link: string;
}
export function PortalButton({ icon, title, link }: PortalButtonProps) {
    return (
        <Link href={link}>
            <Button variant="outline" className="w-[75px] h-[75px] flex flex-col">
                <div>
                    {icon}
                </div>
                <div className="text-xs">
                    {title}
                </div>
            </Button>
        </Link>
    );
}
