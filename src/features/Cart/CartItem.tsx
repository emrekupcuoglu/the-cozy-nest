"use client";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { CartItemType, ProductType } from "@/types";
import { useState } from "react";
import { Input } from "@/components/ui/input";

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

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    if (value < 1) return;
    setQuantity(value);
  }

  if (quantity < 1) return null;

  return (
    <div className="flex items-center justify-between bg-white py-8 pl-4">
      <div className="flex items-center justify-between gap-16 max-md:flex-col max-md:justify-center max-md:gap-0">
        <div className="flex items-center gap-4">
          <div className="relative aspect-square h-24 border max-md:h-16">
            {product.url && <Image src={product.url} fill alt="" />}
          </div>

          <div className="flex items-center justify-center gap-56 max-lg:gap-20 max-md:flex-col max-md:justify-center max-md:gap-0">
            <div>
              <p className="text-sm">{product.name}</p>
              <p className="text-xs">Estimated shipping: In 3 days </p>
            </div>

            <div className="flex w-fit items-center justify-center gap-3 rounded-full px-3 py-2 max-md:self-start max-md:px-0">
              <Button
                onClick={() => handleDecrement()}
                className="hover:bg-card-action bg-card-grey rounded-full border text-center text-black max-md:h-5 max-md:w-5 max-md:p-1 max-md:text-xs"
                size="sm"
              >
                -
              </Button>
              <Input
                onChange={onChange}
                value={quantity}
                className="w-12 text-center text-black max-md:w-10 max-md:text-xs"
              ></Input>
              <Button
                onClick={() => handleIncrement()}
                className="hover:bg-card-action bg-card-grey rounded-full border text-black max-md:h-5 max-md:w-5 max-md:p-1 max-md:text-xs"
                size="sm"
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="self-end pr-2">
        <p>${total}</p>
      </div>
    </div>
  );
}

export default CartItem;
