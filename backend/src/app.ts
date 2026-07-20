import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes";
import doctorRoutes from "./routes/doctor.routes";
import appointmentRoutes from "./routes/appointment.routes";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());

app.use(cookieParser());

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message:
      "Mad About Dogs API Running",
  });
});

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/doctors",
  doctorRoutes
);

app.use(
  "/api/appointments",
  appointmentRoutes
);

export default app;