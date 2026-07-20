import {
  Request,
  Response,
  NextFunction,
} from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest
  extends Request {
  user?: {
    id: string;
    role: string;
  };
}

export const protect = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token =
      req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message:
          "Not authorized",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as {
      id: string;
      role: string;
    };

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message:
        "Invalid token",
    });
  }
};

export const adminOnly = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  if (
    req.user?.role !== "admin"
  ) {
    return res.status(403).json({
      success: false,
      message:
        "Admin access required",
    });
  }

  next();
};