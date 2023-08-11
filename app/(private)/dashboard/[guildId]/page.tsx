import NavigationBar from "@/components/nav/NavigationBar";
import React from "react";
import RolesTable from "@/components/table/RolesTable";
import DashboardContentLayout from "@/components/layout/DashboardContentLayout";
import Heading from "@/components/section/Heading";
import {GetAllRoles} from "@/utils/api/server/server";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";

export default async function Index({
  params: {guildId}
}: {
  params: { guildId: string }
}) {
  const supabase = createServerComponentClient({cookies})
  const {data: {session}} = await supabase.auth.getSession()

  const {roles, server} = await GetAllRoles({
    accessToken: session?.access_token || "",
    guildId: guildId,
  })

  return (
    <div className="min-h-screen bg-gradient_1 bg-cover bg-center">
      <NavigationBar
        guildId={guildId}
        focusTab="server"
        accessToken={session?.access_token || ""}
      />
      <DashboardContentLayout>
        <Heading
          title={"サーバー全体の権限"}
          content={"各ロールのデフォルトの権限です。"}
          serverName={server.name ?? ""}
          serverIconUrl={server.icon_url ?? ""}
        />
        <RolesTable roles={roles} tableType={"server"}/>
      </DashboardContentLayout>
    </div>
  )
}