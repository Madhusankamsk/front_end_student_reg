import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import NavBar from "@/components/base/NavBar";
import Section_A from "@/components/student/Section_A"
import Section_B from "@/components/student/Section_B";
import Section_C from "@/components/student/Section_C";
import Section_E from "@/components/student/Section_E";
import Section_D from "@/components/student/Section_D";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      {/* <NavBar/> */}
      <Section_A/>
      <Section_B/>
      <Section_C/>
      <Section_D/>
      <Section_E/>
    </div>
  );
}
