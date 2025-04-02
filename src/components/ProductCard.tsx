"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

import { useLocalStorageCart } from "@/hooks/useLocalStorage";
import { Tables } from "@/lib/supabase/database.types";
import { ProductType } from "@/types";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { Button } from "./ui/button";

function ProductCard({
  product,
  favorite = false,
}: {
  product: Tables<"Product">;
  favorite?: boolean;
}) {
  const { addToCart } = useLocalStorageCart();

  function handleAddToCart(product: ProductType) {
    addToCart(product);
  }

  return (
    <Card className="bg-card-grey w-full max-w-96 rounded-2xl border-none pb-0 text-white transition-all hover:scale-110">
      <CardHeader className="flex-row items-center justify-between">
        {product.discount && product.discount > 0 ? (
          <span className="bg-background-light rounded-full px-4 py-2">
            -{product.discount}%
          </span>
        ) : null}
        <span className="ml-auto rounded-full bg-white p-2">
          {favorite ? (
            <IoHeart className="fill-red-500 text-2xl" />
          ) : (
            <IoHeartOutline className="text-2xl text-black" />
          )}
        </span>
      </CardHeader>
      <Link href={"products/" + product.id}>
        <CardContent className="flex flex-col items-center justify-center">
          <div className="relative aspect-square h-36 max-h-36">
            {product.url && (
              <Image
                src={product.url}
                fill
                sizes="300px"
                alt={`image of ${product.name}`}
                className="object-contain"
              />
            )}
          </div>
        </CardContent>
      </Link>
      <CardFooter className="bg-background-hero mt-auto w-full justify-between rounded-xl p-3 capitalize">
        <div className="flex w-3/4 flex-col">
          <p className="w-4/4 overflow-hidden text-ellipsis text-nowrap">
            {product.name}
          </p>
          <p>${product.price}</p>
        </div>

        <Button
          onClick={() => handleAddToCart(product)}
          className="border-card-action rounded-full border-4 bg-transparent p-4"
          aria-label="add to cart"
        >
          <FaShoppingCart className="fill-card-action" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
