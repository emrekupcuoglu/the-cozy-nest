import Image from "next/image";

import clockImg from "@/../public/wall-clock.png";
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
      <div className="rounded-full p-12">
        <div className="relative aspect-square h-24 place-self-center rounded-full">
          <Image className="object-contain" fill src={src} alt="clock" />
          <div className="-translate-1/2 bg-card-grey absolute left-1/2 top-1/2 -z-40 aspect-square h-44 rounded-full"></div>
        </div>
      </div>

      {children}
    </div>
  );
}

export default FeaturedCarouselItem;
