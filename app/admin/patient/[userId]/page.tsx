import { getPatient } from "@/lib/actions/patient.actions";

async function Page({ params }: { params: { userId: string } }) {
  const { userId } = params;
  const data = await getPatient(userId);

  return (
    <div className="bg-white p-10">
      <section className="space-y-4">
        <h1 className="header">{data.name}</h1>
      </section>
      <div className="space-y-2 py-5">
      <h2 className="sub-header py-5">Basic Information</h2>
        <p><strong>User ID:</strong> {data.userId}</p>
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Birth Date:</strong> {data.birthDate}</p>
        <p><strong>Address:</strong> {data.address}</p>
        <p><strong>SSN:</strong> {data.ssn}</p>
        <h2 className="sub-header py-5">Medical History</h2>
        <p><strong>Primary Physician:</strong> {data.primaryPhysician}</p>
        <p><strong>Emergency Contact Name:</strong> {data.emergencyContactName}</p>
        <p><strong>Current Medication:</strong> {data.currentMedication}</p>
        <p><strong>Medical Conditions:</strong> {data.medicalConditions}</p>
        <h2 className="sub-header py-5">Dental History</h2>
        <p><strong>How Often See Dentist:</strong> {data.oftenSeeDentist}</p>
        <p><strong>Last Dental Visit:</strong> {data.lastDentalVisit}</p>
        <p><strong>Date of Recent X-rays:</strong> {data.dateRecentXrays}</p>
        <h2 className="sub-header py-5">Dental Insurance</h2>
        <p><strong>Dental Insurance Name:</strong> {data.dentalInsuranceName}</p>
        <p><strong>Dental Insurance Number:</strong> {data.dentalInsuranceNumber}</p>
        <p><strong>Dental Insurance Address:</strong> {data.dentalInsuranceAddress}</p>
        <p><strong>Dental Subscriber Name:</strong> {data.dentalSubscriberName}</p>
        <p><strong>Dental Subscriber Birth:</strong> {data.dentalSubscriberBirth}</p>
        <p><strong>Dental Subscriber SSN:</strong> {data.dentalSubscriberSsn}</p>
        <p><strong>Dental Member ID Number:</strong> {data.dentalMemberIdNumber}</p>
        <p><strong>Dental Group Number:</strong> {data.dentalGroupNumber}</p>
      </div>
    </div>
  );
}

export default Page;
