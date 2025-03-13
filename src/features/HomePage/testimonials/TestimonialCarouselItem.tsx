import { CarouselItem } from "@/components/ui/carousel";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

function TestimonialCarouselItem({ src }: { src: string | StaticImport }) {
  return (
    <CarouselItem className={`basis-1/2 px-6 py-4`}>
      <div className="bg-background-hero flex gap-8 rounded-2xl px-6 py-4">
        <div className="relative h-[34rem] w-full rounded-2xl">
          <Image
            src={src}
            alt="testimonial"
            fill
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="flex w-full flex-col justify-center gap-16 pt-8">
          <p className="">
            I recently purchased a beautiful living room set from The Cozy Nest,
            and I couldn't be happier with my purchase. The quality of the
            furniture is top-notch, it looks even better in person than online.
            And the customer service was excellent. I highly recommend The Cozy
            Nest to anyone looking for high-quality furniture at affordable
            prices.
          </p>
          <p>Michael P.</p>
        </div>
      </div>
    </CarouselItem>
  );
}

export default TestimonialCarouselItem;
