import { supabase } from "./supabase";

export async function getCurrentUser() {
  return await supabase.auth.getUser();
}

export async function signup({
  fullName,
  email,
  password,
}: {
  fullName: string;
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { fullName },
    },
  });

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
  return data;
}

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
  return data;
}
