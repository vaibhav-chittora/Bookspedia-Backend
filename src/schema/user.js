import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: ["5", "passsword must be 5 characters long."],
  },
});

userSchema.pre("save", function modifyPassword(next) {
  const user = this;
  const SALT = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(user.password, SALT);
  user.password = hashedPassword;
  next();
});

const User = mongoose.model("User", userSchema);

export default User;
