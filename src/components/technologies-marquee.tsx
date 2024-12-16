import Marquee from "@/components/ui/marquee";
import Image from "next/image";

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
    src: "/technologies/nginx.svg",
    alt: "nginx",
    width: 75,
    height: 75
  },
  {
    src: "/technologies/java.svg",
    alt: "java",
    width: 40,
    height: 50
  },
  {
    src: "/technologies/aws.webp",
    alt: "aws",
    width: 100,
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
  {
    src: "/technologies/git.svg",
    alt: "git",
    width: 100,
    height: 50
  },
];

export function TechnologiesMarquee() {
  const techDesktopImgs = [techImgs.slice(techImgs.length / 2), techImgs.slice(0, techImgs.length / 2)]
  const techMobileImgs = [techImgs.slice(0,techImgs.length / 4),
  techImgs.slice(techImgs.length / 4, techImgs.length / 2),
  techImgs.slice(techImgs.length / 2, 3 * techImgs.length / 4),
  techImgs.slice(3 * techImgs.length / 4)]
  return (
    <div>
      <div className="hidden md:block relative flex h-[275px] w-full flex-col items-center justify-center overflow-hidden rounded-lg no-border">
        <Marquee pauseOnHover className="[--duration:20s] flex justify-center align-center">
          {techDesktopImgs[0].map((imgProps) => (
            <div key={imgProps.alt} className="flex flex-col justify-center h-[100%] m-2">
              <Image {...imgProps} alt={imgProps.alt} />
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] flex justify-center align-center">
          {techDesktopImgs[1].map((imgProps) => (
            <div key={imgProps.alt} className="flex flex-col justify-center h-[100%] m-2">
              <Image {...imgProps} alt={imgProps.alt} />
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-lightblack"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-lightblack"></div>
      </div>
      <div className="block md:hidden relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg no-border py-5">
        <Marquee pauseOnHover className="[--duration:20s] flex justify-center align-center">
          {techMobileImgs[0].map((imgProps) => (
            <div key={imgProps.alt} className="flex flex-col justify-center h-[100%] m-2">
              <Image {...imgProps} alt={imgProps.alt} />
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] flex justify-center align-center">
          {techMobileImgs[1].map((imgProps) => (
            <div key={imgProps.alt} className="flex flex-col justify-center h-[100%] m-2">
              <Image {...imgProps} alt={imgProps.alt} />
            </div>
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s] flex justify-center align-center">
          {techMobileImgs[2].map((imgProps) => (
            <div key={imgProps.alt} className="flex flex-col justify-center h-[100%] m-2">
              <Image {...imgProps} alt={imgProps.alt} />
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] flex justify-center align-center">
          {techMobileImgs[3].map((imgProps) => (
            <div key={imgProps.alt} className="flex flex-col justify-center h-[100%] m-2">
              <Image {...imgProps} alt={imgProps.alt} />
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-lightblack"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-lightblack"></div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-lightblack"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-lightblack"></div>
      </div>
    </div>
  );
}
