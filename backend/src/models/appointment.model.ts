import { Schema, model } from "mongoose";

import {
  APPOINTMENT_STATUS,
  SERVICES,
} from "../constants/appointment.constants";

const appointmentSchema = new Schema(
  {
    petParentName: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    whatsapp: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
    },

    petName: {
      type: String,
      required: true,
      trim: true,
    },

    species: {
      type: String,
      required: true,
      trim: true,
    },

    breed: {
      type: String,
      trim: true,
    },

    ageYears: {
      type: Number,
      required: true,
    },

    ageMonths: {
      type: Number,
      required: true,
    },

    gender: {
      type: String,
      required: true,
      trim: true,
    },

    weight: {
      type: String,
      trim: true,
    },

    doctorId: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },

    service: {
      type: String,
      required: true,
      enum: SERVICES,
    },

    preferredDate: {
      type: Date,
      required: true,
    },

    preferredTime: {
      type: String,
      required: true,
    },

    notes: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: Object.values(
        APPOINTMENT_STATUS
      ),
      default:
        APPOINTMENT_STATUS.PENDING,
    },
  },
  {
    timestamps: true,
  }
);

export default model(
  "Appointment",
  appointmentSchema
);