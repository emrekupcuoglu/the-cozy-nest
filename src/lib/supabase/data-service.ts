import { createClient } from "./server";

export async function getCurrentUserServer() {
  const supabase = await createClient();
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
