"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { GenderOptions, PatientFormDefaultValues } from "@/constants";
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
        gender: values.gender,
        address: values.address,

        // Emergency Contact
        emergencyContactName: values.emergencyContactName,
        emergencyContactNumber: values.emergencyContactNumber,

        // Medical Background
        allergies: values.allergies,
        currentMedication: values.currentMedication,

        // Consent Fields
        privacyConsent: values.privacyConsent,
        treatmentsConsent: values.treatmentsConsent,
        disclosureConsent: values.disclosureConsent,

        // Medical Information
        ssn: values.ssn,
        primaryPhysician: values.primaryPhysician,
        primaryPhysicianNumber: values.primaryPhysicianNumber,
        medicalConditions: values.medicalConditions,
        medicalSignature: values.medicalSignature,
        medicalSignatureDate: new Date(values.medicalSignatureDate),

        // Dental Information
        oftenSeeDentist: values.oftenSeeDentist,
        lastDentalVisit: new Date(values.lastDentalVisit),
        primaryDentist: values.primaryDentist,
        lastDentistName: values.lastDentistName,
        lastDentistLocation: values.lastDentistLocation,
        dateRecentXrays: new Date(values.dateRecentXrays),
        dentalSignature: values.dentalSignature,
        dentalSignatureDate: new Date(values.dentalSignatureDate),

        // Medical Insurance
        medicalEmployerName: values.medicalEmployerName,
        medicalInsuranceName: values.medicalInsuranceName,
        medicalInsuranceNumber: values.medicalInsuranceNumber,
        medicalInsuranceAddress: values.medicalInsuranceAddress,
        medicalSubscriberName: values.medicalSubscriberName,
        medicalSubscriberBirth: new Date(values.medicalSubscriberBirth),
        medicalSubscriberSsn: values.medicalSubscriberSsn,
        medicalMemberIdNumber: values.medicalMemberIdNumber,
        medicalGroupNumber: values.medicalGroupNumber,
        medicalInsuranceSignature: values.medicalInsuranceSignature,
        medicalInsuranceSignatureDate: new Date(
          values.medicalInsuranceSignatureDate
        ),

        // Dental Insurance
        dentalEmployerName: values.dentalEmployerName,
        dentalInsuranceName: values.dentalInsuranceName,
        dentalInsuranceNumber: values.dentalInsuranceNumber,
        dentalInsuranceAddress: values.dentalInsuranceAddress,
        dentalSubscriberName: values.dentalSubscriberName,
        dentalSubscriberBirth: new Date(values.dentalSubscriberBirth),
        dentalSubscriberSsn: values.dentalSubscriberSsn,
        dentalMemberIdNumber: values.dentalMemberIdNumber,
        dentalGroupNumber: values.dentalGroupNumber,
        dentalInsuranceSignature: values.dentalInsuranceSignature,
        dentalInsuranceSignatureDate: new Date(
          values.dentalInsuranceSignatureDate
        ),
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

            <CustomFormField
              fieldType={FormFieldType.SKELETON}
              control={form.control}
              name="gender"
              label="Gender"
              renderSkeleton={(field) => (
                <FormControl>
                  <RadioGroup
                    className="flex h-11 gap-6 xl:justify-between"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    {GenderOptions.map((option, i) => (
                      <div key={option + i} className="radio-group">
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option} className="cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
              )}
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
          <CustomFormField
            fieldType={FormFieldType.PHONE_INPUT}
            control={form.control}
            name="primaryPhysicianNumber"
            label="Primary Physician Phone Number"
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

            <CustomFormField
              fieldType={FormFieldType.PHONE_INPUT}
              control={form.control}
              name="emergencyContactNumber"
              label="Emergency Contact Phone Number"
              placeholder=""
            />
          </div>

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              name="allergies"
              label="Allergies (if any)"
              placeholder=""
            />

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
              label="Medical Conditions"
              placeholder=""
            />

            <CustomFormField
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              name="medicalSignature"
              label="Digital Signature"
              placeholder=""
            />

            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="medicalSignatureDate"
              label="Date of Signature"
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

            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="primaryDentist"
              label="Primary Dentist"
              placeholder=""
            />
          </div>

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="lastDentistName"
              label="Last Dentist Name"
              placeholder=""
            />

            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="lastDentistLocation"
              label="Last Dentist Location"
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

            <CustomFormField
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              name="dentalSignature"
              label="Digital Signature"
              placeholder=""
            />

            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="dentalSignatureDate"
              label="Date of Signature"
            />
          </div>
        </section>

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h1 className="sub-header">Medical Insurance Information</h1>
          </div>

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="medicalEmployerName"
            label="Employer Name"
            placeholder=""
          />

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="medicalInsuranceName"
              label="Medical Insurance Name"
              placeholder=""
            />

            <CustomFormField
              fieldType={FormFieldType.PHONE_INPUT}
              control={form.control}
              name="medicalInsuranceNumber"
              label="Medical Insurance Phone Number"
              placeholder=""
            />
          </div>

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="medicalInsuranceAddress"
              label="Medical Insurance Address"
              placeholder=""
            />

            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="medicalSubscriberName"
              label="Subscriber Name"
              placeholder=""
            />
          </div>

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="medicalSubscriberBirth"
              label="Subscriber DOB"
              placeholder=""
            />

            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="medicalSubscriberSsn"
              label="Subscriber SSN"
              placeholder=""
            />

            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="medicalMemberIdNumber"
              label="Member ID Number"
              placeholder=""
            />

            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="medicalGroupNumber"
              label="Group Number"
              placeholder=""
            />

            <CustomFormField
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              name="medicalInsuranceSignature"
              label="Digital Signature"
              placeholder=""
            />

            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="medicalInsuranceSignatureDate"
              label="Date of Signature"
            />
          </div>
        </section>
        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h1 className="sub-header">Dental Insurance Information</h1>
          </div>

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="dentalEmployerName"
            label="Employer Name"
            placeholder=""
          />

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

            <CustomFormField
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              name="dentalInsuranceSignature"
              label="Digital Signature"
              placeholder=""
            />

            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="dentalInsuranceSignatureDate"
              label="Date of Signature"
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
            name="treatmentsConsent"
            label="I consent to receive treatment for my health condition."
          />

          <CustomFormField
            fieldType={FormFieldType.CHECKBOX}
            control={form.control}
            name="disclosureConsent"
            label="I consent to the use and disclosure of my health
            information for treatment purposes."
          />

          <CustomFormField
            fieldType={FormFieldType.CHECKBOX}
            control={form.control}
            name="privacyConsent"
            label="I acknowledge that I have reviewed and agree to the
            privacy policy"
          />
        </section>

        <SubmitButton isLoading={isLoading}>Submit and Continue</SubmitButton>
      </form>
    </Form>
  );
};

export default RegisterForm;
