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

function ProductDetails({ className }: { className: string }) {
  return (
    <div className={cn("flex gap-24", className)}>
      <div className="w-1/2">
        <Carousel className="">
          <div className="bg-card-grey border-card-grey rounded-2xl border-2">
            <CarouselContent className=" ">
              <CarouselItem className="bg-card-grey border-card-grey rounded-2xl border-2">
                <div className="relative mx-auto flex h-96 w-48 items-center justify-center">
                  <Image
                    src={chairFront}
                    fill
                    alt="chair front"
                    className="place-self-center object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="bg-card-grey border-card-grey rounded-2xl border-2">
                <div className="relative mx-auto flex h-96 w-48 items-center justify-center">
                  <Image
                    src={chairSide}
                    fill
                    alt="chair side"
                    className="place-self-center object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="bg-card-grey border-card-grey rounded-2xl border-2">
                <div className="relative mx-auto flex h-96 w-48 items-center justify-center">
                  <Image
                    src={chairBack}
                    fill
                    alt="chair back"
                    className="place-self-center object-cover"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
          </div>

          <CarouselThumbnail>
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
          <CarouselPrevious className="top-1/3" />
          <CarouselNext className="top-1/3" />
        </Carousel>
      </div>

      <div className="flex flex-col justify-center">
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
          <div className="flex gap-8">
            <p>Product code : 12AC72</p>
            <div className="flex items-center gap-2 text-green-700">
              {/* <div className="h-4 w-4 rounded border"> */}
              <Check className="rounded border" size={20} />
              {/* </div> */}
              <span>In Stock</span>
            </div>
          </div>
          <div className="flex gap-4">
            <StarRating />
            <div className="flex items-center gap-1">
              <p>140 reviews 140</p>
              <span className="h-3 w-[0.1rem] rounded-full bg-black"></span>
              <p className="">43 sold</p>
            </div>
          </div>
          <ProductDetailsAddToCart />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
