import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Checkbox } from "@/components/ui/checkbox";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { ProductFormProps } from "./ProductFilter";

function ProductFilterMultipleCheckBoxes({
  items,
  form,
}: {
  items: { id: string; name: string }[];
  form: UseFormReturn<ProductFormProps, any, undefined>;
}) {
  return (
    <FormField
      name="categories"
      control={form.control}
      render={() => {
        return (
          <>
            {items.map((item) => {
              return (
                <div key={item.id} className="flex items-center gap-2">
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="categories"
                    render={({ field }) => {
                      return (
                        <FormItem key={item.id} className="flex gap-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value.filter(
                                        (value) => value !== item.id,
                                      ),
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-black">
                            {item.name}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                </div>
              );
            })}
          </>
        );
      }}
    />
  );
}

export default ProductFilterMultipleCheckBoxes;
