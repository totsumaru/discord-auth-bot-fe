import {guild, roleWithPermission} from "@/utils/backend_res_type";
import axios from "axios";

// ============================================
// `/api/server?server_id=xxx`のリクエストです
// ============================================

// バックエンドからのレスポンスです
type ApiServerRes = {
  server: guild
  roles: roleWithPermission[]
}

// リクエストです
type ApiServerReq = {
  accessToken: string
  guildId: string
}

// 特定のサーバー全体のロールの権限を取得します
export const GetAllRoles = async ({
  accessToken, guildId
}: ApiServerReq): Promise<ApiServerRes> => {
  const url = `${process.env.NEXT_PUBLIC_BE_URL!}/api/server?server_id=${guildId}`
  try {
    const res = await axios.get<ApiServerRes>(url, {
      headers: {"Authorization": `Bearer ${accessToken}`}
    })
    return res.data
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : "unknown error")
  }
}