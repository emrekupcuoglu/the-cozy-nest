import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

function HeroImage({
  src,
  isActive = false,
  onClick,
  category,
  quantity,
}: {
  src: string | StaticImport;
  isActive: boolean;
  onClick: () => void;
  category: string;
  quantity: number;
}) {
  return (
    <div
      onMouseEnter={onClick}
      className={`relative h-96 w-24 cursor-pointer rounded-xl transition-all duration-700 max-xl:h-72 max-xl:w-20 max-lg:w-32 max-md:w-20 max-sm:h-20 max-sm:w-screen max-sm:max-w-96 ${isActive ? "w-96 max-xl:w-72 max-lg:w-[30rem] max-md:w-72 max-sm:h-96" : ""}`}
    >
      <Image
        priority
        // className={`h-96 rounded-xl object-cover transition-all ${isActive ? "w-96" : "w-24"}`}
        className="rounded-xl object-cover"
        src={src}
        alt="image of furniture group"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill
      />

      {isActive && (
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-stone-700">
          <span className="absolute bottom-3 left-3">
            <strong>{category}</strong>
          </span>
          <span className="absolute bottom-3 right-3">{quantity}+ items</span>
        </div>
      )}
      {!isActive && (
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-stone-700">
          <span className="rotate-270 absolute bottom-3 left-3 w-44 origin-top-left text-start max-sm:rotate-0">
            <strong>{category}</strong>
          </span>
        </div>
      )}
    </div>
  );
}

export default HeroImage;
