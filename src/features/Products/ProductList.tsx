import {
  SelectValue,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/lib/supabase/data-service";

async function ProductList() {
  const products = await getAllProducts();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h2>Showing Result 1-15 of 400</h2>
        <div className="flex items-center gap-4">
          <p>Sort By:</p>
          <Select>
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

      <div className="grid grid-cols-3 gap-4">
        {products.map((product, index) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}

export default ProductList;
