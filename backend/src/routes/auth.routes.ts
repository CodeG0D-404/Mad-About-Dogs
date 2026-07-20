import { Router } from "express";

import {
  sendOtp,
  verifyOtp,
  me,
  logout,
} from "../controllers/auth.controller";

import {
  protect,
} from "../middleware/auth.middleware";

const router = Router();

router.post(
  "/send-otp",
  sendOtp
);

router.post(
  "/verify-otp",
  verifyOtp
);

router.get(
  "/me",
  protect,
  me
);

router.post(
  "/logout",
  logout
);

export default router;