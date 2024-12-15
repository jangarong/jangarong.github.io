import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const techImgs = [
  {
    src: "/technologies/next.svg",
    alt: "next.js",
    width: 150,
    height: 40,
  },
  {
    src: "/technologies/react.svg",
    alt: "react",
    width: 50,
    height: 50
  },
  {
    src: "/technologies/unity.png",
    alt: "unity",
    width: 150,
    height: 50
  },
  {
    src: "/technologies/sodility.svg",
    alt: "sodility",
    width: 50,
    height: 25
  },
  {
    src: "/technologies/lambda.svg",
    alt: "lambda",
    width: 50,
    height: 50
  },
  {
    src: "/technologies/docker.svg",
    alt: "docker",
    width: 200,
    height: 50
  },
  {
    src: "/technologies/js.svg",
    alt: "js",
    width: 50,
    height: 50
  },
  {
    src: "/technologies/java.svg",
    alt: "java",
    width: 40,
    height: 50
  },
  {
    src: "/technologies/golang.svg",
    alt: "golang",
    width: 100,
    height: 50
  },
  {
    src: "/technologies/ts.svg",
    alt: "ts",
    width: 50,
    height: 50
  },
  {
    src: "/technologies/kubernetes.svg",
    alt: "k8s",
    width: 200,
    height: 75
  },
  {
    src: "/technologies/aws.webp",
    alt: "aws",
    width: 100,
    height: 50
  },
  {
    src: "/technologies/gcp.svg",
    alt: "gcp",
    width: 50,
    height: 50
  },
  {
    src: "/technologies/otel.svg",
    alt: "otel",
    width: 150,
    height: 50
  },
  {
    src: "/technologies/terraform.svg",
    alt: "terraform",
    width: 100,
    height: 100
  },
  {
    src: "/technologies/elastic.svg",
    alt: "elastic",
    width: 100,
    height: 50
  },
];

export function TechnologiesMarquee() {
  return (
    <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {techImgs.slice(0, techImgs.length/2).map((imgProps) => (
          <div key={imgProps.alt} className="flex flex-col justify-center h-[100%] m-2">
            <Image {...imgProps} />
          </div>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s] flex justify-center align-center">
        {techImgs.slice(techImgs.length/2).map((imgProps) => (
          <div key={imgProps.alt} className="flex flex-col justify-center h-[100%] m-2">
            <Image {...imgProps} />
          </div>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
