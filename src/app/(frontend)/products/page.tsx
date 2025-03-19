import ProductFilter from "@/features/Products/ProductFilter";
import ProductList from "@/features/Products/ProductList";

function ProductPage() {
  return (
    <div className="flex flex-col">
      <div className="bg-background-hero pb-24">
        <div className="mx-auto flex max-w-7xl flex-col">
          <h1 className="text-center text-4xl text-white">Products</h1>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col pt-24">
        <div className="grid grid-cols-[1fr_4fr] gap-x-24">
          <ProductFilter />
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
