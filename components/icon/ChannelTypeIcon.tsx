"use client"

// チャンネルタイプに応じたアイコンを返します
import {
  ChannelType,
  ChannelTypeAnnounce,
  ChannelTypeCategory,
  ChannelTypeForum,
  ChannelTypeStage,
  ChannelTypeText,
  ChannelTypeVC
} from "@/utils/backend_res_type";
import {
  ChatBubbleLeftRightIcon,
  FolderIcon,
  HashtagIcon,
  MicrophoneIcon,
  SpeakerWaveIcon
} from "@heroicons/react/24/outline";
import {ReactNode} from "react";

type Props = {
  channelType: ChannelType
}

export default function ChannelTypeIcon({channelType}: Props) {
  let icon: ReactNode

  switch (channelType) {
    case ChannelTypeText:
      icon = <HashtagIcon className="h-4 w-4"/>
      break
    case ChannelTypeAnnounce:
      icon = <HashtagIcon className="h-4 w-4"/>
      break
    case ChannelTypeForum:
      icon = <ChatBubbleLeftRightIcon className="h-4 w-4"/>
      break
    case ChannelTypeCategory:
      icon = <FolderIcon className="h-3 w-3"/>
      break
    case ChannelTypeVC:
      icon = <SpeakerWaveIcon className="h-4 w-4"/>
      break
    case ChannelTypeStage:
      icon = <MicrophoneIcon className="h-4 w-4"/>
      break
  }

  return (
    <div className="items-center">
      {icon}
    </div>
  )
}