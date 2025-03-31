import testimonial1 from "@/../public/testimonial-1.jpg";
import testimonial2 from "@/../public/testimonial-2.jpg";
import testimonial3 from "@/../public/testimonial-3.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCarouselItem from "./TestimonialCarouselItem";

function Testimonials() {
  return (
    <div className="pb-24">
      <div className="flex justify-between max-md:pb-2">
        <h2 className="text-4xl max-md:text-2xl">
          Don&apos;t take our word, see what are clients are saying
        </h2>
      </div>

      <div className="px-8 max-lg:px-16 max-md:px-8 max-sm:px-0">
        <Carousel className="mx-auto max-w-6xl text-white max-xl:max-w-3xl max-lg:max-w-2xl max-md:max-w-lg max-sm:max-w-80">
          <CarouselContent className="">
            <TestimonialCarouselItem src={testimonial3} />
            <TestimonialCarouselItem src={testimonial1} />
            <TestimonialCarouselItem src={testimonial2} />
          </CarouselContent>

          <div className="flex justify-center gap-8 pt-6">
            <CarouselPrevious className="max-lg:-left-7 max-md:static" />
            <CarouselNext className="max-lg:-right-3 max-md:static" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonials;
