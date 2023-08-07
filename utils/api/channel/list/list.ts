import {channel} from "@/utils/backend_res_type";
import axios from "axios";

// ============================================
// `/api/channel/list?server_id=xxx`のリクエストです
// ============================================

// バックエンドからのレスポンスです
type ApiChannelListRes = {
  server_name: string
  server_icon_url: string
  channels: channel[]
}

// リクエストです
type ApiChannelListReq = {
  accessToken: string
  guildId: string
}

// 特定のサーバーのチャンネル一覧を取得します
export const GetChannelList = async ({
  accessToken, guildId
}: ApiChannelListReq): Promise<ApiChannelListRes> => {
  const url = `${process.env.NEXT_PUBLIC_BE_URL!}/api/channel/list?server_id=${guildId}`
  try {
    const res = await axios.get<ApiChannelListRes>(url, {
      headers: {"Authorization": `Bearer ${accessToken}`}
    })
    return res.data
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : "unknown error")
  }
}