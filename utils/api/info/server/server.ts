import axios from "axios";
import {guild, role, user} from "@/utils/backend_res_type";

// ============================================
// `/api/info/server`のGETリクエストです
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

// ============================================
// `/api/info/server`のPATCHリクエストです
// ============================================

// リクエストです
type PatchReq = {
  accessToken: string
  guildId: string
  operatorRoleIds: string[]
}

// オペレーターロールを更新します
export const UpdateOperatorRoles = async ({
  accessToken,
  guildId,
  operatorRoleIds,
}: PatchReq): Promise<ApiInfoServerRes> => {
  const url = `${process.env.NEXT_PUBLIC_BE_URL!}/api/info/server?server_id=${guildId}`
  const data: {
    role_id: string[]
  } = {
    role_id: operatorRoleIds
  };

  const headers = {
    headers: {"Authorization": `Bearer ${accessToken}`},
  }

  try {
    const res = await axios.patch<ApiInfoServerRes>(url, data, headers)
    return res.data
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : "unknown error")
  }
}
