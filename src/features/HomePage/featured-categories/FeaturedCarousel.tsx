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
    <div>
      <Carousel className="">
        <div>
          <div className="flex items-center justify-end gap-8">
            <CarouselPrevious className="static w-16" variant={null} />
            <CarouselNext className="static w-16" />
          </div>
          <CarouselContent className="items-center">
            <CarouselItem className="basis-1/3">
              <FeaturedCarouselItem src={clockImg}>
                <CarouselLabel
                  title="Wall Clock"
                  description="Discover 20 items"
                />
              </FeaturedCarouselItem>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <FeaturedCarouselItem src={chairImg}>
                <CarouselLabel title="Chair" description="Discover 40 items" />
              </FeaturedCarouselItem>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <FeaturedCarouselItem src={pillowImg}>
                <CarouselLabel
                  title="Pillow"
                  description="Discover 120 items"
                />
              </FeaturedCarouselItem>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <FeaturedCarouselItem src={wardrobeImg}>
                <CarouselLabel
                  title="Wardrobe"
                  description="Discover 15 items"
                />
              </FeaturedCarouselItem>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <FeaturedCarouselItem src={tvStandImg}>
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
