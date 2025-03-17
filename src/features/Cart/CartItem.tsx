"use client";
import Image from "next/image";

import clock from "@/../public/wall-clock.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function CartItem({
  product,
}: {
  product: {
    unitPrice: number;
    quantity: number;
  };
}) {
  const [quantity, setQuantity] = useState(product.quantity);
  const total = product.unitPrice * quantity;

  if (quantity < 1) return null;

  return (
    <div className="grid grid-cols-[3fr_1fr_1fr_1fr] place-items-center gap-x-8 text-lg">
      <div className="flex w-full items-center gap-2 justify-self-start">
        <div className="flex rounded-md bg-white p-2">
          <div className="relative aspect-square h-8">
            <Image src={clock} fill alt="" />
          </div>
        </div>
        <p>Wall Clock</p>
      </div>

      <div className="w-full">
        <p className="text-start">$80</p>
      </div>
      <div className="bg-card-grey flex w-full items-center justify-start gap-3 rounded-full px-3 py-2">
        <Button
          onClick={() => setQuantity((prev) => prev - 1)}
          className="hover:bg-card-action rounded-full bg-white text-black"
          size="sm"
        >
          -
        </Button>
        <span className="w-12 text-center">{quantity}</span>
        <Button
          onClick={() => setQuantity((prev) => prev + 1)}
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
