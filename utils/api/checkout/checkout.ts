// ============================================
// `/api/checkout`のPOSTリクエストです
// ============================================

import axios from "axios";

type CheckoutRes = {
  redirect_url: string
}

type CheckoutReq = {
  guildId: string
  accessToken: string
}

export const Checkout = async ({
  guildId, accessToken
}: CheckoutReq): Promise<CheckoutRes> => {
  const url = `${process.env.NEXT_PUBLIC_BE_URL!}/api/checkout?server_id=${guildId}`

  try {
    const res = await axios.post<CheckoutRes>(url, {}, {
      headers: {"Authorization": `Bearer ${accessToken}`}
    })
    return res.data
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : "unknown error")
  }
}