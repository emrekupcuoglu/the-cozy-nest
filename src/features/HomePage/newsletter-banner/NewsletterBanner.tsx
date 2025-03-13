import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import newsletterBannerImg from "@/../public/newsletter-banner-img.jpg";
import Image from "next/image";
import { HiMail } from "react-icons/hi";

function NewsletterBanner() {
  return (
    <div className="pb-24">
      <Card className="bg-card-grey border-none px-8">
        <CardContent className="">
          <div className="flex justify-between">
            <div className="flex flex-col justify-center">
              <h2 className="pb-4 text-4xl capitalize">
                Subscribe To Our Newsletter
              </h2>
              <p className="pb-8">
                Subscribe to our newsletter today to receive the newest updates
                from us!
              </p>

              <div className="relative">
                <Input
                  className="rounded-full bg-white py-6 pl-16"
                  type="email"
                  placeholder="Email"
                />
                <Button className="bg-card-action top-1.75 absolute right-4 rounded-full text-white">
                  Subscribe
                </Button>
                <span className="bg-card-grey top-2.25 absolute left-4 rounded-full p-2">
                  <HiMail />
                </span>
              </div>
            </div>
            <div className="relative aspect-square h-96 rounded-2xl">
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
