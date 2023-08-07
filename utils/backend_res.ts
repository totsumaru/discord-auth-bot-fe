export const ChannelType = {
  text: "text",
  category: "category",
  announce: "announce",
  forum: "forum",
  vc: "vc",
  stage: "stage",
}

// サーバー全体の権限のレスポンスです
// `/api/server`
export type backendResServer = {
  roles: {
    id: string
    name: string
    color: number
    permission: {
      [key: string]: boolean
    }
  }[]
}

// チャンネルの権限のレスポンスです
// `/api/channel ?server_id=xxx&channel_id=xxx`
export type backendResChannel = {
  channel_id: string
  channel_name: string
  channel_type: string
  is_private: boolean
  roles: {
    id: string
    name: string
    comment: string
    permission: {
      [key: string]: boolean
    }
  }[]
}

// チャンネル一覧のレスポンスです
// `api/channel/list`
export type backendResChannelList = {
  id: string
  name: string
  type: string
}[]

// 自分が所属しているサーバー一覧のレスポンスです
// `/api/guild`
export type backendResGuilds = {
  id: string
  name: string
  icon_url: string
}[]
