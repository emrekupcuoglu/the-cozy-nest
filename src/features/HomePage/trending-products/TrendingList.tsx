import ProductCard from "@/components/ProductCard";
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
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
}

export default TrendingList;
