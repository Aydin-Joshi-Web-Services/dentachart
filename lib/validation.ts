import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
});

export const PatientFormValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
  birthDate: z.coerce.date(),
  gender: z.enum(["male", "female", "other"]),
  address: z
    .string()
    .min(5, "Address must be at least 5 characters")
    .max(500, "Address must be at most 500 characters"),

  // Emergency Contact
  emergencyContactName: z
    .string()
    .min(2, "Contact name must be at least 2 characters")
    .max(50, "Contact name must be at most 50 characters"),
  emergencyContactNumber: z
    .string()
    .refine(
      (emergencyContactNumber) => /^\+\d{10,15}$/.test(emergencyContactNumber),
      "Invalid phone number"
    ),

  // Medical Background
  allergies: z.string(),
  currentMedication: z.string(),
  ssn: z.string(),

  // Medical Conditions and Physician
  medicalConditions: z.string(),
  primaryPhysician: z.string(),
  primaryPhysicianNumber: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
  // Medical Signatures and Dates
  medicalSignature: z.string(),
  medicalSignatureDate: z.coerce.date(),

  // Dental Information
  oftenSeeDentist: z.string(),
  lastDentalVisit: z.coerce.date(),
  primaryDentist: z.string(),
  lastDentistName: z.string(),
  lastDentistLocation: z.string(),
  dateRecentXrays: z.coerce.date(),
  dentalSignature: z.string(),
  dentalSignatureDate: z.coerce.date(),

  // Medical Insurance Details
  medicalEmployerName: z.string(),
  medicalInsuranceName: z.string(),
  medicalInsuranceNumber: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
  medicalInsuranceAddress: z.string(),
  medicalSubscriberName: z.string(),
  medicalSubscriberBirth: z.coerce.date(),
  medicalSubscriberSsn: z.string(),
  medicalMemberIdNumber: z.string(),
  medicalGroupNumber: z.string(),
  medicalInsuranceSignature: z.string(),
  medicalInsuranceSignatureDate: z.coerce.date(),

  // Dental Insurance Details
  dentalEmployerName: z.string(),
  dentalInsuranceName: z.string(),
  dentalInsuranceNumber: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
  dentalInsuranceAddress: z.string(),
  dentalSubscriberName: z.string(),
  dentalSubscriberBirth: z.coerce.date(),
  dentalSubscriberSsn: z.string(),
  dentalMemberIdNumber: z.string(),
  dentalGroupNumber: z.string(),
  dentalInsuranceSignature: z.string(),
  dentalInsuranceSignatureDate: z.coerce.date(),

  // Consent Fields
  treatmentsConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "You must consent to treatment in order to proceed",
    }),
  disclosureConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "You must consent to disclosure in order to proceed",
    }),
  privacyConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "You must consent to privacy in order to proceed",
    }),
});

export const CreateAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Select at least one doctor"),
  schedule: z.coerce.date(),
  reason: z
    .string()
    .min(2, "Reason must be at least 2 characters")
    .max(500, "Reason must be at most 500 characters"),
  note: z.string(),
  cancellationReason: z.string(),
});

export const ScheduleAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Select at least one doctor"),
  schedule: z.coerce.date(),
  reason: z.string(),
  note: z.string(),
  cancellationReason: z.string(),
});

export const CancelAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Select at least one doctor"),
  schedule: z.coerce.date(),
  reason: z.string(),
  note: z.string(),
  cancellationReason: z
    .string()
    .min(2, "Reason must be at least 2 characters")
    .max(500, "Reason must be at most 500 characters"),
});

export function getAppointmentSchema(type: string) {
  switch (type) {
    case "create":
      return CreateAppointmentSchema;
    case "cancel":
      return CancelAppointmentSchema;
    default:
      return ScheduleAppointmentSchema;
  }
}
