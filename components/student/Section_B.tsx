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
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";

// Schema validation using Zod
const formSchema = z.object({
  nameWithInitials: z.string().min(2, { message: "Name with initials must be at least 2 characters." }),
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  addressLine1: z.string().min(2, { message: "Address line 1 is required." }),
  addressLine2: z.string().min(2, { message: "Address line 2 is required." }),
  addressLine3: z.string().min(2, { message: "Address line 3 is required." }),
  addressLine4: z.string().min(2, { message: "Address line 4 is required." }),
  telephoneNumber: z.string().regex(/^\d{10}$/, { message: "Telephone number must be 10 digits." }),
  nationalId: z.string().regex(/^\d{9}[vVxX]|\d{12}$/, { message: "Invalid National ID number." }),
  email: z.string().email({ message: "Invalid email address." }),
  district: z.string().min(1, { message: "Please select a district." }),
  sivilStatus: z.string().min(1, { message: "Please select your status" }),
  dateOfBirth: z.string().min(1, { message: "Date of birth is required." }),
  race: z.string().min(1, { message: "Please select your race." }),
  religion: z.string().min(1, { message: "Please select your religion." }),});

// Component
export default function Section_B() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nameWithInitials: "",
      fullName: "",
      addressLine1: "",
      addressLine2: "",
      addressLine3: "",
      addressLine4: "",
      telephoneNumber: "",
      nationalId: "",
      email: "",
      district: "",
      alYear: "",
      dateOfBirth: "",
      sivilStatus: "",
      race: "",
      religion: "",      alIndexNo: "",
      zscore: "",
      aldistrict: ""
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
      >
        {/* Postal Address */}
        <div className="md:col-span-2">
          <FormLabel>* Postal Address</FormLabel>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Address Line 1 */}
            <FormField
              control={form.control}
              name="addressLine1"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Address Line 1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Address Line 2 */}
            <FormField
              control={form.control}
              name="addressLine2"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Address Line 2" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Address Line 3 */}
            <FormField
              control={form.control}
              name="addressLine3"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Address Line 3" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Address Line 4 */}
            <FormField
              control={form.control}
              name="addressLine4"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Address Line 4" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="sivilStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel>* Whether Rev./Mr./Mrs. or Miss :</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <Input
                      placeholder="Select your district"
                      readOnly
                      value={field.value}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Miss">Miss</SelectItem>
                    <SelectItem value="Rev">Rev</SelectItem>
                    <SelectItem value="Mr">Mr</SelectItem>
                    <SelectItem value="Mrs">Mrs</SelectItem>
                    {/* Add more districts here */}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Date of Birth */}
        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of Birth</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Race */}
        <FormField
          control={form.control}
          name="race"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Race</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <Input
                      placeholder="Select your race"
                      readOnly
                      value={field.value}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Sinhala">Sinhala</SelectItem>
                    <SelectItem value="Tamil">Tamil</SelectItem>
                    <SelectItem value="Muslim">Muslim</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Religion */}
        <FormField
          control={form.control}
          name="religion"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Religion</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <Input
                      placeholder="Select your religion"
                      readOnly
                      value={field.value}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Buddhist">Buddhist</SelectItem>
                    <SelectItem value="Hindu">Hindu</SelectItem>
                    <SelectItem value="Islam">Islam</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        {/* Telephone Number */}
        <FormField
          control={form.control}
          name="telephoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telephone Number (Home/Mobile)</FormLabel>
              <FormControl>
                <Input placeholder="E.g., 0712345678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="E.g., example@mail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />        
        <div className="md:col-span-2 flex justify-end">
          <Button type="submit">Next</Button>
        </div>
      </form>
    </Form>
  );
}
