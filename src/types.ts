import { Tables } from "./lib/supabase/database.types";

export type ProductType = Tables<"Product">;
export type CartType = CartItemType[];
export type CartItemType = ProductType & { quantity: number };
