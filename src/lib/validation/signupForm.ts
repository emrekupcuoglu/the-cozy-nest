import { z } from "zod";

export const signupFormSchema = z.object({
  fullName: z.string().trim().nonempty({ message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .trim()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export type SignupFormSchema = z.infer<typeof signupFormSchema>;
