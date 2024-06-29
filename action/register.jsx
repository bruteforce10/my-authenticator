"use server";

import { getUserByEmail } from "@/data/user";
import connectDB from "@/lib/mongodb";
import { User } from "@/lib/schema/user";``
import { RegisterScheme } from "@/schemas";
import bcrypt from "bcryptjs";

export const register = async (values) => {
  const validatedFields = RegisterScheme.safeParse(values);
  if (!validatedFields.success) {
    throw new Error("Invalid form data");
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  await connectDB();

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    throw new Error("User already exists");
  }

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
  await newUser.save();

  return { success: "User created!" };
};
