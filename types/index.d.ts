/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

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
  appointment: Appointment;
  timezone: string;
  type: string;
};
