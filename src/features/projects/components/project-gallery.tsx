"use client";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Media } from "@/features/projects/types";

interface Props {
  images: Media[];
}

export function ProjectGallery({ images }: Readonly<Props>) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[plugin.current]}
      className="overflow-hidden rounded-lg lg:w-1/2"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="ml-0 sm:h-[302.8px]">
        {images.map((image) => (
          <CarouselItem key={image._key} className="relative aspect-video">
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
              loading="eager"
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
}
