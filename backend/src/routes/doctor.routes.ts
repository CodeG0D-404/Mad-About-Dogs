import { Router } from "express";
import Doctor from "../models/doctor.model";

const router = Router();

router.get("/seed", async (_req, res) => {
  await Doctor.deleteMany();

  const doctors = await Doctor.insertMany([
    {
      name: "Dr Kaushik Nandi",
    },
    {
      name: "Dr Selim SK",
    },
  ]);

  res.json(doctors);
});

router.get("/", async (_req, res) => {
  const doctors = await Doctor.find({
    isActive: true,
  });

  res.json(doctors);
});

export default router;