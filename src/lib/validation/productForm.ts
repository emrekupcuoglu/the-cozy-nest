import { z } from "zod";

export const productFormSchema = z.object({
  name: z.string().nonempty().max(1000, "Name is too long"),
  price: z.coerce.number().positive("Price must be positive"),
  // price: z.string(),
  description: z.string().nonempty().max(10000, "Description is too long"),
  image: z.string(),
});

export type ProductFormSchema = z.infer<typeof productFormSchema>;
