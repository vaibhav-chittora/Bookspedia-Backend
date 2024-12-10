import { createUser } from "../repositories/user.js";

export const signUp = async (data) => {
  try {
    const newUser = await createUser(data);
    return newUser;
    // if(newUser){
    //     res.status(400).json({
    //         message:
    //     })
    // }
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
