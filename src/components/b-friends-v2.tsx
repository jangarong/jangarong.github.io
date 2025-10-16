import Image from "next/image";
import styles from "./b-friends-v2.module.css"
import Link from "next/link";

interface Friend {
    url: string;
    img?: string;
    name: string;
}

function FriendItem({ url, img, name }: Friend) {
    const actualImg = img ?? "/assets/b/friends/magichanics.png"
    return (
        <div className="w-[175px] h-[250px] sm:w-[125px] sm:h-[200px] flex flex-col align-center">
            <Link href={url}>
                <Image className="hidden sm:block border-white rounded-2xl border-2 " src={actualImg} alt={actualImg} width={125} height={125} />
                <Image className="block sm:hidden border-white rounded-2xl border-2 " src={actualImg} alt={actualImg} width={175} height={175} />
            </Link>
            <div className="size-xs text-center mt-[8px] text-white">
                {name}
            </div>
        </div>
    )
}

const frens: Friend[] = [
    {
        url: "https://liamy.webflow.io/",
        img: "/assets/b/friends/amy.png",
        name: "Amy Li"
    },
    {
        url: "https://instagram.com/aruvru",
        img: "/assets/b/friends/jackii.png",
        name: "Jackii"
    },
    {
        url: "https://www.linkedin.com/in/jasminekokkat/",
        name: "Jasmine Kokkat",
        img: "/assets/b/friends/jasmine.jpg"
    },
    {
        url: "https://jcaoj.github.io/",
        img: "/assets/b/friends/jay.png",
        name: "Jess Cao"
    },
    {
        url: "https://sayolko.carrd.co",
        img: "/assets/b/friends/kat2.png",
        name: "Kathleen An Padua",
    },
    {
        url: "https://www.linkedin.com/in/leo-wang14/",
        img: "/assets/b/friends/leo.png",
        name: "Leo Wang"
    },
    {
        url: "https://www.linkedin.com/in/meixuan-mexi-lu-5103621b6/",
        img: "/assets/b/friends/mexi.png",
        name: "Meixuan (Mexi) Lu"
    },
    {
        url: "https://qrn99.github.io",
        img: "/assets/b/friends/nancy.png",
        name: "Nancy (Ruo Ning) Qiu"
    },
    {
        url: "https://peter-pham.netlify.app/",
        img: "/assets/b/friends/peter.png",
        name: "Peter Pham"
    },
    {
        url: "https://epicsteve2.github.io/",
        img: "/assets/b/friends/stephen.png",
        name: "Stephen Guo"
    },
    {
        url: "https://www.linkedin.com/in/trinity-li/",
        img: "/assets/b/friends/trinity.png",
        name: "Trinity Li"
    },
    {
        url: "https://vivek.kandathil.ca/",
        name: "Vivek Kandathil",
        img: "/assets/b/friends/vivek.png"
    },
    {
        url: "https://www.linkedin.com/in/youcef-ben-ali-aa1969194/",
        name: "Youcef Ben Ali",
        img: "/assets/b/friends/youcef.jpg"
    }
]

export default function BFriendsV2() {
    return (
        <div className="flex justify-end w-[100%] text-white pb-[72px]">
            <div className="flex flex-col justify-center items-center w-[100%]">
                <div className={"flex flex-row justify-center mb-[-8px] h-[48px] w-[250px] sm:w-[270px] border-l-2 border-t-2 border-r-2 rounded-t-full bg-[#00519a] " + styles.darkshadowTab}>
                    <div className="bg-[#0099cc] w-[180px] sm:w-[180px] h-[42px] mt-[8px] rounded-t-full">

                    </div>
                </div>
                <div className={"w-[85%] rounded-2xl bg-[#0099cc] " + styles.darkshadow}>
                    <div className="font-semibold size-xl text-2xl text-center mt-[32px] mx-[64px]">
                        people who i think are very cool
                    </div>
                    <div className="size-sm text-sm text-center mb-[32px] mx-[64px]">mini friends list since i don't use social media</div>
                    <div className="mx-[32px] grid sm:grid-cols-3 gap-2 items-center justify-items-center mb-[32px] h-[450px] overflow-y-scroll">
                        {frens.map(({ url, img, name }) => <FriendItem url={url} img={img} name={name} key={name} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}
