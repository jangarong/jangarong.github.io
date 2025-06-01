import Image from "next/image";
import styles from "./b-friends.module.css"
import Link from "next/link";

interface Friend {
    url: string;
    img?: string;
    name: string;
}

function FriendItem({ url, img, name }: Friend) {
    return (
        <div className="w-[125px] h-[200px] flex flex-col align-center">
            <Link href={url}>
                <Image className="border-white rounded-2xl border " src={img ?? "/assets/b/friends/magichanics.png"} alt={img ?? "/assets/b/friends/magichanics.png"} width={125} height={100} />
            </Link>
            <div className="size-xs text-center mt-[8px] text-white">
                {name}
            </div>
        </div>
    )
}

const frens: Friend[] = [
    {
        url: "https://www.linkedin.com/in/meixuan-mexi-lu-5103621b6/",
        img: "/assets/b/friends/meixuan.jpg",
        name: "Meixuan Lu"
    },
    {
        url: "https://www.linkedin.com/in/trinity-li/",
        img: "/assets/b/friends/trinity.jpg",
        name: "Trinity Li"
    },
    {
        url: "https://jcaoj.github.io/",
        img: "/assets/b/friends/jay.jpg",
        name: "Jess Cao"
    },
    {
        url: "https://epicsteve2.github.io/",
        img: "/assets/b/friends/stephen.jpg",
        name: "Stephen Guo"
    },
    {
        url: "https://liamy.webflow.io/",
        img: "/assets/b/friends/amy.jpg",
        name: "Amy Li"
    },
    {
        url: "https://www.linkedin.com/in/leo-wang14/",
        img: "/assets/b/friends/leo.jpg",
        name: "Leo Wang"
    },
    {
        url: "https://sayolko.carrd.co",
        img: "/assets/b/friends/kat.png",
        name: "Kathleen An Padua",
    },
    {
        url: "https://peter-pham.netlify.app/",
        img: "/assets/b/friends/peter.jpg",
        name: "Peter Pham"
    },
    {
        url: "https://vivek.kandathil.ca/",
        name: "Vivek Kandathil",
        img: "/assets/b/friends/vivek.jpg"
    }
].reverse()

export default function BFriends() {
    return (
        <div className="flex justify-end w-[100%]">
            <div className={"w-[85%] rounded-tl-2xl rounded-bl-2xl border-white border-l-2 border-t-2 border-b-2 bg-[#0099cc] " + styles.darkshadow}>
                <div className="font-semibold size-xl text-white text-2xl text-center mt-[32px] mx-[64px]">
                    People who I think are very cool
                </div>
                <div className="size-sm text-white text-sm text-center mb-[32px] mx-[64px]"> In the order when I have first met them B)</div>
                <div className="mx-[32px] grid sm:grid-cols-3 gap-2 items-center justify-items-center mb-[32px] h-[450px] overflow-y-scroll">
                    {frens.map(({ url, img, name }) => <FriendItem url={url} img={img} name={name} />)}
                </div>
            </div>
        </div>
    )
}
