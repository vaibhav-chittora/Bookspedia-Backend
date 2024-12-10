import { signUp as signUpService } from "../services/user.js";
import { signIn as signInService } from "../services/user.js";
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

export const signIn = async (req, res) => {
  try {
    const user = await signInService(req.body);
    console.log("req Body - ", req.body);
    return res.status(200).json({
      success: true,
      message: "Signed in Successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
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
      message: "Internal server error",
    });
  }
};
