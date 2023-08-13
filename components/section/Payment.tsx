"use client"

import useUserStore from "@/store/user";
import {user} from "@/utils/backend_res_type";
import PaymentToProButton from "@/components/button/PaymentToProButton";

type Props = {
  guildId: string
  accessToken: string
  subscriber: user | undefined
  status: string
  loginUser: user
}

export default function Payment({
  subscriber, guildId, accessToken, status, loginUser
}: Props) {
  const userStore = useUserStore()

  return (
    <div className="mt-4">
      <p>{status}</p>
      <h1>プラン</h1>
      <p>現在のプラン: {subscriber?.id ? "Pro" : "Free"}</p>
      {subscriber?.id
        ? subscriber?.id === loginUser.id
          ? (
            <>
              <p>あなたによってこのサーバーはProプランとなっています。支払い情報は決済者本人しか確認できません</p>
              <button>支払いの管理</button>
            </>
          ) : (
            <>
              <p>{subscriber?.id}</p>
              <p>{userStore.loginUserId}</p>
              <p>{subscriber?.name}によってこのサーバーはProプランとなっています。支払い情報は決済者本人しか確認できません</p>
            </>
          )
        : (
          <>
            <p>
              "Proプランになると全てのチャンネルの権限を確認することができます。"
            </p>
            <PaymentToProButton serverId={guildId} accessToken={accessToken}/>
          </>
        )
      }
    </div>
  )
}