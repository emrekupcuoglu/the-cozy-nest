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
      <div className="flex justify-between">
        <h2 className="text-4xl">
          Don&apos;t take our word, see what are clients are saying
        </h2>
      </div>

      <div>
        <Carousel className="text-white">
          <CarouselContent className="">
            <TestimonialCarouselItem src={testimonial3} />
            <TestimonialCarouselItem src={testimonial1} />
            <TestimonialCarouselItem src={testimonial2} />
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonials;
