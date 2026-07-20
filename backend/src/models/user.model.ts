import { Schema, model } from "mongoose";
import { USER_ROLES } from "../constants/user.constants";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    role: {
      type: String,
      enum: Object.values(USER_ROLES),
      default: USER_ROLES.STAFF,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("User", userSchema);