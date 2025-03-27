import { createClient } from "@supabase/supabase-js";

// import { Database } from "./database.types";

if (
  !process.env.NEXT_PUBLIC_SUPABASE_URL ||
  !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)
  throw new Error("Problem connecting to the database");
export const supabaseClientAnon = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);

// ! This overrides the Row Level Security (RLS) policy
