"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createNewImage } from "@/lib/action";

import { mediaFormSchema } from "@/lib/validation/mediaForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

const onSubmit = async (data: any) => {
  const a = await createNewImage(data);
};

function NewMediaForm() {
  const form = useForm({
    resolver: zodResolver(mediaFormSchema),
    defaultValues: { alt: "" },
  });

  const fileRef = form.register("image");

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          name="image"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    // {...field}
                    {...fileRef}
                    onChange={(e) => {
                      console.log("field", field);
                      field.onChange(e.target?.files?.[0] ?? undefined);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          name="alt"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Alt</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <Button className="mt-4" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default NewMediaForm;
