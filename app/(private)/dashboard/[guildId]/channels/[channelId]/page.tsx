// チャンネルのロール表示です
//
// Tableを表示します。
import NavigationBar from "@/components/nav/NavigationBar";
import React from "react";
import DashboardContentLayout from "@/components/layout/DashboardContentLayout";
import ChannelSharedContent from "@/app/(private)/dashboard/[guildId]/channels/_shared/ChannelSharedContent";
import {GetChannel} from "@/utils/api/channel/channel";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import {GetChannelList} from "@/utils/api/channel/list/list";

export default async function Index({
  params: {guildId, channelId}
}: {
  params: { guildId: string, channelId: string }
}) {
  const supabase = createServerComponentClient({cookies})
  const {data: {session}} = await supabase.auth.getSession()
  const accessToken = session?.access_token || ""

  const {server, channel, is_private, roles} = await GetChannel({
    accessToken: accessToken,
    guildId: guildId,
    channelId: channelId,
  })

  const {channels: allChannels} = await GetChannelList({
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
          allChannels={allChannels}
          defaultSidebarOpen={false}
        />
      </DashboardContentLayout>
    </div>
  )
}