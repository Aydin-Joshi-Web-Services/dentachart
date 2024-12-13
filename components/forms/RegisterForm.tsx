"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import { PatientFormDefaultValues } from "@/constants";
import { registerPatient } from "@/lib/actions/patient.actions";
import { PatientFormValidation } from "@/lib/validation";

import "react-datepicker/dist/react-datepicker.css";
import "react-phone-number-input/style.css";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";

const RegisterForm = ({ user }: { user: User }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof PatientFormValidation>>({
    resolver: zodResolver(PatientFormValidation),
    defaultValues: {
      ...PatientFormDefaultValues,
      name: user.name,
      email: user.email,
      phone: user.phone,
    },
  });

  const onSubmit = async (values: z.infer<typeof PatientFormValidation>) => {
    setIsLoading(true);

    // Store file info in form data as

    try {
      const patient = {
        // Core User Information
        userId: user.$id,
        name: values.name,
        email: values.email,
        phone: values.phone,

        // Personal Details
        birthDate: new Date(values.birthDate),
        address: values.address,

        // Emergency Contact
        emergencyContactName: values.emergencyContactName,

        // Medical Background
        currentMedication: values.currentMedication,

        // Consent Fields
        disclosureConsent: values.disclosureConsent,

        // Medical Information
        ssn: values.ssn,
        primaryPhysician: values.primaryPhysician,

        medicalConditions: values.medicalConditions,

        // Dental Information
        oftenSeeDentist: values.oftenSeeDentist,
        lastDentalVisit: new Date(values.lastDentalVisit),
        dateRecentXrays: new Date(values.dateRecentXrays),



        // Dental Insurance
        dentalInsuranceName: values.dentalInsuranceName,
        dentalInsuranceNumber: values.dentalInsuranceNumber,
        dentalInsuranceAddress: values.dentalInsuranceAddress,
        dentalSubscriberName: values.dentalSubscriberName,
        dentalSubscriberBirth: new Date(values.dentalSubscriberBirth),
        dentalSubscriberSsn: values.dentalSubscriberSsn,
        dentalMemberIdNumber: values.dentalMemberIdNumber,
        dentalGroupNumber: values.dentalGroupNumber,
      };

      const newPatient = await registerPatient(patient);

      if (newPatient) {
        router.push(`/patients/${user.$id}/new-appointment`);
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-1 space-y-12"
      >
        <section className="space-y-4">
          <h1 className="header">Welcome, start by entering your medical information 👋</h1>
          <p className="text-dark-700">Let us know more about yourself.</p>
        </section>

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Personal Information</h2>
          </div>

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="name"
            placeholder="John Doe"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
          />

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="email"
              label="Email address"
              placeholder="johndoe@gmail.com"
              iconSrc="/assets/icons/email.svg"
              iconAlt="email"
            />

            <CustomFormField
              fieldType={FormFieldType.PHONE_INPUT}
              control={form.control}
              name="phone"
              label="Phone Number"
              placeholder="(555) 123-4567"
            />
          </div>

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="birthDate"
              label="Date of birth"
            />
          </div>

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="address"
              label="Address"
              placeholder="14 street, New york, NY - 5101"
            />
          </div>

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="ssn"
              label="SSN"
              placeholder=""
            />
          </div>
        </section>

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h1 className="sub-header">Medical History</h1>
          </div>

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="primaryPhysician"
            label="Primary Physician"
            placeholder=""
          />

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="emergencyContactName"
              label="Emergency Contact Name"
              placeholder=""
            />

          </div>

          <div className="flex flex-col gap-6 xl:flex-row">

            <CustomFormField
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              name="currentMedication"
              label="Current medications"
              placeholder=""
            />
          </div>

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              name="medicalConditions"
              label="Medical Conditions (Allergies, etc.)"
              placeholder=""
            />

          </div>
        </section>
        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h1 className="sub-header">Dental History</h1>
          </div>

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="oftenSeeDentist"
            label="How often do you see your dentist?"
            placeholder=""
          />

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="lastDentalVisit"
              label="Last Dental Visit"
              placeholder=""
            />

          </div>

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="dateRecentXrays"
              label="Date of most recent X-rays"
              placeholder=""
            />
          </div>
        </section>

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h1 className="sub-header">Dental Insurance Information</h1>
          </div>

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="dentalInsuranceName"
              label="Dental Insurance Name"
              placeholder=""
            />

            <CustomFormField
              fieldType={FormFieldType.PHONE_INPUT}
              control={form.control}
              name="dentalInsuranceNumber"
              label="Dental Insurance Phone Number"
              placeholder=""
            />
          </div>

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="dentalInsuranceAddress"
              label="Dental Insurance Address"
              placeholder=""
            />

            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="dentalSubscriberName"
              label="Subscriber Name"
              placeholder=""
            />
          </div>

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="dentalSubscriberBirth"
              label="Subscriber DOB"
              placeholder=""
            />

            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="dentalSubscriberSsn"
              label="Subscriber SSN"
              placeholder=""
            />

            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="dentalMemberIdNumber"
              label="Member ID Number"
              placeholder=""
            />

            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="dentalGroupNumber"
              label="Group Number"
              placeholder=""
            />

          </div>
        </section>

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Consent and Privacy</h2>
          </div>

          <CustomFormField
            fieldType={FormFieldType.CHECKBOX}
            control={form.control}
            name="disclosureConsent"
            label="I consent to the use and disclosure of my health
            information for treatment purposes."
          />
        </section>

        <SubmitButton isLoading={isLoading}>Submit and Continue</SubmitButton>
      </form>
    </Form>
  );
};

export default RegisterForm;
