"use client"

import NavigationBar from "@/components/nav/NavigationBar";
import React, {useEffect, useState} from "react";
import TopClientLayout from "@/components/layout/TopClientLayout";
import useUserStore from "@/store/user";
import Spinner from "@/components/loading/Spinner";
import DashboardContentLayout from "@/components/layout/DashboardContentLayout";
import Heading from "@/components/section/Heading";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import {GetServerInfo} from "@/utils/api/info/server/server";
import LoginSection from "@/components/section/LoginSection";
import OperatorRoleConfig from "@/components/section/OperatorRoleConfig";
import {guild, role, user} from "@/utils/backend_res_type";
import {GetAllRoles} from "@/utils/api/server/server";

export default function Index({
  params: {guildId}
}: {
  params: { guildId: string }
}) {
  const store = useUserStore()
  const supabase = createClientComponentClient()

  const [guildInfo, setGuild] = useState<guild>()
  const [subscriber, setSubscriber] = useState<user>()
  const [operatorRoles, setOperatorRoles] = useState<role[]>([])
  const [allRoles, setAllRoles] = useState<role[]>([])

  useEffect(() => {
    // backendからサーバー全体のロールの権限を取得します
    supabase.auth.getSession().then(({data: {session}}) => {
      if (session) {
        GetAllRoles({accessToken: session.access_token, guildId: guildId})
          .then((res) => {
            // 全ロールを保存します
            setAllRoles(res.roles)
            setGuild(res.server)
          })
          .catch(e => console.error(e))
      }
    })
  }, [store.loginUserId])

  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
      if (session) {
        GetServerInfo({accessToken: session.access_token, guildId: guildId})
          .then(res => {
            console.log("res: ", res.operator_role)
            setSubscriber(res.subscriber)
            setOperatorRoles(res.operator_role)
          })
          .catch(e => console.error(e))
      }
    })
  }, [])

  return (
    <TopClientLayout>
      <div className="min-h-screen bg-gradient_1 bg-cover bg-center">
        <NavigationBar guildId={guildId} focusTab="config"/>
        {store.loginLoading ? (
          <Spinner/>
        ) : (
          store.loginUserId ? (
            <DashboardContentLayout>
              <Heading
                title="設定"
                content="このbot(アプリケーション)の設定を行います。"
                serverName={guildInfo?.name || ""}
                serverIconUrl={guildInfo?.icon_url || ""}
              />
              <OperatorRoleConfig
                allRoles={allRoles}
                selectedRoles={operatorRoles}
                setSelectedRoles={setOperatorRoles}
              />
            </DashboardContentLayout>
          ) : (
            <LoginSection/>
          )
        )}
      </div>
    </TopClientLayout>
  )
}