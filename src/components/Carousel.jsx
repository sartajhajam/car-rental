import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Carousels = () => {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {profile?.map((slide,index) => {
            <CarouselItem key={index} style={{backgroundImage:`url(${slide.img})`}}
            className="w-full h-full bg-cover bg-center pt-5 bg-no-repeat relative pointer-events-none"
            >
              ...</CarouselItem>

          })}
          
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Carousel;
