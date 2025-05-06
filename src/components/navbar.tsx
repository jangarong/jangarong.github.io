import { Button } from "@/components/ui/button"
import Image from "next/image";
import Link from "next/link";

const menuButtons = [
    {
        "name": "Side A",
        "link": "/",
        "enabled": true,
    },
    {
        "name": "Side B",
        "link": "/",
        "enabled": false,
    },
    // {
    //     "name": "Zodiac Tail",
    //     "link": "/zodiactail",
    //     "enabled": true,
    // },
    // {
    //     "name": "Blog",
    //     "link": "/blog",
    //     "enabled": false,
    // },
]

export function Navbar() {
    return (
        <div className="flex flex-row p-8 justify-between w-[100vw] items-center">
            <Image src={"/assets/jang.svg"} alt={"JanG."} width={100} height={50} />
            <div className="items-center">
                {menuButtons.map(({name, link, enabled}) => (
                    <Link href={link} className={enabled ? "" : "pointer-events-none"} key={name}>
                        <Button variant="ghost" className="text-lg font-bold p-4" disabled={!enabled}>{name}</Button>
                    </Link>
                ))}
            </div>
        </div>
    );
}
