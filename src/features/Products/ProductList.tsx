import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import ProductCard from "@/components/ProductCard";
import { Tables } from "@/lib/supabase/database.types";

function ProductList({ products }: { products: Tables<"Product">[] }) {
  function handleSelectChange(value: string) {
    const url = new URL(window.location.href);
    url.searchParams.set("sort", value);

    window.history.pushState(null, "", url.toString());
  }
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex items-center justify-between">
        <h2>Showing Result 1-15 of 400</h2>
        <div className="flex items-center gap-4">
          <p>Sort By:</p>
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Relevant" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevant">Relevant</SelectItem>
              <SelectItem value="high-to-low">Price high to low</SelectItem>
              <SelectItem value="low-to-high">Price low to high</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid max-w-full grid-cols-3 place-items-center gap-4 max-lg:grid-cols-2 max-md:gap-y-8 max-sm:grid-cols-1">
        {products.map((product, index) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}

export default ProductList;
