import NavigationBar from "@/components/nav/NavigationBar";
import DashboardContentLayout from "@/components/layout/DashboardContentLayout";
import Heading from "@/components/section/Heading";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import OperatorRoleConfig from "@/components/section/OperatorRoleConfig";
import {GetAllRoles} from "@/utils/api/server/server";
import Payment from "@/components/section/Payment";
import {cookies} from "next/headers";
import {GetUserInfo} from "@/utils/api/info/user/user";

export default async function Index({
  params: {guildId}
}: {
  params: { guildId: string }
}) {
  const supabase = createServerComponentClient({cookies})
  const {data: {session}} = await supabase.auth.getSession()
  const accessToken = session?.access_token || ""

  const {roles, server, subscriber, operator_role, status} = await GetAllRoles({
    accessToken: accessToken,
    guildId: guildId,
  })

  const {user} = await GetUserInfo({accessToken: accessToken})

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
          accessToken={accessToken}
          guildId={guildId}
        />
        <Payment
          subscriber={subscriber}
          guildId={guildId}
          accessToken={accessToken}
          status={status}
          loginUser={user}
        />
      </DashboardContentLayout>
    </div>
  )
}