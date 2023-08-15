import {guild} from "@/utils/backend_res_type";
import axios from "axios";

// ============================================
// `/api/guild`のリクエストです
// ============================================

// バックエンドからのレスポンスです
type ApiGuildRes = {
  servers: guild[]
}

// リクエストです
type ApiServerReq = {
  provider_token: string
}

// 特定のサーバー全体のロールの権限を取得します
export const GetGuilds = async ({
  provider_token
}: ApiServerReq): Promise<ApiGuildRes> => {
  const url = `${process.env.NEXT_PUBLIC_BE_URL!}/api/guild`
  try {
    const res = await axios.get<ApiGuildRes>(url, {
      headers: {"Authorization": `Bearer ${provider_token}`}
    })
    return res.data
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : "unknown error")
  }
}