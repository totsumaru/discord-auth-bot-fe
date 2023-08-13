"use client"

import useUserStore from "@/store/user";
import {user} from "@/utils/backend_res_type";
import PaymentToProButton from "@/components/button/PaymentToProButton";
import {CreateCustomerPortalURL} from "@/utils/api/checkout/portal/portal";
import {useRouter} from "next/navigation";

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
  const router = useRouter()

  const handle = async () => {
    const {redirect_url} = await CreateCustomerPortalURL({
      guildId: guildId,
      accessToken: accessToken,
    })

    router.push(redirect_url)
  }

  // TODO: statusごとにバッジを表示

  return (
    <div className="mt-5">
      <h3 className="text-xl font-bold mt-2">2. プラン</h3>
      <div className="text-gray-600 mt-2">
        <p className="font-bold py-1">現在のプラン: {subscriber?.id ? "Pro" : "Free"}</p>
        {subscriber?.id
          ? subscriber?.id === loginUser.id
            ? (
              <>
                <p>あなたによってこのサーバーはProプランとなっています。
                  <br/>支払い情報は決済者本人しか閲覧・確認できません
                </p>
                <button
                  type="button"
                  className="mt-3 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handle}
                >
                  支払いの管理
                </button>
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
    </div>
  )
}