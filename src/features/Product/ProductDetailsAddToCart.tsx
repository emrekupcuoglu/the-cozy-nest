"use client";
import { Button } from "@/components/ui/button";
import { useLocalStorageCart } from "@/hooks/useLocalStorage";
import { Tables } from "@/lib/supabase/database.types";
import { HeartIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function ProductDetailsAddToCart({ product }: { product: Tables<"Product"> }) {
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useLocalStorageCart();

  const router = useRouter();

  function handleAddToCart(quantity: number) {
    addToCart(product, quantity);
  }

  function handleBuyNow(quantity: number) {
    addToCart(product, quantity);
    router.push("/cart");
  }

  return (
    <div className="pt-16">
      <div className="bg-card-grey flex w-fit items-center justify-start gap-3 rounded-full px-3 py-2">
        <Button
          onClick={() => setQuantity((prev) => prev - 1)}
          className="hover:bg-card-action rounded-full bg-white text-black"
          size="sm"
        >
          -
        </Button>
        <span>{quantity}</span>
        <Button
          onClick={() => setQuantity((prev) => prev + 1)}
          className="hover:bg-card-action rounded-full bg-white text-black"
          size="sm"
        >
          +
        </Button>
      </div>
      <div className="flex gap-2 pt-4">
        <Button
          onClick={() => handleBuyNow(quantity)}
          className="bg-card-action hover:bg-action rounded-full px-10 hover:text-black"
        >
          Buy Now
        </Button>
        <Button
          onClick={() => handleAddToCart(quantity)}
          className="bg-background-hero hover:bg-background-light rounded-full px-10 hover:text-black"
        >
          Add To Cart
        </Button>

        <Button
          aria-label="add to favorites"
          className="hover:bg-card-action border-card-grey rounded-full border-2 bg-white text-black hover:shadow-lg hover:*:text-white"
          size="sm"
        >
          <HeartIcon />
        </Button>
      </div>
    </div>
  );
}

export default ProductDetailsAddToCart;
