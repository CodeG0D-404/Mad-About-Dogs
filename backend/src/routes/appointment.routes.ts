import { Router } from "express";

import {
  protect,
  adminOnly,
} from "../middleware/auth.middleware";

import {
  createAppointment,
  getAppointments,
  updateAppointmentStatus,
  getAppointmentStats,
} from "../controllers/appointment.controller";
import { bookingLimiter }
from "../middleware/rate-limit.middleware";


const router = Router();

router.post(
  "/",
  bookingLimiter,
  createAppointment
);

router.get(
  "/stats",
  protect,
  adminOnly,
  getAppointmentStats
);

router.get(
  "/",
  protect,
  adminOnly,
  getAppointments
);

router.patch(
  "/:id/status",
  protect,
  adminOnly,
  updateAppointmentStatus
);

export default router;