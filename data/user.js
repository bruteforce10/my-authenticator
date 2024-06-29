import { User } from "@/lib/schema/user";

export const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (id) => {
  try {
    const user = await User.findOne({ id });
    return user;
  } catch (error) {
    return null;
  }
};
