import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import NavBar from "@/components/base/NavBar";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <NavBar/>
    </div>
  );
}
