import NavigationBar from "@/components/nav/NavigationBar";
import DashboardContentLayout from "@/components/layout/DashboardContentLayout";
import Heading from "@/components/section/Heading";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import OperatorRoleConfig from "@/components/section/OperatorRoleConfig";
import {GetAllRoles} from "@/utils/api/server/server";
import Payment from "@/components/section/Payment";
import {cookies} from "next/headers";

export default async function Index({
  params: {guildId}
}: {
  params: { guildId: string }
}) {
  const supabase = createServerComponentClient({cookies})
  const {data: {session}} = await supabase.auth.getSession()

  const {roles, server, subscriber, operator_role} = await GetAllRoles({
    accessToken: session?.access_token || "",
    guildId: guildId,
  })

  return (
    <div className="min-h-screen bg-gradient_1 bg-cover bg-center">
      <NavigationBar
        guildId={guildId}
        focusTab="config"
        accessToken={session?.access_token || ""}
      />
      <DashboardContentLayout>
        <Heading
          title="設定"
          content="このbot(アプリケーション)の設定を行います。"
          serverName={server?.name || ""}
          serverIconUrl={server?.icon_url || ""}
        />
        <OperatorRoleConfig
          allRoles={roles}
          operatorRoles={operator_role}
        />
        <Payment subscriber={subscriber}/>
      </DashboardContentLayout>
    </div>
  )
}