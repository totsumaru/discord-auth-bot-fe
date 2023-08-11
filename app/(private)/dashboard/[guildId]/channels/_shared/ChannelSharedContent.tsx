import Heading from "@/components/section/Heading";
import ChannelSelectSidebarWithButton from "@/components/sidebar/ChannelSelectSidebarWithButton";
import React from "react";
import {channel, guild} from "@/utils/backend_res_type";

type Props = {
  guild: guild
  allChannels: channel[]
  defaultSidebarOpen: boolean
}

export default function ChannelSharedContent({
  guild, allChannels, defaultSidebarOpen
}: Props) {
  return (
    <>
      {/* タイトル */}
      <Heading
        title={"チャンネルの権限"}
        content={"サーバー全体の設定(デフォルト)から、上書きされたチャンネルの権限です。"}
        serverName={guild.name || ""}
        serverIconUrl={guild.icon_url || ""}
      />
      {/* サイドバー表示ボタン & サイドバー */}
      <ChannelSelectSidebarWithButton
        allChannels={allChannels}
        guildId={guild.id}
        defaultOpen={defaultSidebarOpen}
      />
    </>
  )
}