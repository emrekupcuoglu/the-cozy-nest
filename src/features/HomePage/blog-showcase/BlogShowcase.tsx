import { Button } from "@/components/ui/button";
import { HiArrowLongRight } from "react-icons/hi2";
import BlogCard from "./BlogCard";

import kitchen from "@/../public/kitchen.jpg";
import livingRoom from "@/../public/living-room.jpg";
import bedroom from "@/../public/bedroom.jpg";

function BlogShowcase() {
  return (
    <div className="flex flex-col gap-8 pb-24 max-lg:px-8">
      <div className="flex items-center justify-between gap-16 max-sm:flex-col max-sm:gap-2">
        <h2 className="text-4xl max-lg:text-3xl max-md:text-2xl">
          Explore Our Latest Blog
        </h2>
        <Button size="lg" className="bg-action rounded-full text-lg">
          View All Posts <HiArrowLongRight />
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-16 max-md:grid-cols-2 max-md:gap-8 max-sm:grid-cols-1 max-sm:gap-4">
        <div className="flex flex-col gap-6 max-sm:gap-2">
          <BlogCard src={kitchen} />
          <div>
            <h3 className="font-bold capitalize">
              First time home owner ideas
            </h3>
            <p className="text-sm">
              by <span className="font-semibold">Stacy Green</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 max-sm:gap-2">
          <BlogCard src={bedroom} />
          <div>
            <h3 className="font-bold capitalize">
              First time home owner ideas
            </h3>
            <p className="text-sm">
              by <span className="font-semibold">Stacy Green</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 max-sm:gap-2">
          <BlogCard src={livingRoom} />
          <div>
            <h3 className="font-bold capitalize">
              First time home owner ideas
            </h3>
            <p className="text-sm">
              by <span className="font-semibold">Stacy Green</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogShowcase;
