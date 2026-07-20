import { Request, Response } from "express";
import Appointment from "../models/appointment.model";

export const createAppointment = async (
  req: Request,
  res: Response
) => {
  try {
    if (req.body.website) {
      return res.status(400).json({
        success: false,
        message: "Spam detected",
      });
    }

    const appointment =
      await Appointment.create(req.body);

    res.status(201).json({
      success: true,
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create appointment",
    });
  }
};

export const getAppointments = async (
  _req: Request,
  res: Response
) => {
  try {
    const appointments =
      await Appointment.find()
        .populate("doctorId", "name")
        .sort({
          createdAt: -1,
        });

    res.json({
      success: true,
      count: appointments.length,
      data: appointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch appointments",
    });
  }
};

export const updateAppointmentStatus =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const { status } = req.body;

      const appointment =
        await Appointment.findByIdAndUpdate(
          req.params.id,
          { status },
          { new: true }
        );

      if (!appointment) {
        return res.status(404).json({
          success: false,
          message:
            "Appointment not found",
        });
      }

      res.json({
        success: true,
        data: appointment,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          "Failed to update appointment",
      });
    }
  };

export const getAppointmentStats =
  async (
    _req: Request,
    res: Response
  ) => {
    try {
      const total =
        await Appointment.countDocuments();

      const pending =
        await Appointment.countDocuments({
          status: "Pending",
        });

      const confirmed =
        await Appointment.countDocuments({
          status: "Confirmed",
        });

      const completed =
        await Appointment.countDocuments({
          status: "Completed",
        });

      const cancelled =
        await Appointment.countDocuments({
          status: "Cancelled",
        });

      res.json({
        success: true,
        data: {
          total,
          pending,
          confirmed,
          completed,
          cancelled,
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          "Failed to fetch appointment statistics",
      });
    }
  };