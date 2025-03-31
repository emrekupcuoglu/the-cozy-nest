import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import newsletterBannerImg from "@/../public/newsletter-banner-img.jpg";
import Image from "next/image";
import { HiMail } from "react-icons/hi";

function NewsletterBanner() {
  return (
    <div className="pb-24">
      <Card className="bg-card-grey border-none px-8 max-sm:px-0">
        <CardContent className="">
          <div className="flex justify-between gap-12 max-md:flex-col max-md:gap-4">
            <div className="flex flex-col justify-center max-md:justify-between">
              <h2 className="pb-4 text-4xl capitalize max-md:text-2xl">
                Subscribe To Our Newsletter
              </h2>
              <p className="pb-8 max-md:text-sm">
                Subscribe to our newsletter today to receive the newest updates
                from us!
              </p>

              <div className="relative flex flex-col items-center justify-center gap-4 max-md:flex-row max-sm:flex-col">
                <Input
                  className="rounded-full bg-white py-6 pl-16"
                  type="email"
                  placeholder="Email"
                />
                <Button className="bg-card-action top-1.75 absolute right-4 rounded-full text-white max-lg:static max-lg:w-1/2 max-md:w-fit max-sm:w-full">
                  Subscribe
                </Button>
                <span className="bg-card-grey top-2.25 absolute left-4 rounded-full p-2">
                  <HiMail />
                </span>
              </div>
            </div>
            <div className="relative aspect-square h-96 rounded-2xl max-md:h-56 max-sm:h-64">
              <Image
                src={newsletterBannerImg}
                fill
                alt=""
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default NewsletterBanner;
