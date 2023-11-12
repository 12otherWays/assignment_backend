import User from "../models/userModel.js";
import AppError from "../utils/appError.js";
import bcrypt from "bcrypt";


//user login
const logIn = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next(new AppError("username and password is required", 400));
  }
  const user = await User.findOne({ username });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({ status: "success", id: user._id });
  } else {
    next(new AppError("email or password incorrect", 401));
  }
};

//register a user
const signUp = async (req, res, next) => {
  const { username, password, nickname, changes, strugglingTime, bedTime } =
    req.body;
  if (!username || !password) {
    return next(new AppError("username and password is required", 400));
  }
  //hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username: username,
    password: hashedPassword,
    nickname: nickname,
    changes: changes,
    strugglingTime: strugglingTime,
    bedTime: bedTime,
  });
  res.status(201).json({
    status: "success",
    data: {
      user,
    },
  });
};

// fill user information
const userInfo = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

export {
  logIn,
  signUp,
  userInfo,
  //  getAllUser
};
