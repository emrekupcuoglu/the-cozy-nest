import { CarouselItem } from "@/components/ui/carousel";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

function TestimonialCarouselItem({ src }: { src: string | StaticImport }) {
  return (
    <CarouselItem className="max-md basis-1/2 px-6 py-4 max-xl:basis-full max-sm:pr-2">
      <div className="bg-background-hero flex items-center justify-center gap-8 rounded-2xl px-6 py-4 max-lg:gap-6 max-lg:px-6 max-md:flex-col max-md:gap-4 max-md:px-4 max-sm:gap-2">
        <div className="relative h-[34rem] w-full max-w-full rounded-2xl max-xl:h-96 max-md:h-56 max-md:w-1/2 max-sm:w-full">
          <Image
            src={src}
            alt="testimonial"
            fill
            className="rounded-2xl object-cover"
          />
        </div>

        <div className="flex w-full flex-col justify-center gap-16 pt-8 max-md:gap-8 max-md:pt-2 max-sm:gap-4">
          <p className="text-ellipsis">
            I recently purchased a beautiful living room set from The Cozy Nest,
            and I couldn&apos;t be happier with my purchase. The quality of the
            furniture is top-notch, it looks even better in person than online.
            And the customer service was excellent. I highly recommend The Cozy
            Nest to anyone looking for high-quality furniture at affordable
            prices.
          </p>
          <p className="max-md:ml-auto">Michael P.</p>
        </div>
      </div>
    </CarouselItem>
  );
}

export default TestimonialCarouselItem;
