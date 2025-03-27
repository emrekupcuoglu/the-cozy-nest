import { createBrowserClient, createServerClient } from "./server";

export async function getCurrentUserServer() {
  const supabase = await createServerClient();
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) {
    return null;
  }

  const { data: user, error } = await supabase.auth.getUser();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return {
    user: user.user,
    isAuthenticated: user.user.role === "authenticated",
  };
}

export async function getAllMedia() {
  const supabase = await createServerClient();

  const { data, error } = await supabase.storage.from("product-images").list();

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  return data;
}

export async function getAllProducts() {
  const supabase = await createBrowserClient();

  const { data, error } = await supabase.from("Product").select("*");

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  return data;
}

export async function getProductById(id: number) {
  const supabase = await createBrowserClient();

  const { data, error } = await supabase
    .from("Product")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  return data;
}

export async function getTrendingProducts() {
  const supabase = await createServerClient();

  const query = supabase
    .from("Trending_Product")
    .select("category, Product(*)");

  const { data, error } = await query;

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  return data;
}

export type TrendingProductsWithProduct = Awaited<
  ReturnType<typeof getTrendingProducts>
>;
