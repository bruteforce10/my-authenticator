"use server";

import { LoginScheme } from "@/schemas";

export const login = async (values) => {
  const validatedFields = LoginScheme.safeParse(values);
  if (!validatedFields.success) {
    throw new Error("Invalid form data");
  }

  return { success: "Email Sent!" };
};
