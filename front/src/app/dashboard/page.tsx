import DashNav from "@/components/dashboard/DashNav";
import React from "react";
import { authOption, CustomSession } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import CreateChat from "@/components/groupChat/CreateChat";

export default async function dashboard() {
  const session: CustomSession | null = await getServerSession(authOption);

  return (
    <div>
      <DashNav
        name={session?.user?.name!}
        image={session?.user?.image ?? undefined}
      />

      {/* Create chat part */}
      <div className="container">
        <div className="flex justify-end mt-10">
          <CreateChat user={session?.user!} />
        </div>
      </div>


    </div>
  );
}
