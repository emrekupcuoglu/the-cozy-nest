import ProductCard from "@/components/ProductCard";
import { Tables } from "@/lib/supabase/database.types";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

function TrendingList({
  productsByCategory,
  activeCategory,
}: {
  productsByCategory: { [key: string]: Tables<"Product">[] };
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
