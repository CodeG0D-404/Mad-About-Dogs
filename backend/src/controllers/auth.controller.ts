  import { Request, Response } from "express";
  import jwt from "jsonwebtoken";

  import User from "../models/user.model";
  import Otp from "../models/otp.model";
  import { AuthRequest } from "../middleware/auth.middleware";

  export const sendOtp = async (
    req: Request,
    res: Response
  ) => {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({
          success: false,
          message: "Email is required",
        });
      }

      const user = await User.findOne({
        email: email.toLowerCase(),
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      const otp = Math.floor(
        100000 + Math.random() * 900000
      ).toString();

      await Otp.deleteMany({ email });

      await Otp.create({
        email,
        otp,
        expiresAt: new Date(
          Date.now() + 5 * 60 * 1000
        ),
      });

      // TODO:
      // Send email using Resend

      console.log(
        `OTP for ${email}: ${otp}`
      );

      res.json({
        success: true,
        message: "OTP sent",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to send OTP",
      });
    }
  };

  export const verifyOtp = async (
    req: Request,
    res: Response
  ) => {
    try {
      const { email, otp } = req.body;

      const otpRecord =
        await Otp.findOne({
          email,
          otp,
        });

      if (!otpRecord) {
        return res.status(400).json({
          success: false,
          message: "Invalid OTP",
        });
      }

      if (
        otpRecord.expiresAt <
        new Date()
      ) {
        return res.status(400).json({
          success: false,
          message: "OTP expired",
        });
      }

      const user = await User.findOne({
        email,
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      const token = jwt.sign(
        {
          id: user._id,
          role: user.role,
        },
        process.env.JWT_SECRET!,
        {
          expiresIn: "7d",
        }
      );

      await Otp.deleteMany({ email });

      res.cookie("token", token, {
        httpOnly: true,
        secure:
          process.env.NODE_ENV ===
          "production",
        sameSite: "lax",
        maxAge:
          7 * 24 * 60 * 60 * 1000,
      });

      res.json({
        success: true,
        user,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "OTP verification failed",
      });
    }
  };

  export const me = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const user =
      await User.findById(
        req.user?.id
      ).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message:
          "User not found",
      });
    }

    res.json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        "Failed to fetch user",
    });
  }
};

export const logout = (
  _req: Request,
  res: Response
) => {
  res.clearCookie("token");

  res.json({
    success: true,
    message: "Logged out",
  });
};