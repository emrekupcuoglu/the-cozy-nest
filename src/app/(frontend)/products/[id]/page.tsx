import ProductDetails from "@/features/Product/ProductDetails";
import ProductInformation from "@/features/Product/ProductInformation";
import { getProductById } from "@/lib/supabase/data-service";

async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const product = await getProductById(Number(id));

  return (
    <div className="flex flex-col pb-72 max-md:pb-8">
      <div className="bg-background-hero pb-24">
        <div className="mx-auto flex max-w-7xl flex-col">
          <h1 className="text-center text-4xl text-white">Products</h1>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col pt-24">
        <ProductDetails className="pb-24 max-md:pb-8" product={product} />
        {/* <ProductInformation product={product} /> */}
      </div>
    </div>
  );
}

export default ProductPage;
