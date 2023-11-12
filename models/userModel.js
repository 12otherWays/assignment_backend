import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please enter a username"],
    unique: [true, "username already taken"],
  },
  password: {
    type: String,
    required: [true, "please enter your password"],
  },
  nickname: {
    type: String,
  },
  changes: {
    type: [String],
  },
  strugglingTime: {
    type: String,
  },
  bedTime: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
