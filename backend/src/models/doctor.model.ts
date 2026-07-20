import { Schema, model } from "mongoose";

const doctorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    specialization: {
      type: String,
      default: "Veterinarian",
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

export default model("Doctor", doctorSchema);