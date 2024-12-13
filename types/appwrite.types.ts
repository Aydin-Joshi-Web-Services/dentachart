import { Models } from "node-appwrite";

export interface Patient extends Models.Document {
  userId: string;
  birthDate: Date;
  address: string;
  emergencyContactName: string;
  currentMedication: string;
  medicalConditions: string;
  disclosureConsent: boolean;
  oftenSeeDentist: string;
  lastDentalVisit: Date;
  dateRecentXrays: Date;
  dentalInsuranceName: string;
  dentalInsuranceNumber: string;
  dentalInsuranceAddress: string;
  dentalSubscriberName: string;
  dentalSubscriberBirth: Date;
  dentalSubscriberSsn: string;
  dentalMemberIdNumber: string;
  dentalGroupNumber: string;
  primaryPhysician: string;
  ssn: string;
}

export interface Appointment extends Models.Document {
  patient: Patient;
  schedule: Date;
  status: Status;
  primaryPhysician: string;
  reason: string;
  note: string;
  userId: string;
  cancellationReason: string | null;
}

