import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";

export default function loginPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Left Image Section */}
      <div className="hidden lg:flex justify-center items-center h-screen">
        <Image
          src="/auth_img.svg"
          width={500}
          height={500}
          alt="auth_img"
          className="w-full object-contain"
        />
      </div>

      {/* Right Login Section */}
      <div className="flex justify-center items-center h-screen">
        <div className="w-full p-4 lg:w-[500px]">
          {/* Logo and Greeting */}
          <div className="mb-6">
            <Image src="/404.svg" width={50} height={50} alt="logo" />
            <h1 className="text-xl font-semibold mt-2">Hello guys</h1>
          </div>

          {/* Tabs Section */}
          <Tabs defaultValue="login">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <Login/>
            <Register/>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
