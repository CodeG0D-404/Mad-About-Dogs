import rateLimit from "express-rate-limit";

export const bookingLimiter =
  rateLimit({
    windowMs: 30 * 1000,
    max: 1,

    message: {
      success: false,
      message:
        "Please wait 30 seconds before submitting another booking request.",
    },

    standardHeaders: true,
    legacyHeaders: false,
  });