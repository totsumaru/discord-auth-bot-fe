"use client"

import {useRouter} from "next/navigation";

type Props = {
  guildId: string
}

export default function ToConfigButton({guildId}: Props) {
  const router = useRouter()

  return (
    <button
      type="button"
      className="mt-2 rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
      onClick={(e) => {
        e.preventDefault()
        router.push(`/dashboard/${guildId}/config`)
      }}
    >
      設定に移動 →
    </button>
  )
}