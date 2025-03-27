"use client";
import { Tables } from "@/lib/supabase/database.types";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getProductsByFilterClient } from "@/lib/supabase/data-service-client";

function Products({ products }: { products: Tables<"Product">[] }) {
  const searchParams = useSearchParams();

  const color = searchParams.get("color")!;
  const material = searchParams.get("material")!;
  const priceLow = searchParams.get("low")!;
  const priceHigh = searchParams.get("high")!;

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    async function getProducts() {
      const products = await getProductsByFilterClient({
        color,
        material,
        priceLow,
        priceHigh,
      });

      setFilteredProducts(products);
    }

    getProducts();
  }, [color, material, priceLow, priceHigh]);

  return (
    <>
      <ProductFilter products={filteredProducts} />
      <ProductList products={filteredProducts} />
    </>
  );
}

export default Products;
