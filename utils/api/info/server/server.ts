import axios from "axios";

// ============================================
// `/api/info/server`のリクエストです
// ============================================

// バックエンドからのレスポンスです
type ApiInfoServerRes = {
  server_id: string
  subscriber: {
    id: string
    name: string
    icon_url: string
  },
  operator_role_id: string[]
}

// リクエストです
type ApiServerReq = {
  accessToken: string
  guildId: string
}

// サーバーの情報を取得します
export const GetServerInfo = async ({
  accessToken,
  guildId,
}: ApiServerReq): Promise<ApiInfoServerRes> => {
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