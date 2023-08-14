"use client"

import {useRouter} from "next/navigation";
import {Checkout} from "@/utils/api/checkout/checkout";
import {ArrowRightCircleIcon} from "@heroicons/react/24/outline";
import {useState} from "react";
import ButtonSpinnerSVG from "@/components/loading/ButtonSpinnerSVG";

type Props = {
  serverId: string
  accessToken: string
}


export default function PaymentToProButton({
  serverId, accessToken
}: Props) {
  const router = useRouter()
  const [waiting, setWaiting] = useState<boolean>(false)

  return (
    <button
      type="button"
      className="inline mt-3 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={(event) => {
        event.preventDefault()
        setWaiting(true)
        Checkout({guildId: serverId, accessToken: accessToken})
          .then(res => router.push(res.redirect_url))
          .catch(e => console.error(e))
      }}
      disabled={waiting}
    >
      {waiting && <ButtonSpinnerSVG/>}
      <span className="mr-1">
        Proプランに変更
      </span>
      <ArrowRightCircleIcon className="h-5 w-5 inline pb-0.5"/>
    </button>
  )
}