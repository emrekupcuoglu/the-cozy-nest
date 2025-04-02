"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
    <div className="mx-auto flex w-full flex-col pt-16">
      <div className="flex gap-4 max-md:flex-col">
        <Card className="bg-card-grey basis-full rounded-2xl border-none p-0">
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
          <Button
            asChild
            className="bg-card-action hover:bg-action mx-auto rounded-md py-3 text-center text-xl text-white max-lg:ml-auto max-lg:mr-4"
          >
            <Link href="/checkout" className="max-md:text-sm">
              Proceed to checkout
            </Link>
          </Button>
        </CheckoutSummary>
      </div>
    </div>
  );
}

export default CartPage;
