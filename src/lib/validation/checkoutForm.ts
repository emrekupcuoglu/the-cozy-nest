import { z } from "zod";

export const checkoutFormSchema = z.object({
  name: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  phone: z.string().min(5).max(30),
  email: z.string().email(),
  address: z.string().min(2).max(255),
  city: z.string().min(2).max(255),
  country: z.string().min(2).max(255),
  zipcode: z.string().min(2).max(255),
  method: z.enum(["credit", "debit"]),
  cardOwner: z.string().min(2).max(255),
  cardNo: z.string().min(16).max(16),
  expiration: z.string().date(),
  ccv: z.string().min(3).max(3),
});

export type CheckoutFormSchema = z.infer<typeof checkoutFormSchema>;
