import {
  Carousel,
  CarouselContent,
  CarouselDotButton,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FeaturedCarouselItem from "./FeaturedCarouselItem";

import clockImg from "@/../public/wall-clock.png";
import chairImg from "@/../public/chair-2.png";
import pillowImg from "@/../public/pillow.png";
import wardrobeImg from "@/../public/wardrobe.png";
import tvStandImg from "@/../public/tv-stand.png";
import CarouselLabel from "./CarouselLabel";

function FeaturedCarousel() {
  return (
    <div className=" ">
      <Carousel className="mx-auto max-w-4xl max-lg:max-w-3xl max-md:max-w-xl max-sm:max-w-xs">
        <div>
          <div className="flex items-center justify-end gap-8 max-md:justify-center">
            <CarouselPrevious className="top-4/11 static w-16 max-md:absolute max-md:w-12 max-sm:left-0" />
            <CarouselNext className="top-4/11 static w-16 max-md:absolute max-md:w-12 max-sm:right-0" />
          </div>
          <CarouselContent className="">
            <CarouselItem className="basis-1/3 max-md:basis-1/2 max-sm:basis-full">
              <FeaturedCarouselItem category="clock" src={clockImg}>
                <CarouselLabel
                  title="Wall Clock"
                  description="Discover 20 items"
                />
              </FeaturedCarouselItem>
            </CarouselItem>
            <CarouselItem className="basis-1/3 max-md:basis-1/2 max-sm:basis-full">
              <FeaturedCarouselItem category="chair" src={chairImg}>
                <CarouselLabel title="Chair" description="Discover 40 items" />
              </FeaturedCarouselItem>
            </CarouselItem>
            <CarouselItem className="basis-1/3 max-md:basis-1/2 max-sm:basis-full">
              <FeaturedCarouselItem category="pillow" src={pillowImg}>
                <CarouselLabel
                  title="Pillow"
                  description="Discover 120 items"
                />
              </FeaturedCarouselItem>
            </CarouselItem>
            <CarouselItem className="basis-1/3 max-md:basis-1/2 max-sm:basis-full">
              <FeaturedCarouselItem category="cabinet " src={wardrobeImg}>
                <CarouselLabel
                  title="Wardrobe"
                  description="Discover 15 items"
                />
              </FeaturedCarouselItem>
            </CarouselItem>
            <CarouselItem className="basis-1/3 max-md:basis-1/2 max-sm:basis-full">
              <FeaturedCarouselItem category="drawer" src={tvStandImg}>
                <CarouselLabel
                  title="Drawers"
                  description="Discover 75 items"
                />
              </FeaturedCarouselItem>
            </CarouselItem>
          </CarouselContent>

          <div className="mt-10 flex items-center justify-center gap-8">
            <CarouselDotButton className="hover:bg-background-light" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default FeaturedCarousel;
