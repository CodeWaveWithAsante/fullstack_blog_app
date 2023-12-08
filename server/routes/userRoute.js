import express from "express";
import userAuth from "../middleware/authMiddleware.js";
import {
  OPTVerification,
  followWritter,
  getWriter,
  resendOTP,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/verify/:userId/:otp", OPTVerification);
router.post("/resend-link/:id", resendOTP);

// user routes
router.post("/follower/:id", userAuth, followWritter);
router.put("/update-user", userAuth, updateUser);

router.get("/get-user/:id?", getWriter);

export default router;
