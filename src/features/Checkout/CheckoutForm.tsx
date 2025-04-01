"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import CheckoutSummary from "./CheckoutSummary";
import { useLocalStorageCart } from "@/hooks/useLocalStorage";
import { calculateShipping } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckoutFormSchema,
  checkoutFormSchema,
} from "@/lib/validation/checkoutForm";
import { checkout } from "@/lib/action";

function CheckoutForm() {
  const { cart } = useLocalStorageCart();

  const subtotal = cart
    ? cart?.reduce((acc, product) => {
        return acc + product.quantity * product.price;
      }, 0)
    : 0;

  const shipping = calculateShipping(subtotal || 0);

  const total = subtotal ? subtotal + shipping : 0;

  const form = useForm({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      name: "",
      lastName: "",
      phone: "",
      email: "",
      country: "",
      city: "",
      address: "",
      zipcode: "",
      method: "debit" as CheckoutFormSchema["method"],
      cardOwner: "",
      cardNo: "",
      expiration: new Date().toISOString(),
      ccv: "",
    },
  });

  const handleSubmit = (data: CheckoutFormSchema) => {
    checkout(data);
  };
  return (
    <Form {...form}>
      <form
        className="flex flex-col"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <h2 className="pb-4 text-4xl">Billing Details</h2>
        {/* <div className="flex gap-16 pb-8 max-lg:gap-8"> */}
        <div className="grid grid-cols-[2fr_1fr] gap-x-16 gap-y-12 pb-8 max-lg:gap-8 max-md:grid-cols-1">
          <Card className="flex-col gap-16 p-16 max-lg:gap-8">
            <div className="flex gap-12 max-lg:flex-col">
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem className="grow">
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                name="lastName"
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem className="grow">
                      <FormLabel>Last name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
            <div className="flex gap-16 max-lg:flex-col max-lg:gap-8">
              <FormField
                name="phone"
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem className="grow">
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                        <Input type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem className="grow">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>

            <div className="flex flex-col justify-around gap-8">
              <FormField
                name="country"
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                name="city"
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                name="zipcode"
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Zipcode</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>

            <FormField
              name="address"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </Card>

          <CheckoutSummary
            shipping={shipping}
            subtotal={subtotal}
            total={total}
            className="h-fit max-md:row-start-1"
          >
            <div className="flex justify-around gap-2 max-md:pr-8 max-sm:flex-col">
              <Button type="submit" className="bg-card-action hover:bg-action">
                Confirm Payment
              </Button>
              <Button className="bg-zinc-700">Cancel</Button>
            </div>
          </CheckoutSummary>

          <div>
            <h2 className="pb-4 text-4xl">Payment Information</h2>
            <Card className="p-8">
              <CardContent>
                <FormField
                  name="method"
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <FormItem className="pb-8">
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <div className="flex flex-col gap-4 p-8 text-black">
                              <FormItem className="flex items-center space-x-2">
                                <FormControl>
                                  <RadioGroupItem
                                    value="debit"
                                    circleClassName="fill-card-action stroke-action"
                                  />
                                </FormControl>
                                <FormLabel>Debit card</FormLabel>
                              </FormItem>

                              <FormItem className="flex items-center space-x-2">
                                <FormControl>
                                  <RadioGroupItem
                                    value="credit"
                                    circleClassName="fill-card-action stroke-action"
                                  />
                                </FormControl>
                                <FormLabel>Credit card</FormLabel>
                              </FormItem>
                            </div>
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />
                <div className="flex flex-col gap-16 max-lg:gap-8">
                  <div className="flex gap-24 max-lg:flex-col max-lg:gap-8">
                    <FormField
                      name="cardOwner"
                      control={form.control}
                      render={({ field }) => {
                        return (
                          <FormItem className="basis-1/4">
                            <FormLabel>Card Owner</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                    <FormField
                      name="cardNo"
                      control={form.control}
                      render={({ field }) => {
                        return (
                          <FormItem className="basis-1/4">
                            <FormLabel>Card Number</FormLabel>
                            <FormControl>
                              <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </div>

                  <div className="flex gap-24 max-lg:flex-col max-lg:gap-8">
                    <FormField
                      name="expiration"
                      control={form.control}
                      render={({ field }) => {
                        return (
                          <FormItem className="basis-1/4">
                            <FormLabel>Expiry Date </FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                    <FormField
                      name="ccv"
                      control={form.control}
                      render={({ field }) => {
                        return (
                          <FormItem className="basis-1/4">
                            <FormLabel>CCV</FormLabel>
                            <FormControl>
                              <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default CheckoutForm;
