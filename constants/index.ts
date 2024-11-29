export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  name: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  ssn: "",
  primaryPhysician: "",
  primaryPhysicianNumber: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  allergies: "",
  currentMedication: "",
  medicalConditions: "",
  medicalSignature: "",
  medicalSignatureDate: new Date(Date.now()),
  oftenSeeDentist: "",
  lastDentalVisit: new Date(Date.now()),
  primaryDentist: "",
  lastDentistName: "",
  lastDentistLocation: "",
  dateRecentXrays: new Date(Date.now()),
  dentalSignature: "",
  dentalSignatureDate: new Date(Date.now()),
  medicalEmployerName: "",
  medicalInsuranceName: "",
  medicalInsuranceNumber: "",
  medicalInsuranceAddress: "",
  medicalSubscriberName: "",
  medicalSubscriberBirth: new Date(Date.now()),
  medicalSubscriberSsn: "",
  medicalMemberIdNumber: "",
  medicalGroupNumber: "",
  medicalInsuranceSignature: "",
  medicalInsuranceSignatureDate: new Date(Date.now()),
  dentalEmployerName: "",
  dentalInsuranceName: "",
  dentalInsuranceNumber: "",
  dentalInsuranceAddress: "",
  dentalSubscriberName: "",
  dentalSubscriberBirth: new Date(Date.now()),
  dentalSubscriberSsn: "",
  dentalMemberIdNumber: "",
  dentalGroupNumber: "",
  dentalInsuranceSignature: "",
  dentalInsuranceSignatureDate: new Date(Date.now()),
  treatmentsConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "John Green",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Leila Cameron",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "David Livingston",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Evan Peter",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Jane Powell",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Alex Ramirez",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine Lee",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Cruz",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
