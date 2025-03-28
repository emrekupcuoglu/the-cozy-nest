// import Button from "@/components/Button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function HeroText({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col max-lg:px-8 max-md:text-sm", className)}>
      <div>
        <span className="bg-background-light text-nowrap rounded-full px-2 py-1 uppercase max-md:text-xs">
          FURNITURE DESIGN IDEAS
        </span>
        <h1 className="pt-3 text-3xl max-sm:text-2xl">
          Modern Interior Design Studio
        </h1>
      </div>
      <p className="">
        Choosing the right furniture for your home online will add elegance and
        functionality to your interior while also being cost effective and long
        lasting.
      </p>

      {/* TEST BELOW */}

      <div className="flex items-center gap-4 pt-4 max-sm:flex-col max-sm:gap-1 max-sm:pb-12">
        <Link href="/products">
          <Button className="bg-action hover:bg-background-light rounded-full px-6 py-2">
            <div className="flex items-center gap-2">
              <span>Shop Now</span>
              <span>
                <FaRegArrowAltCircleRight />
              </span>
            </div>
          </Button>
        </Link>
        <Link href="">
          <Button variant="link" className="">
            Follow Instagram
          </Button>
        </Link>
      </div>
      <div className="mt-auto flex gap-16 pl-2 pt-4 text-xl max-sm:flex-col max-sm:gap-8">
        <div className="flex flex-col gap-2">
          <span>
            <strong>2500+</strong>
          </span>
          <span>Unique Styles</span>
        </div>
        <div className="flex flex-col gap-2">
          <span>
            <strong> 50.000</strong>
          </span>
          <span>Happy Customers</span>
        </div>
        <div className="flex flex-col gap-2">
          <span>
            <strong>300+</strong>
          </span>
          <span>Certified Outlets</span>
        </div>
      </div>
    </div>
  );
}

export default HeroText;
