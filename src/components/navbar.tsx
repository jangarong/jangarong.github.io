// import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarGroup, MenubarSeparator } from "@/components/ui/menubar";
// import { HamburgerMenuIcon } from "@radix-ui/react-icons";
// import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css"

// const menuButtons = [
//     {
//         "name": "Home",
//         "link": "/",
//         "enabled": true,
//     },
//     {
//         "name": "Contributions",
//         "link": "/contributions",
//         "enabled": false,
//     },
//     {
//         "name": "Resume",
//         "link": "/resume.pdf",
//         "enabled": true,
//     },
// ]

// const menuButtons2 = [
//     {
//         "name": "Side B",
//         "link": "/b",
//         "enabled": true,
//     },
// ]

export function Navbar() {
    return (
        <div className="flex flex-row p-8 justify-between w-[100%] items-center">
            <Link href="/b"><div className={styles.jang} /></Link>
            {/* <Image className="visible hover:invisible" src={"/assets/jang.svg"} alt={"JanG."} width={100} height={50} />
            <Image className="invisible hover:visible" src={"/assets/jang-penguin.png"} alt={"JanG."} width={100} height={50} /> */}
            <div className="width-[480px] flex justify-around gap-[24px] sm:gap-8 text-xl flex-col sm:flex-row mb-[-20px] sm:mb-[0px]">
                {/* <Link href="/#resume">Resume</Link> */}
                <Link href="/#contacts">Contacts</Link>
            </div>
            {/* <div className="items-center">
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
                            <MenubarSeparator />
                            <MenubarGroup>
                                {menuButtons2.map(({ name, link, enabled }) => (
                                    <Link href={link} className={enabled ? "" : "pointer-events-none"} key={name}>
                                        <MenubarItem disabled={!enabled}>{name}</MenubarItem>
                                    </Link>
                                ))}
                            </MenubarGroup>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div> */}
        </div>
    );
}
