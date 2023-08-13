"use client"

import {useRouter} from "next/navigation";
import {Checkout} from "@/utils/api/checkout/checkout";

type Props = {
  serverId: string
  accessToken: string
}


export default function PaymentToProButton({
  serverId, accessToken
}: Props) {
  const router = useRouter()

  return (
    <button
      type="button"
      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={(event) => {
        event.preventDefault()
        Checkout({guildId: serverId, accessToken: accessToken})
          .then(res => router.push(res.redirect_url))
          .catch(e => console.error(e))
      }}
    >
      Proプランに変更
    </button>
  )
}