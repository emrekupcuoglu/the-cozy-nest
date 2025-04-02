import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbnail,
  CarouselThumbnailItem,
} from "@/components/ui/carousel";

import Image from "next/image";

import chairBack from "@/../public/chair-details-back.png";
import chairFront from "@/../public/chair-details-front.png";
import chairSide from "@/../public/chair-details-side.png";
import StarRating from "@/components/StarRating";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import ProductDetailsAddToCart from "./ProductDetailsAddToCart";
import { Tables } from "@/lib/supabase/database.types";

function ProductDetails({
  product,
  className,
}: {
  product: Tables<"Product">;
  className: string;
}) {
  return (
    <div className={cn("flex gap-24 max-xl:flex-col", className)}>
      <div className="w-1/2 pl-16 max-xl:w-full max-xl:pl-0 max-md:px-12 max-sm:px-0">
        <Carousel className="max-lg:max-w-2/3 max-md:max-w-2/2 max-sm:max-w-3/3 mx-auto">
          <div className="bg-card-grey border-card-grey rounded-2xl border-2">
            <CarouselContent className="">
              <CarouselItem className="bg-card-grey border-card-grey rounded-2xl border-2">
                <div className="relative mx-auto flex h-96 w-48 items-center justify-center max-xl:w-60 max-lg:h-80 max-lg:w-60 max-md:h-64 max-md:w-32 max-sm:h-52 max-sm:w-20">
                  <Image
                    src={chairFront}
                    fill
                    alt="chair front"
                    className="place-self-center object-contain"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="bg-card-grey border-card-grey rounded-2xl border-2">
                <div className="relative mx-auto flex h-96 w-48 items-center justify-center max-xl:w-60 max-lg:h-80 max-lg:w-60 max-md:h-64 max-md:w-32 max-sm:h-52 max-sm:w-20">
                  <Image
                    src={chairSide}
                    fill
                    alt="chair side"
                    className="place-self-center object-contain"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="bg-card-grey border-card-grey rounded-2xl border-2">
                <div className="relative mx-auto flex h-96 w-48 items-center justify-center max-xl:w-60 max-lg:h-80 max-lg:w-60 max-md:h-64 max-md:w-32 max-sm:h-52 max-sm:w-20">
                  <Image
                    src={chairBack}
                    fill
                    alt="chair back"
                    className="place-self-center object-contain"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
          </div>

          <CarouselThumbnail className="max-lg:hidden">
            <CarouselThumbnailItem index={0}>
              <div className="border-action w-full rounded-2xl border">
                <div className="relative mx-auto flex h-48 w-24 items-center justify-center">
                  <Image
                    src={chairFront}
                    alt=""
                    fill
                    className="object-cover p-4"
                  />
                </div>
              </div>
            </CarouselThumbnailItem>
            <CarouselThumbnailItem index={1}>
              <div className="border-action w-full rounded-2xl border">
                <div className="relative mx-auto flex h-48 w-24 items-center justify-center">
                  <Image
                    src={chairSide}
                    alt=""
                    fill
                    className="object-cover p-4"
                  />
                </div>
              </div>
            </CarouselThumbnailItem>
            <CarouselThumbnailItem index={2}>
              <div className="border-action w-full rounded-2xl border">
                <div className="relative mx-auto flex h-48 w-24 items-center justify-center">
                  <Image
                    src={chairBack}
                    alt=""
                    fill
                    className="object-cover p-4"
                  />
                </div>
              </div>
            </CarouselThumbnailItem>
            <CarouselThumbnailItem index={3}>
              <div className="border-action w-full rounded-2xl border">
                <div className="relative mx-auto flex h-48 w-24 items-center justify-center">
                  <Image
                    src={chairBack}
                    alt=""
                    fill
                    className="object-cover p-4"
                  />
                </div>
              </div>
            </CarouselThumbnailItem>
            <CarouselThumbnailItem index={4}>
              <div className="border-action w-full rounded-2xl border">
                <div className="relative mx-auto flex h-48 w-24 items-center justify-center">
                  <Image
                    src={chairBack}
                    alt=""
                    fill
                    className="object-cover p-4"
                  />
                </div>
              </div>
            </CarouselThumbnailItem>
          </CarouselThumbnail>
          <div className="flex w-full items-center justify-center gap-4 pt-8">
            <CarouselPrevious className="top-1/3 max-lg:top-1/2 max-md:static" />
            <CarouselNext className="top-1/3 max-lg:top-1/2 max-md:static" />
          </div>
        </Carousel>
      </div>

      <div className="flex flex-col justify-center max-md:px-12">
        <div className="pb-8">
          <h2 className="pb-4 text-gray-400">Sleek Leather Chair</h2>
          <p>
            Real leather - Swivel Lounge Chair With Powerful Hydraulics. For
            Home, Office, Hotel, and Cafe
          </p>
        </div>
        <div>
          <div className="flex items-center gap-4">
            <p className="font-bold">130$</p>
            <p className="text-lg text-gray-400 line-through">$185</p>
          </div>
          <div className="flex gap-8 max-md:flex-col max-md:gap-2">
            <p>Product code : 12AC72</p>
            <div className="flex items-center gap-2 text-green-700">
              <Check className="rounded border" size={20} />

              <span>In Stock</span>
            </div>
          </div>
          <div className="flex gap-4 max-md:flex-col max-md:gap-2">
            <StarRating />
            <div className="flex items-center gap-1">
              <p>140 reviews 140</p>
              <span className="h-3 w-[0.1rem] rounded-full bg-black"></span>
              <p className="">43 sold</p>
            </div>
          </div>
          <ProductDetailsAddToCart product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
