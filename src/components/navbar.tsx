import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarSeparator, MenubarItem, MenubarGroup } from "@/components/ui/menubar";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
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
        "link": "/blog",
        "enabled": true,
    },
]

// const menuButtons2 = [
//     {
//         "name": "Zodiac Tail (WebGL Version)",
//         "link": "/zodiactail/",
//         "enabled": true,
//     },
// ]

export function Navbar() {
    return (
        <div className="flex flex-row p-8 justify-between w-[100%] items-center">
            <Image src={"/assets/jang.svg"} alt={"JanG."} width={100} height={50} />
            <div className="items-center">
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger><HamburgerMenuIcon width={36} height={36} /></MenubarTrigger>
                        <MenubarContent>
                            <MenubarGroup>
                                {menuButtons.map(({ name, link, enabled }) => (
                                    <Link href={link} className={enabled ? "" : "pointer-events-none"} key={name}>
                                        <MenubarItem disabled={!enabled}>{name}</MenubarItem>
                                    </Link>
                                ))}
                            </MenubarGroup>
                            {/* <MenubarSeparator /> */}
                            {/* <MenubarGroup>
                                {menuButtons2.map(({ name, link, enabled }) => (
                                    <Link href={link} className={enabled ? "" : "pointer-events-none"} key={name}>
                                        <MenubarItem disabled={!enabled}>{name}</MenubarItem>
                                    </Link>
                                ))}
                            </MenubarGroup> */}
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
        </div>
    );
}
