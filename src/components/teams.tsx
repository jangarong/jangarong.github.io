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
import { TeamCard } from "./team-card";

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
            <TeamCard {...team} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
