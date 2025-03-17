import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CartItem from "@/features/Cart/CartItem";

const products = [
  { quantity: 1, unitPrice: 80 },
  { quantity: 1, unitPrice: 80 },
  { quantity: 1, unitPrice: 85 },
];

function CartPage() {
  const subtotal = products.reduce((acc, product) => {
    return acc + product.quantity * product.unitPrice;
  }, 0);

  const shipping = subtotal > 300 ? 0 : 15;
  const total = subtotal + shipping;

  return (
    <div className="mx-auto flex max-w-7xl flex-col">
      <div className="grid gap-x-24 pt-8 xl:grid-cols-[2fr_1fr]">
        <Card className="bg-card-grey rounded-2xl border-none p-0">
          <CardHeader className="bg-background-hero rounded-t-2xl">
            <div className="grid grid-cols-[3fr_1fr_1fr_1fr] gap-x-24 p-4 text-lg text-white">
              <p className="justify-self-start">Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p className="justify-self-end">Total</p>
            </div>
          </CardHeader>
          <CardContent className="bg-card-grey rounded-b-2xl p-4">
            <div className="flex flex-col gap-4">
              {products.map((product, index) => {
                return <CartItem product={product} key={index} />;
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card-grey rounded-2xl border-none p-0">
          <CardHeader className="bg-background-hero rounded-t-2xl p-4">
            <div className="grid grid-cols-[3fr_1fr_1fr_1fr] gap-x-8 text-lg text-white">
              <p className="justify-self-start">Order Summary</p>
            </div>
          </CardHeader>
          <CardContent className="bg-card-grey rounded-b-2xl">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p>Total</p>
                <p>${subtotal}</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping</p>
                <p>{shipping}</p>
              </div>

              <div className="flex justify-between rounded-2xl bg-white p-2">
                <p>Total</p>
                <p>${total}</p>
              </div>

              <Button className="bg-card-action rounded-full px-8 py-6 text-xl">
                Proceed to checkout
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default CartPage;
