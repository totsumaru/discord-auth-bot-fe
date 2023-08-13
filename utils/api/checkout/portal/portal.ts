// ============================================
// `/api/portal`のPOSTリクエストです
// ============================================

import axios from "axios";

type PortalRes = {
  redirect_url: string
}

type PortalReq = {
  guildId: string
  accessToken: string
}

export const CreateCustomerPortalURL = async ({
  guildId, accessToken
}: PortalReq): Promise<PortalRes> => {
  const url = `${process.env.NEXT_PUBLIC_BE_URL!}/api/portal?server_id=${guildId}`

  try {
    const res = await axios.post<PortalRes>(url, {}, {
      headers: {"Authorization": `Bearer ${accessToken}`}
    })
    return res.data
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : "unknown error")
  }
}