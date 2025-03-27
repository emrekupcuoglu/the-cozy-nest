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
  const { addToCart, cart, decrementQuantity } = useLocalStorageCart();

  // const { getItem, setItem } = useLocalStorage();

  // const itemQuantity =
  //   getItem("cart")?.find((cartItem: any) => cartItem.id === product.id)
  //     ?.quantity || 0;

  // const [quantity, setQuantity] = useState(itemQuantity);
  // productQuantityRef.current =
  //   getItem("cart")?.find((cartItem: any) => cartItem.id === product.id)
  //     ?.quantity || 0;

  function handleAddToCart(product: ProductType) {
    addToCart(product);
  }
  // function handleAddToCart(product: CartItemType) {
  //   setQuantity((prev) => prev + 1);
  //   setItem("cart", { ...product, quantity: product.quantity + 1 });
  // }

  return (
    <Card className="bg-card-grey w-full max-w-96 rounded-2xl border-none pb-0 text-white">
      <CardHeader className="flex-row items-center justify-between">
        <span className="bg-background-light rounded-full px-4 py-2">
          -{product.discount}%
        </span>
        <span className="rounded-full bg-white p-2">
          {favorite ? (
            <IoHeart className="fill-red-500 text-2xl" />
          ) : (
            <IoHeartOutline className="text-2xl text-black" />
          )}
        </span>
      </CardHeader>
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

      <CardFooter className="bg-background-hero mt-auto w-full justify-between rounded-xl p-3 capitalize">
        <div className="flex w-3/4 flex-col">
          <p className="w-4/4 overflow-hidden text-ellipsis text-nowrap">
            {product.name}
          </p>
          <p>${product.price}</p>
        </div>

        <Button
          onClick={
            () => handleAddToCart(product)
            // handleAddToCart({ ...product, quantity: quantity + 1 })
          }
          className="border-card-action rounded-full border-4 bg-transparent p-4"
        >
          <FaShoppingCart className="fill-card-action" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
