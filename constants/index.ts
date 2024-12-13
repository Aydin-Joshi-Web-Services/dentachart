
export const PatientFormDefaultValues = {
  name: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  address: "",
  ssn: "",
  primaryPhysician: "",
  emergencyContactName: "",
  currentMedication: "",
  medicalConditions: "",
  oftenSeeDentist: "",
  lastDentalVisit: new Date(Date.now()),
  dateRecentXrays: new Date(Date.now()),
  dentalInsuranceName: "",
  dentalInsuranceNumber: "",
  dentalInsuranceAddress: "",
  dentalSubscriberName: "",
  dentalSubscriberBirth: new Date(Date.now()),
  dentalSubscriberSsn: "",
  dentalMemberIdNumber: "",
  dentalGroupNumber: "",
  disclosureConsent: false,
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
