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
import { Checkbox } from "@/components/ui/checkbox";

// Schema validation using Zod
const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  addressLine1: z.string().min(2, { message: "Address line 1 is required." }),
  addressLine2: z.string().min(2, { message: "Address line 2 is required." }),
  addressLine3: z.string().min(2, { message: "Address line 3 is required." }),
  addressLine4: z.string().min(2, { message: "Address line 4 is required." }),
  telephoneNumberHome: z
    .string()
    .regex(/^\d{10}$/, { message: "Telephone number must be 10 digits." }),
  applyForHostel: z.boolean(),
  applyForBursary: z.boolean(),
  hostelDetails: z.string().optional(),
  fatherName: z.string().optional(),
  fatherOccupation: z.string().optional(),
  fatherIncome: z.number().optional(),
  motherName: z.string().optional(),
  motherOccupation: z.string().optional(),
  motherIncome: z.number().optional(),
  brothersAndSistersUnder06: z.number().optional(),
  brothersAndSisters06To19: z.number().optional(),
  universityUndergraduates: z.number().optional(),
  militaryService: z.number().optional(),
  disabledSoldiers: z.number().optional(),
});

// Component
export default function Section_C() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      distanceToUniversity: "",
      fullName: "",
      addressLine1: "",
      addressLine2: "",
      addressLine3: "",
      addressLine4: "",
      telephoneNumberHome: "",
      applyForHostel: false,
      applyForBursary: false,
      hostelDetails: "",
      fatherName: "",
      fatherOccupation: "",
      fatherIncome: "",
      motherName: "",
      motherOccupation: "",
      motherIncome: "",
      brothersAndSistersUnder06: 0,
      brothersAndSisters06To19: 0,
      universityUndergraduates: 0,
      militaryService: 0,
      disabledSoldiers: 0,
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white shadow-lg rounded-lg"
        encType="multipart/form-data"
      >
        {/* Checkbox for Hostel/Bursary */}
        <div className="md:col-span-2">
          <FormLabel>Do you Apply for Hostel/Bursary?</FormLabel>
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="applyForHostel"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel>Hostel</FormLabel>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="applyForBursary"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel>Bursary</FormLabel>
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Hostel Details (only shown if Hostel or Bursary is selected) */}
        {(form.watch("applyForHostel") || form.watch("applyForBursary")) && (
          <>
            {/* Distance to University */}
            <FormField
              control={form.control}
              name="distanceToUniversity"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Distance to University (Km)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter distance to university" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Father/Guardian Details */}
            <div className="md:col-span-2">
              <h3 className="font-semibold">Father/Guardian Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fatherName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Father/Guardian's Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter father/guardian's name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fatherOccupation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Father/Guardian's Occupation</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter father's occupation" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fatherIncome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Father/Guardian's Annual Income (Rs.)</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter income" type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Mother Details */}
            <div className="md:col-span-2">
              <h3 className="font-semibold">Mother Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="motherName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mother's Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter mother's name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="motherOccupation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mother's Occupation</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter mother's occupation" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="motherIncome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mother's Annual Income (Rs.)</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter income" type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Number of Brothers and Sisters in the Family */}
            <div className="md:col-span-2">
              <h3 className="font-semibold">Number of Brothers and Sisters in the Family</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="brothersAndSistersUnder06"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Age Under 06 Years</FormLabel>
                      <FormControl>
                        <Input placeholder="Number of siblings under 06" type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="brothersAndSisters06To19"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Age From 06 to 19 Years</FormLabel>
                      <FormControl>
                        <Input placeholder="Number of siblings aged 06-19" type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="universityUndergraduates"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>University Undergraduates</FormLabel>
                      <FormControl>
                        <Input placeholder="Number of university undergraduates" type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </>
        )}

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-end">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
