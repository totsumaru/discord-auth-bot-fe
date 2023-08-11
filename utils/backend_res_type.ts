export const ChannelTypeText = "text"
export const ChannelTypeCategory = "category"
export const ChannelTypeAnnounce = "announce"
export const ChannelTypeForum = "forum"
export const ChannelTypeVC = "vc"
export const ChannelTypeStage = "stage"

// チャンネルのタイプです
export type ChannelType =
  typeof ChannelTypeText
  | typeof ChannelTypeCategory
  | typeof ChannelTypeAnnounce
  | typeof ChannelTypeForum
  | typeof ChannelTypeVC
  | typeof ChannelTypeStage

// ロールのレスポンスです
export type role = {
  id: string
  name: string
  color: number
  comment?: string
  permission?: {
    [key: string]: boolean
  }
}

// チャンネルのレスポンスです
export type channel = {
  id: string
  name: string
  type: ChannelType
}

// ギルドのレスポンスです
export type guild = {
  id: string
  name: string
  icon_url: string
}

// ユーザーのレスポンスです
export type user = {
  id: string
  name: string
  icon_url: string
}