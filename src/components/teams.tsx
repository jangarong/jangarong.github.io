"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";

import { Card, CardContent, CardDescription } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Teams() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const teams = [
    {
      "company":"Google",
      "logo": "/companies/google.svg",
      "description": "Google Cloud Security"
    },
    {
      "company":"Trend Micro",
      "logo": "/companies/trend.svg",
      "description": "Trend Micro Email Security"
    },
    {
      "company":"BlackBerry",
      "logo": "/companies/blackberry.svg",
      "description": "BlackBerry CylanceMDR"
    },
    {
      "company":"CertiK",
      "logo": "/companies/certik.svg",
      "description": "CertiK Skynet"
    },
  ]

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {teams.map((team) => (
          <CarouselItem key={team.company}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center aspect-square justify-center p-6">
                  <Image
                        className="dark:invert p-4"
                        src={team.logo}
                        alt={team.company}
                        width={300}
                        height={300}
                        priority
                    />
                  <CardDescription>{team.description}</CardDescription>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
