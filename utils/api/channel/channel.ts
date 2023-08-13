import {channel, guild, role} from "@/utils/backend_res_type";
import axios from "axios";

// ============================================
// `/api/channel?server_id=xxx&channel_id=xxx`のリクエストです
// ============================================

// バックエンドからのレスポンスです
type ApiChannelRes = {
  server: guild
  channel: channel
  is_private: boolean
  roles: role[]
  is_active: boolean
}

// リクエストです
type ApiChannelReq = {
  accessToken: string
  guildId: string
  channelId: string
}

// 特定のサーバー,チャンネルの権限を取得します
export const GetChannel = async ({
  accessToken, guildId, channelId
}: ApiChannelReq): Promise<ApiChannelRes> => {
  const url = `${process.env.NEXT_PUBLIC_BE_URL!}/api/channel?server_id=${guildId}&channel_id=${channelId}`
  try {
    const res = await axios.get<ApiChannelRes>(url, {
      headers: {"Authorization": `Bearer ${accessToken}`}
    })
    return res.data
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : "unknown error")
  }
}