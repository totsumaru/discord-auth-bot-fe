"use client"

import {CreateCustomerPortalURL} from "@/utils/api/checkout/portal/portal";
import {useRouter} from "next/navigation";
import {useState} from "react";
import ButtonSpinnerSVG from "@/components/loading/ButtonSpinnerSVG";

type Props = {
  guildId: string
  accessToken: string
}

export default function ManagePaymentButton({guildId, accessToken}: Props) {
  const router = useRouter()
  const [waiting, setWaiting] = useState<boolean>(false)

  const handle = async () => {
    setWaiting(true)
    const {redirect_url} = await CreateCustomerPortalURL({
      guildId: guildId,
      accessToken: accessToken,
    })

    router.push(redirect_url)
  }

  return (
    <button
      type="button"
      className="mt-3 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={handle}
      disabled={waiting}
    >
      {waiting && <ButtonSpinnerSVG/>}
      支払いの管理
    </button>
  )
}