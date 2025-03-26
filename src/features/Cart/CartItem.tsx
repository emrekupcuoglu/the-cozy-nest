"use client";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { useLocalStorageCart } from "@/hooks/useLocalStorage";
import { useState } from "react";
import { CartItemType, ProductType } from "@/types";

function CartItem({
  product,
  addToCart,
  decrementQuantity,
}: {
  product: CartItemType;
  addToCart: (product: ProductType) => void;
  decrementQuantity: (id: number) => void;
}) {
  const [quantity, setQuantity] = useState(product.quantity);
  const total = (product.price - Number(product.discount)) * quantity;

  function handleIncrement() {
    addToCart(product);
    setQuantity((prev) => prev + 1);
  }

  function handleDecrement() {
    decrementQuantity(product.id);
    setQuantity((prev) => prev - 1);
  }

  if (quantity < 1) return null;

  return (
    <div className="grid grid-cols-[3fr_1fr_1fr_1fr] place-items-center gap-x-8 text-lg">
      <div className="flex w-full items-center gap-2 justify-self-start">
        <div className="flex rounded-md bg-white p-2">
          <div className="relative aspect-square h-8">
            {product.url && <Image src={product.url} fill alt="" />}
          </div>
        </div>
        <p>{product.name}k</p>
      </div>

      <div className="w-full">
        <p className="text-start">{product.price - Number(product.discount)}</p>
      </div>
      <div className="bg-card-grey flex w-full items-center justify-start gap-3 rounded-full px-3 py-2">
        <Button
          onClick={() => handleDecrement()}
          className="hover:bg-card-action rounded-full bg-white text-black"
          size="sm"
        >
          -
        </Button>
        <span className="w-12 text-center">{quantity}</span>
        <Button
          onClick={() => handleIncrement()}
          className="hover:bg-card-action rounded-full bg-white text-black"
          size="sm"
        >
          +
        </Button>
      </div>

      <div>
        <p>${total}</p>
      </div>
    </div>
  );
}

export default CartItem;
