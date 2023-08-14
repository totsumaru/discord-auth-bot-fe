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

  let server
  let channel
  let isPrivate
  let roles
  let isActive
  let allChannels

  try {
    const res = await GetChannel({
      accessToken: accessToken,
      guildId: guildId,
      channelId: channelId,
    })
    server = res.server
    channel = res.channel
    roles = res.roles
    isPrivate = res.is_private
    isActive = res.is_active
  } catch (e) {
    console.error(e)
  }

  try {
    const res = await GetChannelList({
      accessToken: accessToken,
      guildId: guildId
    })
    allChannels = res.channels
  } catch (e) {
    console.error(e)
  }

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
          allChannels={allChannels!}
          defaultSidebarOpen={false}
        />
        {isActive ? (
          <RolesTable
            roles={roles!}
            tableType={channel?.type ?? "server"}
            channelName={channel?.name ?? ""}
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