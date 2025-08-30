/**
 * MIT License

Copyright (c) 2024 Dillion Verma

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

 */

// from: https://magicui.design/docs/templates/portfolio
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import Link from "next/link";
import Image from "next/image";

export interface WorkNode {
  title?: string;
  // location?: string;
  image?: string;
  description: JSX.Element;
  team?: string;
  dates: string;
  link?: string;
  // links?: readonly {
  //   icon: React.ReactNode;
  //   title: string;
  //   href: string;
  // }[];
}

export function HackathonCard({
  title,
  description,
  dates,
  // location,
  image,
  link,
  team,
  // links,
}: WorkNode) {
  const isSubExperience = !!title && !!image
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute left-[-70px] top-2 flex items-center justify-center bg-white rounded-full">
        {/* <Avatar className="border size-14 m-auto">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar> */}
        {isSubExperience ? <div className="border size-14 m-auto rounded-full">
          <Image className="object-contain rounded-full" src={image} alt={title} width={54} height={52} />
        </div> : false}
      </div>
      <div className="flex flex-1 flex-col justify-start gap-2">
        {dates && (
          <time className="text-sm text-muted-foreground italic leading-none">{dates}</time>
        )}
        {title && <h2 className="font-semibold text-lg leading-none">{title}</h2>}
        {team && <h3 className="text-md ">
          {link ? <a href={link}>{team}</a> : <div>{team}</div>}
        </h3>}
        {/* {location && (
          <p className="text-md text-muted-foreground leading-none">{location}</p>
        )} */}
        {description && (
          <span className="prose dark:prose-invert text-md text-muted-foreground">
            {description}
          </span>
        )}
      </div>
      {/* {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <Badge key={idx} title={link.title} className="flex gap-2">
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )} */}
    </li>
  );
}
