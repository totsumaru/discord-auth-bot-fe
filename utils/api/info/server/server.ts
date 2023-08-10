import axios from "axios";
import {guild, role, user} from "@/utils/backend_res_type";

// ============================================
// `/api/info/server`のリクエストです
// ============================================

// バックエンドからのレスポンスです
type ApiInfoServerRes = {
  server: guild
  subscriber: user
  operator_role: role[]
}

// リクエストです
type ApiInfoServerReq = {
  accessToken: string
  guildId: string
}

// サーバーの情報を取得します
export const GetServerInfo = async ({
  accessToken,
  guildId,
}: ApiInfoServerReq): Promise<ApiInfoServerRes> => {
  const url = `${process.env.NEXT_PUBLIC_BE_URL!}/api/info/server?server_id=${guildId}`
  try {
    const res = await axios.get<ApiInfoServerRes>(url, {
      headers: {"Authorization": `Bearer ${accessToken}`}
    })
    return res.data
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : "unknown error")
  }
}