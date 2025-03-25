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
    <Card className={cn("bg-card-grey rounded-2xl border-none p-0", className)}>
      <CardHeader className="bg-background-hero rounded-t-2xl p-4">
        <div className="grid grid-cols-[3fr_1fr_1fr_1fr] gap-x-8 text-lg text-white">
          <p className="justify-self-start">Order Summary</p>
        </div>
      </CardHeader>
      <CardContent className="bg-card-grey rounded-b-2xl">
        <div className="flex flex-col gap-4 p-4 pb-6">
          <div className="flex justify-between">
            <p>Total</p>
            <p>{subtotal ? `$${subtotal}` : null}</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping</p>
            <p>{shipping && subtotal ? shipping : "Free"}</p>
          </div>

          <div className="flex justify-between rounded-2xl bg-white p-2">
            <p>Total</p>
            <p>${total}</p>
          </div>

          {children}
        </div>
      </CardContent>
    </Card>
  );
}

export default CheckoutSummary;
