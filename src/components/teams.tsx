"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";

import { Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function Teams() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const teams = [
    {
      "company": "Google",
      "logo": "/companies/google.svg",
      "description": "Google Cloud Security",
      "enabled": false
    },
    {
      "company": "Trend Micro",
      "logo": "/companies/trend.svg",
      "description": "Trend Micro Email Security",
      "enabled": true
    },
    {
      "company": "BlackBerry",
      "logo": "/companies/blackberry.svg",
      "description": "BlackBerry CylanceMDR",
      "enabled": true
    },
    {
      "company": "CertiK",
      "logo": "/companies/certik.svg",
      "description": "CertiK Skynet",
      "enabled": true
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
                <CardFooter className="-mt-12 flex justify-end">
                  <Button variant="outline" size="icon">
                    <ChevronRight />
                  </Button>
                </CardFooter>
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
