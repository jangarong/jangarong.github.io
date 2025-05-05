import Image from "next/image";
import Link from "next/link";
import styles from "./experience.module.css";

const experiences = [
    {
        "name": "Google Cloud Security",
        "img": "/assets/companies/google.webp",
        "link": "https://cloud.google.com/security",
        "width": 100,
        "height": 25
    },
    {
        "name": "Trend Micro",
        "img": "/assets/companies/trendmicro.png",
        "link": "https://trendmicro.com/",
        "width": 150,
        "height": 25
    },
    {
        "name": "BlackBerry Cylance",
        "img": "/assets/companies/cylance.png",
        "link": "https://cylance.com/",
        "width": 125,
        "height": 25
    },
    {
        "name": "CertiK",
        "img": "/assets/companies/certik.png",
        "link": "https://certik.com",
        "width": 200,
        "height": 25
    },
]

export function Experience() {
    return (
        <div>

            <div className={`flex flex-wrap flex-row justify-center items-center`}>
                {experiences.map(({ name, img, link }) => (
                    <Link href={link} className={styles.experience + ' m-[48px]'} key={name}>
                        <Image
                            className={styles.expImg}
                            src={img}
                            alt={name}
                            width={200}
                            height={100}
                        />
                    </Link>))}
            </div>
        </div>
    )
}
