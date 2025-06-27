"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: Array<{
    src: string;
    alt: string;
    title?: string;
  }>;
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                {image.src.startsWith("http") ? (
                  <Image src={image.src} alt={image.alt} fill className="object-cover" />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="text-4xl mb-2">{image.src}</div>
                      <p className="text-sm text-muted-foreground">{image.alt}</p>
                    </div>
                  </div>
                )}
                {image.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2">
                    <p className="text-sm font-semibold">{image.title}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
