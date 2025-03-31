"use client";
import CheckoutForm from "@/features/Checkout/CheckoutForm";

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
