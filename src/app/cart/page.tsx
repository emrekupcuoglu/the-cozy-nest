"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import CartItem from "@/features/Cart/CartItem";
import CheckoutSummary from "@/features/Checkout/CheckoutSummary";
import { useLocalStorageCart } from "@/hooks/useLocalStorage";
import { calculateShipping } from "@/lib/utils";
import Link from "next/link";

import { useEffect, useState } from "react";

function CartPage() {
  const { cart, addToCart, decrementQuantity } = useLocalStorageCart();

  const [subtotal, setSubtotal] = useState<number | null>(null);

  useEffect(() => {
    const x = cart
      ? cart?.reduce((acc, product) => {
          return (
            acc + product.quantity * (product.price - Number(product.discount))
          );
        }, 0)
      : 0;
    setSubtotal(x);
  }, [cart]);

  // const subtotal = cart
  //   ? cart?.reduce((acc, product) => {
  //       return acc + product.quantity * product.price;
  //     }, 0)
  //   : 0;

  const shipping = calculateShipping(subtotal || 0);
  const total = subtotal ? subtotal + shipping : 0;

  return (
    <div className="mx-auto flex max-w-7xl flex-col">
      <div className="grid gap-x-24 pt-8 xl:grid-cols-[2fr_1fr]">
        <Card className="bg-card-grey rounded-2xl border-none p-0">
          <CardHeader className="bg-background-hero rounded-t-2xl">
            <div className="grid grid-cols-[3fr_1fr_1fr_1fr] gap-x-24 p-4 text-lg text-white">
              <p className="justify-self-start">Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p className="justify-self-end">Total</p>
            </div>
          </CardHeader>
          <CardContent className="bg-card-grey rounded-b-2xl p-4">
            <div className="flex flex-col gap-4">
              {cart?.map((product, index) => {
                return (
                  <CartItem
                    addToCart={addToCart}
                    decrementQuantity={decrementQuantity}
                    product={product}
                    key={index}
                  />
                );
              })}
            </div>
          </CardContent>
        </Card>

        <CheckoutSummary
          shipping={shipping}
          subtotal={subtotal || 0}
          total={total}
        >
          <Link
            href="/checkout"
            className="bg-card-action rounded-full py-3 text-center text-xl text-white"
          >
            Proceed to checkout
          </Link>
        </CheckoutSummary>
      </div>
    </div>
  );
}

export default CartPage;
