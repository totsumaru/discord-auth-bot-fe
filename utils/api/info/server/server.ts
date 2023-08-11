import axios from "axios";

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
}: PatchReq): Promise<void> => {
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
    await axios.patch<null>(url, data, headers)
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : "unknown error")
  }
}
