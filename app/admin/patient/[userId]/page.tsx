import { getPatient } from "@/lib/actions/patient.actions";

async function Page({ params }: { params: { userId: string } }) {

  const { userId } = params

  const data = await getPatient(userId)

  return (
    <div className="bg-white p-5">
      {data.oftenSeeDentist}
    </div>
  )
}
export default Page