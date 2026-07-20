export const APPOINTMENT_STATUS = {
  PENDING: "Pending",
  CONFIRMED: "Confirmed",
  COMPLETED: "Completed",
  CANCELLED: "Cancelled",
} as const;

export const SERVICES = [
  "Vaccination",
  "General Checkup",
  "Emergency",
  "Surgery Consultation",
  "Grooming",
  "Dental Care",
] as const;

export const GENDERS = [
  "Male",
  "Female",
] as const;

export const SPECIES = [
  "Dog",
  "Cat",
  "Bird",
  "Rabbit",
  "Other",
] as const;