import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { FaShoppingCart } from "react-icons/fa";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";

function ProductCard({
  product,
}: {
  product: {
    src: string | StaticImport;
    name: string;
    price: number;
    discount: number;
    favorite?: boolean;
  };
}) {
  return (
    <Card className="bg-card-grey w-full max-w-60 rounded-2xl border-none pb-0 text-white">
      <CardHeader className="flex-row items-center justify-between">
        <span className="bg-background-light rounded-full px-4 py-2">
          -{product.discount}%
        </span>
        <span className="rounded-full bg-white p-2">
          {product.favorite ? (
            <IoHeart className="fill-red-500 text-2xl" />
          ) : (
            <IoHeartOutline className="text-2xl text-black" />
          )}
        </span>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center">
        <div className="relative aspect-square h-36 max-h-36">
          <Image
            src={product.src}
            fill
            alt={`image of ${product.name}`}
            className="object-contain"
          />
        </div>
      </CardContent>
      <CardFooter className="bg-background-hero justify-between rounded-xl p-3">
        <div className="flex flex-col">
          <p>{product.name}</p>
          <p>${product.price}</p>
        </div>
        <div className="border-card-action rounded-full border-4 p-2">
          <FaShoppingCart className="fill-card-action" />
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
