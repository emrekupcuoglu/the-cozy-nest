import Products from "@/features/Products/Products";
import { getAllProducts } from "@/lib/supabase/data-service";
import { Suspense } from "react";

async function ProductPage() {
  const products = await getAllProducts();

  return (
    <div className="flex flex-col">
      <div className="mx-auto flex max-w-7xl flex-col pt-24 max-md:pt-2">
        <div className="grid grid-cols-[minmax(0,1fr)_4fr] gap-x-24 max-md:grid-cols-1 max-md:gap-12">
          <Suspense fallback={<div>Loading...</div>}>
            <Products products={products} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
