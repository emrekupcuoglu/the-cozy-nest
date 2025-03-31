import ProductCard from "@/components/ProductCard";
import { Tables } from "@/lib/supabase/database.types";

function TrendingList({
  productsByCategory,
  activeCategory,
}: {
  productsByCategory: { [key: string]: Tables<"Product">[] };
  activeCategory: string;
}) {
  return (
    <div className="grid grid-cols-3 justify-items-center gap-x-8 gap-y-16 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-8">
      {productsByCategory[activeCategory].map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
}

export default TrendingList;
