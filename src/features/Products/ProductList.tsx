import {
  SelectValue,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import sofa from "@/../public/sofa.png";
import ProductCard from "@/components/ProductCard";

function ProductList() {
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

      <div className="grid grid-cols-4 gap-4">
        <ProductCard
          product={{ name: "test", price: 150, discount: 0, src: sofa }}
        />
        <ProductCard
          product={{ name: "test", price: 150, discount: 0, src: sofa }}
        />
        <ProductCard
          product={{ name: "test", price: 150, discount: 0, src: sofa }}
        />
        <ProductCard
          product={{ name: "test", price: 150, discount: 0, src: sofa }}
        />
        <ProductCard
          product={{ name: "test", price: 150, discount: 0, src: sofa }}
        />
      </div>
    </div>
  );
}

export default ProductList;
