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

export default function Index({
  params: {guildId}
}: {
  params: { guildId: string }
}) {
  const store = useUserStore()
  const supabase = createClientComponentClient()

  const [guildName, setGuildName] = useState<string>("")
  const [guildIconUrl, setGuildIconUrl] = useState<string>("")
  const [subscriber, setSubscriber] = useState<{
    id: string
    name: string
    icon_url: string
  }>()
  const [operatorRoleIds, setOperatorRoleIds] = useState<string[]>([])

  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
      if (session) {
        GetServerInfo({accessToken: session.access_token, guildId: guildId})
          .then(res => {
            setGuildName(res.server_name)
            setGuildIconUrl(res.server_icon_url)
            setSubscriber(res.subscriber)
            setOperatorRoleIds(res.operator_role_id)
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
                serverName={guildName}
                serverIconUrl={guildIconUrl}
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