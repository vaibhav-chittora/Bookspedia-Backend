import { createUser, findUserByEmail } from "../repositories/user.js";
import bcrypt from "bcrypt";

export const signUp = async (data) => {
  try {
    const newUser = await createUser(data);
    return newUser;
  } catch (error) {
    if (error.name === "MongoServerError" && error.code === 11000) {
      throw {
        status: 400,
        message: "User with same email already exists",
      };
    }
    throw error;
  }
};

export const signIn = async (data) => {
  try {
    const user = await findUserByEmail(data.email);
    if (!user) {
      throw {
        status: 404,
        message: "user not found ",
      };
    }
    const isPasswordValid = await bcrypt.compare(data.password, user.password);
    console.log("Data.email - ", data.email);
    console.log("Data.password - ", data.password);
    console.log("user.password - ", user.password);

    if (!isPasswordValid) {
      throw {
        status: 401,
        message: "Invalid Password",
      };
    }
    return user;
  } catch (error) {
    console.log("Error in user signin Service", error);
    throw error;
  }
};
