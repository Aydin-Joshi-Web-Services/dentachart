import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { getPatient } from "@/lib/actions/patient.actions";

import { User, Syringe, Calendar, CreditCard } from "lucide-react";

async function Page({ params }: { params: { userId: string } }) {
  const { userId } = params;
  const data = await getPatient(userId);

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      {/* Patient Header */}
      <div className="mb-8 flex items-center gap-4">
        <div className="bg-blue-100 p-4 rounded-full">
          <User size={36} className="text-blue-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-100">{data.name}</h1>
          <p className="text-gray-500">Patient ID: {data.userId}</p>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="personal" className="flex items-center gap-2">
            <User size={16} />
            <span>Personal</span>
          </TabsTrigger>
          <TabsTrigger value="medical" className="flex items-center gap-2">
            <Syringe size={16} />
            <span>Medical</span>
          </TabsTrigger>
          <TabsTrigger value="dental" className="flex items-center gap-2">
            <Calendar size={16} />
            <span>Dental</span>
          </TabsTrigger>
          <TabsTrigger value="insurance" className="flex items-center gap-2">
            <CreditCard size={16} />
            <span>Insurance</span>
          </TabsTrigger>
        </TabsList>

        {/* Personal Information Tab */}
        <TabsContent value="personal">
          <Card>
            <CardHeader className="bg-blue-600">
              <CardTitle className="flex items-center gap-2">
                <User size={20} className="text-white" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Full Name</label>
                    <p className="text-lg font-medium">{data.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Address</label>
                    <p className="text-lg">{data.address}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Birth Date</label>
                    <p className="text-lg">{data.birthDate}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">SSN</label>
                    <p className="text-lg">••••••{data.ssn?.slice(-4)}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Medical History Tab */}
        <TabsContent value="medical">
          <Card>
            <CardHeader className="bg-blue-600">
              <CardTitle className="flex items-center gap-2">
                <Syringe size={20} className="text-white" />
                Medical History
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Primary Physician</label>
                    <p className="text-lg">{data.primaryPhysician}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Current Medication</label>
                    <p className="text-lg">{data.currentMedication}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Emergency Contact</label>
                    <p className="text-lg">{data.emergencyContactName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Medical Conditions</label>
                    <p className="text-lg">{data.medicalConditions}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Dental History Tab */}
        <TabsContent value="dental">
          <Card>
            <CardHeader className="bg-blue-600">
              <CardTitle className="flex items-center gap-2">
                <Calendar size={20} className="text-white" />
                Dental History
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Visit Frequency</label>
                    <p className="text-lg">{data.oftenSeeDentist}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Last Dental Visit</label>
                    <p className="text-lg">{data.lastDentalVisit}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Recent X-rays Date</label>
                    <p className="text-lg">{data.dateRecentXrays}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Insurance Tab */}
        <TabsContent value="insurance">
          <Card>
            <CardHeader className="bg-blue-600">
              <CardTitle className="flex items-center gap-2">
                <CreditCard size={20} className="text-white" />
                Dental Insurance
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Insurance Provider</label>
                    <p className="text-lg">{data.dentalInsuranceName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Insurance Number</label>
                    <p className="text-lg">{data.dentalInsuranceNumber}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Insurance Address</label>
                    <p className="text-lg">{data.dentalInsuranceAddress}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Member ID</label>
                    <p className="text-lg">{data.dentalMemberIdNumber}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Subscriber Name</label>
                    <p className="text-lg">{data.dentalSubscriberName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Subscriber DOB</label>
                    <p className="text-lg">{data.dentalSubscriberBirth}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Subscriber SSN</label>
                    <p className="text-lg">••••••{data.dentalSubscriberSsn?.slice(-4)}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Group Number</label>
                    <p className="text-lg">{data.dentalGroupNumber}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Page;