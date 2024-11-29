import { Models } from "node-appwrite";

export interface Patient extends Models.Document {
  userId: string;
  birthDate: Date;
  gender: Gender;
  address: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  allergies: string;
  currentMedication: string;
  medicalConditions: string;
  privacyConsent: boolean;
  treatmentsConsent: boolean;
  disclosureConsent: boolean;
  medicalSignature: string;
  medicalSignatureDate: Date;
  oftenSeeDentist: string;
  lastDentalVisit: Date;
  primaryDentist: string;
  lastDentistName: string;
  lastDentistLocation: string;
  dateRecentXrays: Date;
  dentalSignature: string;
  dentalSignatureDate: Date;
  medicalEmployerName: string;
  medicalInsuranceName: string;
  medicalInsuranceNumber: string;
  medicalInsuranceAddress: string;
  medicalSubscriberName: string;
  medicalSubscriberBirth: Date;
  medicalSubscriberSsn: string;
  medicalMemberIdNumber: string;
  medicalGroupNumber: string;
  medicalInsuranceSignature: string;
  medicalInsuranceSignatureDate: Date;
  dentalEmployerName: string;
  dentalInsuranceName: string;
  dentalInsuranceNumber: string;
  dentalInsuranceAddress: string;
  dentalSubscriberName: string;
  dentalSubscriberBirth: Date;
  dentalSubscriberSsn: string;
  dentalMemberIdNumber: string;
  dentalGroupNumber: string;
  dentalInsuranceSignature: string;
  dentalInsuranceSignatureDate: Date;
  primaryPhysician: string;
  primaryPhysicianNumber: string;
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

