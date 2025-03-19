import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .trim()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
