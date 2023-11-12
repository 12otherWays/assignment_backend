import express from "express";
import {
  // getAllUser,
  logIn,
  signUp,
  userInfo,
} from "../controllers/userControllers.js";
const router = express.Router();

router.post("/signup", signUp);
router.post("/login", logIn);
router.patch("/:id", userInfo);
// router.get("/all", getAllUser);

export default router;
