import { supabaseClientAnon } from "./client";

export async function getProductsByFilterClient({
  color,
  material,
  priceLow,
  priceHigh,
  sort,
}: {
  color: string;
  material: string;
  priceLow: string;
  priceHigh: string;
  sort: string;
}) {
  const query = supabaseClientAnon.from("Product").select("*");

  if (color && color !== "undefined") query.eq("color", color);

  if (material && material !== "undefined") query.eq("material", material);

  if (priceLow && priceLow !== "undefined") query.gte("price", priceLow);

  if (priceHigh && priceHigh !== "undefined") query.lte("price", priceHigh);

  if (sort && sort !== "undefined") {
    if (sort === "high-to-low") {
      query.order("price", { ascending: false });
    }
    if (sort === "low-to-high") {
      query.order("price", { ascending: true });
    }
  }

  const { data, error } = await query;

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  return data;
}
