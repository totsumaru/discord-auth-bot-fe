"use client"

import useUserStore from "@/store/user";
import {user} from "@/utils/backend_res_type";
import PaymentToProButton from "@/components/button/PaymentToProButton";
import ManagePaymentButton from "@/components/button/ManagePaymentButton";

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
    <div className="mt-5">
      <h3 className="text-xl font-bold mt-2">2. プラン</h3>
      <div className="text-gray-600 mt-2">
        {subscriber?.id && status !== "active" && (
          <span
            className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
          >
          支払いにエラーが発生しています。status: {status}, id: {subscriber.id}
          </span>
        )}
        <p className="font-bold py-2">現在のプラン: {subscriber?.id ? "Pro🎉" : "Free ✅"}</p>
        {subscriber?.id
          ? subscriber?.id === loginUser.id
            ? (
              <>
                <p>あなたによってこのサーバーはProプランとなっています。
                  <br/>支払い情報は決済者本人しか閲覧・確認できません
                </p>
                <ManagePaymentButton guildId={guildId} accessToken={accessToken}/>
                <p className="text-xs mt-1">※このボタンは決済者本人しか表示されていません</p>
              </>
            ) : (
              <>
                <p>{subscriber?.name}によってこのサーバーはProプランとなっています。<br/>
                  支払い情報は決済者本人しか確認できません。</p>
              </>
            )
          : (
            <>
              <p>
                Proプランになると全てのチャンネルの権限を確認することができます。
              </p>
              <PaymentToProButton serverId={guildId} accessToken={accessToken}/>
            </>
          )
        }
      </div>
    </div>
  )
}