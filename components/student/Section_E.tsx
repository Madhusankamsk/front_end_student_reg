"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Schema validation using Zod
const MAX_FILE_SIZE_MB = 2;
const pdfValidation = z
  .custom<File>((file) => file?.type === "application/pdf", {
    message: "Only PDF files are allowed.",
  })
  .refine((file) => file?.size <= MAX_FILE_SIZE_MB * 1024 * 1024, {
    message: `File size must not exceed ${MAX_FILE_SIZE_MB}MB.`,
  });

const imageValidation = z
  .custom<File>((file) =>
    ["image/jpeg", "image/jpg"].includes(file?.type),
    { message: "Only JPG or JPEG files are allowed." }
  )
  .refine((file) => file?.size <= MAX_FILE_SIZE_MB * 1024 * 1024, {
    message: `File size must not exceed ${MAX_FILE_SIZE_MB}MB.`,
  });

const formSchema = z.object({
  nic: pdfValidation.optional(),
  birthCertificate: pdfValidation.optional(),
  declarationForm: pdfValidation.optional(),
  bikkuCertificate: pdfValidation.optional(),
  photo: imageValidation.optional(),
  peoplesBankAccount: z
    .string()
    .regex(/^\d{10,12}$/, {
      message: "Account number must be 10 to 12 digits.",
    })
    .optional(),
});

export default function Section_E() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nic: undefined,
      birthCertificate: undefined,
      declarationForm: undefined,
      bikkuCertificate: undefined,
      photo: undefined,
      peoplesBankAccount: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    alert("Form Submitted Successfully!");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white shadow-lg rounded-lg"
        encType="multipart/form-data"
      >
        {/* NIC */}
        <FormField
          control={form.control}
          name="nic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>* NIC (Certified Copy): (PDF only, Max Size 2MB)</FormLabel>
              <FormControl>
                <Input type="file" accept=".pdf" onChange={(e) => field.onChange(e.target.files?.[0])} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Birth Certificate */}
        <FormField
          control={form.control}
          name="birthCertificate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>* Birth Certificate: (PDF only, Max Size 2MB)</FormLabel>
              <FormControl>
                <Input type="file" accept=".pdf" onChange={(e) => field.onChange(e.target.files?.[0])} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Declaration Form */}
        <FormField
          control={form.control}
          name="declarationForm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>* Declaration Form: (PDF only, Max Size 2MB)</FormLabel>
              <FormControl>
                <Input type="file" accept=".pdf" onChange={(e) => field.onChange(e.target.files?.[0])} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Bikku Certificate */}
        <FormField
          control={form.control}
          name="bikkuCertificate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>* Bikku Certificate (Only for Buddhist monks): (PDF only, Max Size 2MB)</FormLabel>
              <FormControl>
                <Input type="file" accept=".pdf" onChange={(e) => field.onChange(e.target.files?.[0])} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Photo */}
        <FormField
          control={form.control}
          name="photo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>* Photo (45mm*35mm color): (JPG/JPEG only, Max Size 2MB)</FormLabel>
              <FormControl>
                <Input type="file" accept=".jpg,.jpeg" onChange={(e) => field.onChange(e.target.files?.[0])} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* People's Bank Account Number */}
        <FormField
          control={form.control}
          name="peoplesBankAccount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>* People's Bank Account Number</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter 10-12 digit account number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-end">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
