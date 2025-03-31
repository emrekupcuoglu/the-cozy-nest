import { Card, CardContent, CardFooter } from "@/components/ui/card";
import EndtimeWidget from "./EndtimeWidget";
import Image from "next/image";

import livingRoom from "@/../public/living-room.jpg";

import chair from "@/../public/chair-4.png";
import { Button } from "@/components/ui/button";
import { HiArrowLongRight } from "react-icons/hi2";

function FlashSale() {
  const discount = true;
  return (
    <div className="pb-24 max-xl:px-8 max-md:px-0">
      <div className="mx-auto grid max-w-5xl grid-cols-3 justify-items-center gap-x-12 gap-y-8 pb-24 max-lg:max-w-2xl max-lg:grid-cols-2 max-lg:gap-x-8 max-md:grid-cols-1">
        <Card className="bg-card-grey col-span-2 row-span-2 justify-center gap-0 border-none px-8 py-0 max-lg:px-4 max-md:col-span-1 max-md:row-span-1">
          <CardContent>
            <div className="flex flex-col content-between">
              <div className="flex items-center justify-between pb-16 max-lg:pb-8">
                <div className="flex flex-col gap-4 pr-8">
                  <h3 className="text-4xl font-semibold max-md:text-2xl">
                    Flash Sale!
                  </h3>
                  <p className="max-w-[45ch]">
                    Act fast to grab these amazing deals on select furniture
                    pieces in our limited time flash sale.
                  </p>
                </div>
                <EndtimeWidget />
              </div>
              <div className="flex items-center justify-between gap-16 pb-8">
                <div className="relative aspect-square w-full max-w-96">
                  <Image
                    fill
                    src={chair}
                    alt="chair"
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold">
                    Vintage leather armchair
                  </h3>
                  <p className="pb-4">
                    Bring a touch of retro charm to your home with this vintage
                    armchair. Sturdy and durable, it&apos;s perfect for a cozy
                    reading.
                  </p>
                  <Button className="bg-card-action self-center px-24 text-white">
                    Shop Now <HiArrowLongRight />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-bold">$599</p>

                {discount && (
                  <p className="text-sm font-bold text-gray-500 line-through">
                    $799
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card-grey w-full justify-center border-none p-8">
          <CardContent>
            <div className="flex justify-center">
              <div className="relative aspect-square w-24">
                <Image fill src={chair} alt="chair" className="object-cover" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="justify-between gap-12 p-0 max-md:justify-center">
            <p>Rustic Coffee Table</p>
            <Button className="bg-card-action text-white">
              <HiArrowLongRight />
            </Button>
          </CardFooter>
        </Card>
        <Card className="bg-card-grey w-full justify-center border-none p-8">
          <CardContent>
            <div className="flex justify-center">
              <div className="relative aspect-square w-24">
                <Image fill src={chair} alt="chair" className="object-cover" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="justify-between gap-12 p-0 max-md:justify-center">
            <p>Rustic Coffee Table</p>
            <Button className="bg-card-action text-white">
              <HiArrowLongRight />
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-2 justify-items-center gap-x-16 gap-y-8 max-md:grid-cols-1">
        <Card className="w-3/4 justify-self-end rounded-2xl border-none p-0 text-white shadow-none max-md:justify-self-center">
          <CardContent className="rounded-2xl p-0">
            <div className="relative aspect-square w-full rounded-2xl">
              <Image
                src={livingRoom}
                className="rounded-2xl object-cover"
                fill
                alt=""
              />
              <div className="absolute inset-0 z-50 flex flex-col rounded-2xl bg-gradient-to-b from-transparent to-stone-700 px-8 py-12 max-lg:px-4 max-lg:py-4">
                <div className="flex gap-2 pb-8 max-lg:pb-4">
                  <h3>Exclusive Offer</h3>
                  <span className="text-action rounded-full bg-white px-4 font-bold max-lg:px-2 max-lg:text-sm">
                    15% OFF
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg">Best Deals Online, Only This Week</h3>
                  <p className="text-nowrap">
                    Don&apos;t miss this limited offer
                  </p>
                  <Button className="bg-card-action self-start rounded-full p-4">
                    <div className="flex items-center gap-2 px-4">
                      Get Best Deals <HiArrowLongRight />
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card-grey w-3/4 justify-self-start rounded-2xl border-none p-0 max-md:justify-self-center">
          <CardContent className="p-0">
            <div className="w-full rounded-2xl px-8 py-12 max-lg:bg-blue-500 max-lg:py-6">
              <div className="flex flex-col">
                <h3 className="pb-4">Regular Offer</h3>
                <p className="pb-4 text-4xl font-semibold max-lg:text-2xl">
                  10% Cash-back on select cards!
                </p>
                <span className="pb-8">Max cashback: 100$</span>
                <Button className="bg-background-hero self-start rounded-full text-white">
                  <div className="flex items-center gap-2 px-4">
                    Shop Now
                    <HiArrowLongRight />
                  </div>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default FlashSale;
