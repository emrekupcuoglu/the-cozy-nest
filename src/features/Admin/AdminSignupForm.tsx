"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { signup } from "@/lib/action";
import {
  SignupFormSchema,
  signupFormSchema,
} from "@/lib/validation/signupForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

function AdminSignupForm() {
  //
  // const form = useForm<z.infer<typeof signupFormSchema>>({
  //   defaultValues: { email: "", password: "" },
  //   resolver: zodResolver(signupFormSchema),
  // });
  // const form = useForm({
  //   defaultValues: { email: "", password: "" },
  // });

  const form = useForm<SignupFormSchema>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: { email: "", password: "", fullName: "" },
  });

  const onSubmit: SubmitHandler<SignupFormSchema> = async (data) => {
    console.log("data", data);

    await signup(data);
  };

  // const onSubmit = async (data: FormData) => {
  //   console.log("data", data);
  //   await signup(data);
  // };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="user@example.com" {...field} />
                </FormControl>
              </FormItem>
            );
          }}
        />

        <FormField
          name="password"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="password" {...field} />
                </FormControl>
              </FormItem>
            );
          }}
        />

        <FormField
          name="fullName"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Fullname</FormLabel>
                <FormControl>
                  <Input placeholder="john smith" {...field} />
                </FormControl>
              </FormItem>
            );
          }}
        />
        <Button disabled={form.formState.isSubmitting} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default AdminSignupForm;
