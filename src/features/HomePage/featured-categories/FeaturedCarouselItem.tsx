import Image from "next/image";

import { StaticImport } from "next/dist/shared/lib/get-img-props";

function FeaturedCarouselItem({
  src,
  children,
}: {
  src: StaticImport | string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full p-12 max-md:px-1">
        <div className="relative aspect-square w-24 place-self-center rounded-full max-md:w-32 max-sm:w-28">
          <Image
            className="h-full w-full rounded-full object-contain"
            fill
            src={src}
            alt="clock"
          />
          <div className="-translate-1/2 bg-card-grey absolute left-1/2 top-1/2 -z-40 aspect-square h-44 rounded-full max-lg:h-36 max-md:h-52 max-sm:h-36"></div>
        </div>
      </div>

      {children}
    </div>
  );
}

export default FeaturedCarouselItem;
