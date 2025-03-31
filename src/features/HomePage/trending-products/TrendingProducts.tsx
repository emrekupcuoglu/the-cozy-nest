"use client";
import { Button } from "@/components/ui/button";
import { HiArrowLongRight } from "react-icons/hi2";
import TrendingList from "./TrendingList";

import { TrendingProductsWithProduct } from "@/lib/supabase/data-service";
import { Tables } from "@/lib/supabase/database.types";
import Link from "next/link";
import { use, useState } from "react";

// type Product = {
//   src: string | StaticImport;
//   price: number;
//   name: string;
//   discount: number;
//   category: string;
//   favorite?: boolean;
// };

// const products: Product[] = [
//   {
//     src: sofa,
//     price: 250,
//     name: "Regal Sofa",
//     discount: 10,
//     favorite: true,
//     category: "bed room",
//   },

//   {
//     src: sofa2,
//     price: 150,
//     name: "Baby Blue Sofa",
//     discount: 20,
//     category: "bed room",
//   },
//   {
//     src: sofa3,
//     price: 350,
//     name: "Teal Sofa",
//     discount: 15,
//     category: "bed room",
//   },
//   {
//     src: chair,
//     price: 450,
//     name: "Leather Chair",
//     discount: 20,
//     favorite: true,
//     category: "bed room",
//   },
//   {
//     src: pillow,
//     price: 10,
//     name: "Comfy Pillow",
//     discount: 40,
//     category: "bed room",
//   },
//   {
//     src: sofa,
//     price: 250,
//     name: "Regal Sofa",
//     discount: 10,
//     favorite: true,
//     category: "living room",
//   },

//   {
//     src: sofa2,
//     price: 150,
//     name: "Baby Blue Sofa",
//     discount: 20,
//     category: "living room",
//   },
// ];

function TrendingProducts({
  productsPromise,
}: {
  productsPromise: Promise<TrendingProductsWithProduct>;
}) {
  const [activeTab, setActiveTab] = useState("bed room");

  const products = use(productsPromise);

  const productsByCategory: { [key: string]: Tables<"Product">[] } = {};

  products.forEach((product) => {
    if (productsByCategory[product.category]) {
      productsByCategory[product.category].push(product.Product);
    } else {
      productsByCategory[product.category] = [product.Product];
    }
  });

  return (
    <div className="flex flex-col pb-24 pt-16">
      <div className="flex justify-between pb-4 max-sm:flex-col max-sm:gap-4 max-sm:pb-6">
        <h2 className="text-3xl max-md:text-xl">
          <strong>Trending products for you!</strong>
        </h2>
        {/* <Link
          href="/products"
          className="bg-card-action flex items-center gap-2 rounded-lg px-4 text-white"
        > */}
        <Button
          className="bg-card-action flex w-fit items-center gap-2 rounded-lg px-4 text-white"
          asChild
        >
          <Link href="/products">
            View All Products
            <span>
              <HiArrowLongRight />
            </span>
          </Link>
        </Button>
        {/* </Link> */}
      </div>
      <div className="flex pb-8 max-sm:pb-2">
        {Object.keys(productsByCategory).map((category) => {
          return (
            <Button
              key={category}
              className={`capitalize ${
                activeTab === category
                  ? "scale-125 font-bold transition-transform"
                  : ""
              }`}
              variant="link"
              onClick={() => setActiveTab(category)}
            >
              {category}
            </Button>
          );
        })}
      </div>
      <TrendingList
        productsByCategory={productsByCategory}
        activeCategory={activeTab}
      />
    </div>
  );
}

export default TrendingProducts;
