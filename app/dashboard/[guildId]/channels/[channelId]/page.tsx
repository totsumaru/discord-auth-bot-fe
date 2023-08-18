// チャンネルのロール表示です
//
// Tableを表示します。
import NavigationBar from "@/components/nav/NavigationBar";
import React from "react";
import DashboardContentLayout from "@/components/layout/DashboardContentLayout";
import ChannelSharedContent from "@/app/dashboard/[guildId]/channels/_shared/ChannelSharedContent";
import {GetChannel} from "@/utils/api/channel/channel";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import {GetChannelList} from "@/utils/api/channel/list/list";
import RolesTable from "@/components/table/RolesTable";
import ToConfigButton from "@/components/button/ToConfigButton";

export default async function Index({
  params: {guildId, channelId}
}: {
  params: { guildId: string, channelId: string }
}) {
  const supabase = createServerComponentClient({cookies})
  const {data: {session}} = await supabase.auth.getSession()
  const accessToken = session?.access_token || ""

  const {server, channel, is_private, roles, is_active} = await GetChannel({
    accessToken: accessToken,
    guildId: guildId,
    channelId: channelId,
  })

  const {channels} = await GetChannelList({
    accessToken: accessToken,
    guildId: guildId
  })

  return (
    <>
      <NavigationBar
        guildId={guildId}
        focusTab="channel"
        accessToken={accessToken}
      />
      <DashboardContentLayout>
        {/* `/channels`に共通のコンポーネントです */}
        <ChannelSharedContent
          guild={server!}
          allChannels={channels}
          defaultSidebarOpen={false}
        />
        {is_active ? (
          <RolesTable
            roles={roles!}
            tableType={channel?.type ?? "server"}
            channelName={channel?.name ?? ""}
            isPrivate={is_private}
          />
        ) : (
          <div className="my-4">
            <p>チャンネルの権限を確認する場合は、Proプランにアップグレードをしてください。</p>
            <ToConfigButton guildId={guildId}/>
          </div>
        )}
      </DashboardContentLayout>
    </>
  )
}