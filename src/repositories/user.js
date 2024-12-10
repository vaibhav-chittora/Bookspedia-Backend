import User from "../schema/user.js";

export const createUser = async ({ name, email, password }) => {
  try {
    const user = await User.create({ name, email, password });
    return user;
  } catch (error) {
    console.log("Error in creating the User Repository", error);
    throw error;
  }
};

export const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    console.log("Error in fidnding the User Repository", error);
  }
};
