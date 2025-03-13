import TrendingCard from "./TrendingCard";

import sofa from "@/../public/sofa.png";
import sofa2 from "@/../public/sofa-2.png";
import sofa3 from "@/../public/sofa-3.png";
import chair from "@/../public/chair-3.png";
import pillow from "@/../public/pillow-2.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Product = {
  src: string | StaticImport;
  price: number;
  name: string;
  discount: number;
  category: string;
  favorite?: boolean;
};

function TrendingList({
  productsByCategory,
  activeCategory,
}: {
  productsByCategory: { [key: string]: Product[] };
  activeCategory: string;
}) {
  return (
    <div className="grid grid-cols-3 justify-items-center gap-y-16">
      {productsByCategory[activeCategory].map((product) => (
        <TrendingCard key={product.name} product={product} />
      ))}
    </div>
  );
}

export default TrendingList;
