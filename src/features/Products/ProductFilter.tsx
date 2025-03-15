"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import ProductFilterMultipleCheckBoxes from "./ProductFilterMultipleCheckBoxes";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";

const categories = [
  { id: "living-room", name: "Living Room" },
  { id: "bedroom", name: "Bedroom" },
  { id: "kitchen", name: "Kitchen" },
  { id: "office", name: "Office" },
  { id: "outdoor", name: "Outdoor" },
];

const materials = [
  { id: "wood", name: "Wood" },
  { id: "metal", name: "Metal" },
  { id: "glass", name: "Glass" },
  { id: "plastic", name: "Plastic" },
  { id: "fabric", name: "Fabric" },
  { id: "leather", name: "Leather" },
];

export type ProductFormProps = {
  categories: string[];
  price: [number, number];
  color: string[];
  availability: string;
  materials: string[];
};

function ProductFilter() {
  const form = useForm<ProductFormProps>({
    defaultValues: { categories: [] },
  });
  function onSubmit(data: ProductFormProps) {
    console.log(data);
  }
  return (
    <div className="">
      <h2>Filters</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 text-black"
        >
          <Accordion
            className="flex flex-col gap-16 border border-none bg-white"
            type="multiple"
          >
            <AccordionItem
              value="category"
              className="border-card-grey rounded-2xl border"
            >
              <AccordionTrigger className="data-[state=open]:bg-card-grey p-4 data-[state=open]:text-black">
                Category
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4 p-8">
                  <ProductFilterMultipleCheckBoxes
                    form={form}
                    items={categories}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="price"
              className="border-card-grey rounded-2xl border"
            >
              <AccordionTrigger className="data-[state=open]:bg-card-grey p-4 data-[state=open]:text-black">
                Price
              </AccordionTrigger>
              <AccordionContent className="p-8">
                <FormField
                  name="price"
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="text-black">
                          {field.value?.[0] || 0}-{field.value?.[1] || 100}
                        </FormLabel>
                        <FormControl>
                          <Slider
                            value={field.value}
                            onValueChange={(e) => {
                              field.onChange(e);
                            }}
                            defaultValue={[0, 50]}
                            max={100}
                            step={1}
                            min={0}
                          />
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="materials"
              className="border-card-grey rounded-2xl border"
            >
              <AccordionTrigger className="data-[state=open]:bg-card-grey p-4 data-[state=open]:text-black">
                Material
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4 p-8">
                  <ProductFilterMultipleCheckBoxes
                    form={form}
                    items={materials}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="availability"
              className="border-card-grey rounded-2xl border"
            >
              <AccordionTrigger className="data-[state=open]:bg-card-grey p-4 data-[state=open]:text-black">
                Availability
              </AccordionTrigger>

              <AccordionContent>
                <FormField
                  name="availability"
                  control={form.control}
                  render={({ field }) => {
                    console.log("field", field);
                    return (
                      <div className="flex flex-col gap-4 p-8 text-black">
                        <FormItem>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormItem className="flex items-center space-x-2">
                                <FormControl>
                                  <RadioGroupItem value="in-stock" />
                                </FormControl>
                                <FormLabel>In Stock</FormLabel>
                              </FormItem>

                              <FormItem className="flex items-center space-x-2">
                                <FormControl>
                                  <RadioGroupItem value="all" />
                                </FormControl>
                                <FormLabel>All</FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                        </FormItem>
                      </div>
                    );
                  }}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default ProductFilter;
