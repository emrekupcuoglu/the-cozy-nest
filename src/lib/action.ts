"use server";

import { redirect } from "next/navigation";
import { createServerClient, createBrowserClient } from "./supabase/server";

import { loginFormSchema, LoginFormSchema } from "./validation/loginForm";

import { SignupFormSchema, signupFormSchema } from "./validation/signupForm";
import { MediaFormSchema } from "./validation/mediaForm";

import sharp from "sharp";
import { revalidatePath } from "next/cache";
import {
  checkoutFormSchema,
  CheckoutFormSchema,
} from "./validation/checkoutForm";

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

  const supabase = await createServerClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: inputData.email,
    password: inputData.password,
  });

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

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
  const supabase = await createServerClient();

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

export async function logout() {
  console.log("logout test");
  const supabase = await createServerClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  redirect("/admin");
}

export async function createNewImage(inputData: MediaFormSchema) {
  try {
    const supabase = await createBrowserClient();

    const imageName = inputData.image[0].name.split(".")[0] + ".webp";

    const img = inputData.image[0];

    const optimizedImg = await optimizeImage(img);

    const { data, error } = await supabase.storage
      .from("product-images")
      .upload(imageName, optimizedImg, {
        contentType: "image/webp",
      });

    if (error) {
      console.error(error.message);
      throw new Error(error.message);
    }

    return data;
  } catch (err) {
    console.error(err);
  }

  revalidatePath("/admin/media/new");
}

async function optimizeImage(image: File) {
  const buffer = await image.arrayBuffer();
  return await sharp(buffer).toFormat("webp").toBuffer();
}

export async function createProduct() {
  const supabase = await createServerClient();

  const { data, error } = await supabase.from("Product").insert({
    price: 100,
    name: "test",
    category: "test",
    color: "test",
    material: "test",
  });
  if (error) {
    console.error("error", error);
  }

  return data;
}

export async function checkout(inputData: CheckoutFormSchema) {
  const validatedData = checkoutFormSchema.safeParse(inputData);

  if (!validatedData.success) {
    const fieldErrors = validatedData.error.flatten().fieldErrors;

    return {
      error: {
        name: fieldErrors.name,
        lastName: fieldErrors.lastName,
        phone: fieldErrors.phone,
        email: fieldErrors.email,
        address: fieldErrors.address,
        city: fieldErrors.city,
        country: fieldErrors.country,
        zipcode: fieldErrors.zipcode,
        method: fieldErrors.method,
        cardOwner: fieldErrors.cardOwner,
        cardNo: fieldErrors.cardNo,
        expiration: fieldErrors.expiration,
        ccv: fieldErrors.ccv,
      },
    };
  }

  redirect("/checkout/success");
}
