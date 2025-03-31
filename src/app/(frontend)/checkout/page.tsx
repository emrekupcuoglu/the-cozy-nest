"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CheckoutForm from "@/features/Checkout/CheckoutForm";
import CheckoutSummary from "@/features/Checkout/CheckoutSummary";
import { useLocalStorageCart } from "@/hooks/useLocalStorage";
import { calculateShipping } from "@/lib/utils";

function CheckoutPage() {
  return (
    <div className="flex flex-col">
      <div className="bg-background-hero pb-8 text-center text-4xl font-bold uppercase text-white">
        <h1>Checkout</h1>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col pt-16 max-xl:px-8">
        <div className="flex w-full">
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
