// チャンネルの設定ページです
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import React from "react";
import NavigationBar from "@/components/nav/NavigationBar";
import DashboardContentLayout from "@/components/layout/DashboardContentLayout";
import {GetChannelList} from "@/utils/api/channel/list/list";
import {cookies} from "next/headers";
import ChannelSharedContent from "@/app/dashboard/[guildId]/channels/_shared/ChannelSharedContent";

export default async function Index({
  params: {guildId}
}: {
  params: { guildId: string }
}) {
  const supabase = createServerComponentClient({cookies})
  const {data: {session}} = await supabase.auth.getSession()
  const accessToken = session?.access_token || ""

  const {server, channels: allChannel} = await GetChannelList({
    accessToken: accessToken,
    guildId: guildId
  })

  return (
    <div className="min-h-screen bg-gradient_1 bg-cover bg-center">
      <NavigationBar
        guildId={guildId}
        focusTab="channel"
        accessToken={accessToken}
      />
      <DashboardContentLayout>
        {/* `/channels`に共通のコンポーネントです */}
        <ChannelSharedContent
          guild={server}
          allChannels={allChannel}
          defaultSidebarOpen={true}
        />
      </DashboardContentLayout>
    </div>
  )
}