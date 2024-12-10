import { signUp as signUpService } from "../services/user.js";
export const signUp = async (req, res) => {
  try {
    const user = await signUpService(req.body);
    return res.status(201).json({
      success: true,
      message: "User created Successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
