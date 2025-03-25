"use client";
import { Button } from "@/components/ui/button";
import { HiArrowLongRight } from "react-icons/hi2";
import TrendingList from "./TrendingList";

import sofa from "@/../public/sofa.png";
import sofa2 from "@/../public/sofa-2.png";
import sofa3 from "@/../public/sofa-3.png";
import chair from "@/../public/chair-3.png";
import pillow from "@/../public/pillow-2.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useState } from "react";
import Link from "next/link";

type Product = {
  src: string | StaticImport;
  price: number;
  name: string;
  discount: number;
  category: string;
  favorite?: boolean;
};

const products: Product[] = [
  {
    src: sofa,
    price: 250,
    name: "Regal Sofa",
    discount: 10,
    favorite: true,
    category: "bed room",
  },

  {
    src: sofa2,
    price: 150,
    name: "Baby Blue Sofa",
    discount: 20,
    category: "bed room",
  },
  {
    src: sofa3,
    price: 350,
    name: "Teal Sofa",
    discount: 15,
    category: "bed room",
  },
  {
    src: chair,
    price: 450,
    name: "Leather Chair",
    discount: 20,
    favorite: true,
    category: "bed room",
  },
  {
    src: pillow,
    price: 10,
    name: "Comfy Pillow",
    discount: 40,
    category: "bed room",
  },
  {
    src: sofa,
    price: 250,
    name: "Regal Sofa",
    discount: 10,
    favorite: true,
    category: "living room",
  },

  {
    src: sofa2,
    price: 150,
    name: "Baby Blue Sofa",
    discount: 20,
    category: "living room",
  },
  // {
  //   src: sofa3,
  //   price: 350,
  //   name: "Teal Sofa",
  //   discount: 15,
  //   category: "living room",
  // },
  // {
  //   src: chair,
  //   price: 450,
  //   name: "Leather Chair",
  //   discount: 20,
  //   favorite: true,
  //   category: "living room",
  // },
  // {
  //   src: pillow,
  //   price: 10,
  //   name: "Comfy Pillow",
  //   discount: 40,
  //   category: "living room",
  // },
];

const productsByCategory: { [key: string]: Product[] } = {};

products.forEach((product) => {
  if (productsByCategory[product.category]) {
    productsByCategory[product.category].push(product);
  } else {
    productsByCategory[product.category] = [product];
  }
});

function TrendingProducts() {
  const [activeTab, setActiveTab] = useState("bed room");

  return (
    <div className="flex flex-col pb-24 pt-16">
      <div className="flex justify-between pb-4">
        <h2 className="text-3xl">
          <strong>Trending products for you!</strong>
        </h2>
        <Link
          href="/products"
          className="bg-card-action flex items-center gap-2 rounded-lg px-4 text-white"
        >
          <span>View All Products</span>
          <span>
            <HiArrowLongRight />
          </span>
        </Link>
      </div>
      <div className="flex pb-8">
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
