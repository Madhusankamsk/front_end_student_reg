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
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

// Schema validation using Zod
const formSchema = z.object({
  nameWithInitials: z
    .string()
    .min(2, { message: "Name with initials must be at least 2 characters." }),
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
  telephoneNumberMobile: z
    .string()
    .regex(/^\d{10}$/, { message: "Telephone number must be 10 digits." }),
  nationalId: z
    .string()
    .regex(/^\d{9}[vVxX]|\d{12}$/, { message: "Invalid National ID number." }),
  email: z.string().email({ message: "Invalid email address." }),
  district: z.string().min(1, { message: "Please select a district." }),
});

// Component
export default function Section_A() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nameWithInitials: "",
      fullName: "",
      addressLine1: "",
      addressLine2: "",
      addressLine3: "",
      addressLine4: "",
      telephoneNumberHome: "",
      telephoneNumberMobile: "",
      nationalId: "",
      email: "",
      district: "",
      alYear: "",
      alIndexNo: "",
      zscore: "",
      aldistrict: "",
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
        {/* Name with Initials */}
        <FormField
          control={form.control}
          name="nameWithInitials"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name with Initials</FormLabel>
              <FormControl>
                <Input placeholder="E.g., A.B.C. Perera" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Full Name */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="E.g., Anthony Benedict Christopher Perera"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Permanent Address */}
        <div className="md:col-span-2">
          <FormLabel>Permanent Address</FormLabel>
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
        {/* Telephone Number Mobile */}
        <FormField
          control={form.control}
          name="telephoneNumberMobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telephone Number (Mobile)</FormLabel>
              <FormControl>
                <Input placeholder="E.g., 0712345678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Telephone Number Home */}
        <FormField
          control={form.control}
          name="telephoneNumberHome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telephone Number (Home)</FormLabel>
              <FormControl>
                <Input placeholder="E.g., 0712345678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* National ID No */}
        <FormField
          control={form.control}
          name="nationalId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>National ID No</FormLabel>
              <FormControl>
                <Input
                  placeholder="E.g., 991234567V or 200012345678"
                  {...field}
                />
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
        {/* District */}
        <FormField
          control={form.control}
          name="district"
          render={({ field }) => (
            <FormItem>
              <FormLabel>District</FormLabel>
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
                    <SelectItem value="Colombo">Colombo</SelectItem>
                    <SelectItem value="Gampaha">Gampaha</SelectItem>
                    <SelectItem value="Kandy">Kandy</SelectItem>
                    {/* Add more districts here */}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Details of G.C.E. (A/L) */}
        <div className="md:col-span-2">
          <h2 className="text-lg font-semibold mb-4">
            Details of G.C.E. (A/L)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FormField
              control={form.control}
              name="alYear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Year</FormLabel>
                  <FormControl>
                    <Input placeholder="E.g., 2021" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="alIndexNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Index No</FormLabel>
                  <FormControl>
                    <Input placeholder="E.g., 1234567" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="zscore"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Z-Score</FormLabel>
                  <FormControl>
                    <Input placeholder="E.g., Physics" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="aldistrict"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>G.C.E. A/L District</FormLabel>
                  <FormControl>
                    <Input placeholder="E.g., Chemistry" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="md:col-span-2 flex justify-end">
          <Button type="submit">Next</Button>
        </div>
      </form>
    </Form>
  );
}
