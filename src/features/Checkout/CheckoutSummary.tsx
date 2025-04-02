import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function CheckoutSummary({
  children,
  className,
  subtotal,
  shipping,
  total,
}: {
  children: React.ReactNode;
  className?: string;
  subtotal: number;
  shipping: number;
  total: number;
}) {
  return (
    <aside className="bg-card-grey max-md sticky top-0 z-10 flex h-fit w-full max-w-sm flex-col gap-4 rounded-2xl max-lg:fixed max-lg:bottom-0 max-lg:top-auto">
      <Card
        className={cn(
          "bg-card-grey rounded-2xl border-none p-0 max-lg:w-dvw max-lg:rounded-none max-lg:shadow-[-0px_-2px_8px_rgba(0,0,0,0.2)]",
          className,
        )}
      >
        <CardHeader className="bg-background-hero rounded-t-2xl p-4 max-lg:hidden">
          <div className="text-lg text-white">
            {/* <div className="grid grid-cols-[3fr_1fr_1fr_1fr] gap-x-8 text-lg text-white"> */}
            <p className="justify-self-start">Order Summary</p>
          </div>
        </CardHeader>
        <CardContent className="bg-card-grey rounded-b-2xl border-none p-0">
          <div className="flex flex-col gap-4 p-4 pb-6 max-lg:hidden max-md:flex-row max-md:items-center max-md:justify-between">
            <div className="flex justify-between">
              <p>Total</p>
              <p>{subtotal ? `$${subtotal}` : null}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>{shipping && subtotal ? shipping : "Free"}</p>
            </div>

            {/* <div className="flex justify-between rounded-2xl bg-white p-2"> */}
            <div className="flex justify-between">
              <p>Total</p>
              <p>${total}</p>
            </div>

            {children}
          </div>

          <div className="hidden w-dvw py-8 pl-8 max-lg:flex max-lg:items-center max-lg:justify-between">
            <div>
              <p>Total</p>
              <p className="font-bold">${total}</p>
            </div>

            {children}
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}

export default CheckoutSummary;
