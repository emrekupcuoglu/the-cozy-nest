import { CheckIcon } from "lucide-react";

function CheckoutSuccessPage() {
  return (
    <div className="flex flex-col pt-12">
      <div className="mx-auto max-w-7xl max-lg:px-16">
        <div className="flex justify-center">
          <CheckIcon className="border-background-hero stroke-card-action size-32 rounded-full border-8 p-4" />
        </div>
        <h1 className="text-center text-3xl">Thank you for your order!</h1>
        <p>
          The order confirmation email with details of your order and a link to
          track its progress has been sent to your email address.
        </p>
      </div>
    </div>
  );
}

export default CheckoutSuccessPage;
