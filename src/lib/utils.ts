import { SHIPPING } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateShipping(subtotal: number) {
  return subtotal > 1000 ? 0 : SHIPPING;
}
