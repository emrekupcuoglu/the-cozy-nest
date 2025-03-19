"use server";

import { redirect } from "next/navigation";
import { createClient } from "./supabase/server";
import { loginFormSchema, LoginFormSchema } from "./validation/loginForm";

import { SignupFormSchema, signupFormSchema } from "./validation/signupForm";

export async function login(inputData: LoginFormSchema) {
  const validatedData = loginFormSchema.safeParse(inputData);

  if (!validatedData.success) {
    const fieldErrors = validatedData.error.flatten().fieldErrors;

    return {
      error: {
        email: fieldErrors.email,
        password: fieldErrors.password,
      },
    };
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: inputData.email,
    password: inputData.password,
  });

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  console.log("data", data);

  // if (data?.user?.role !== "authenticated")
  redirect("/admin");

  return data;
}

export async function signup(inputData: SignupFormSchema) {
  const validatedUserData = signupFormSchema.safeParse({
    fullName: inputData.fullName,
    email: inputData.email,
    password: inputData.password,
  });

  if (!validatedUserData.success) {
    const fieldErrors = validatedUserData.error.flatten().fieldErrors;

    return {
      error: {
        fullName: fieldErrors.fullName,
        email: fieldErrors.email,
        password: fieldErrors.password,
      },
    };
  }

  const fullName = validatedUserData.data.fullName;
  const email = validatedUserData.data.email;
  const password = validatedUserData.data.password;

  if (!fullName || !email || !password) return;
  const supabase = await createClient();

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

  if (data?.user?.role !== "authenticated") redirect("/admin/");

  return { message: "Success" };
}
