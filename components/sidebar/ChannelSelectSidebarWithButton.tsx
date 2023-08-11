"use client"

import React, {useState} from "react";
import ChannelSelectButton from "@/components/button/ChannelSelectButton";
import ChannelSelectSidebar from "@/components/sidebar/ChannelSelectSidebar";
import {channel} from "@/utils/backend_res_type";

type Props = {
  allChannels: channel[]
  guildId: string
  defaultOpen: boolean
}

// サイドバーのOpenボタンとサイドバーの管理をします。
// このComponentを使用する場合は、ボタンを設置する場所に配置します。
export default function ChannelSelectSidebarWithButton({
  allChannels, guildId, defaultOpen
}: Props) {
  const [open, setOpen] = useState<boolean>(defaultOpen)

  return (
    <>
      {/* サイドバー表示ボタン*/}
      <ChannelSelectButton onclickHandler={() => setOpen(true)}/>
      {/* サイドバー */}
      <ChannelSelectSidebar
        open={open}
        setOpen={setOpen}
        channels={allChannels}
        guildId={guildId}
      />
    </>
  )
}