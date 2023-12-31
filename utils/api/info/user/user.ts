import axios from "axios";
import {user} from "@/utils/backend_res_type";

// ============================================
// `/api/info/user`のリクエストです
// ============================================

// バックエンドからのレスポンスです
type ApiInfoUserRes = {
  user: user
}

// リクエストです
type ApiServerReq = {
  accessToken: string
}

// 特定のサーバー全体のロールの権限を取得します
export const GetUserInfo = async ({
  accessToken
}: ApiServerReq): Promise<ApiInfoUserRes> => {
  const url = `${process.env.NEXT_PUBLIC_BE_URL!}/api/info/user`
  try {
    const res = await axios.get<ApiInfoUserRes>(url, {
      headers: {"Authorization": `Bearer ${accessToken}`}
    })
    return res.data
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : "unknown error")
  }
}