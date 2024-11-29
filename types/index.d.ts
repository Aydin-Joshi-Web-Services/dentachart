/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare type Gender = "male" | "female" | "other";
declare type Status = "pending" | "scheduled" | "cancelled";

declare interface CreateUserParams {
  name: string;
  email: string;
  phone: string;
}
declare interface User extends CreateUserParams {
  $id: string;
}

declare interface RegisterUserParams extends CreateUserParams {
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

declare type CreateAppointmentParams = {
  userId: string;
  patient: string;
  primaryPhysician: string;
  reason: string;
  schedule: Date;
  status: Status;
  note: string;
};

declare type UpdateAppointmentParams = {
  appointmentId: string;
  userId: string;
  timeZone: string;
  appointment: Appointment;
  type: string;
};
