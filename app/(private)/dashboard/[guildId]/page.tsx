"use client"

import NavigationBar from "@/components/nav/NavigationBar";
import React, {useEffect, useState} from "react";
import useUserStore from "@/store/user";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import RolesTable from "@/components/table/RolesTable";
import Spinner from "@/components/loading/Spinner";
import DashboardContentLayout from "@/components/layout/DashboardContentLayout";
import Heading from "@/components/section/Heading";
import TopClientLayout from "@/components/layout/TopClientLayout";
import {GetAllRoles} from "@/utils/api/server/server";
import {role} from "@/utils/backend_res_type";
import LoginSection from "@/components/section/LoginSection";

export default function Index({
  params: {guildId}
}: {
  params: { guildId: string }
}) {
  const supabase = createClientComponentClient()
  const store = useUserStore()
  const [roles, setRoles] = useState<role[]>([])
  const [guildName, setGuildName] = useState<string>("")
  const [guildIconUrl, setGuildIconUrl] = useState<string>("")

  useEffect(() => {
    // backendからサーバー全体のロールの権限を取得します
    supabase.auth.getSession().then(({data: {session}}) => {
      if (session) {
        GetAllRoles({accessToken: session.access_token, guildId: guildId})
          .then((res) => {
            // 全ロールを保存します
            setRoles(res.roles)
            setGuildName(res.server_name)
            setGuildIconUrl(res.server_icon_url)
          }).catch(e => {
          console.error(e)
        })
      }
    })
  }, [store.loginUserId])

  return (
    <TopClientLayout>
      <div className="min-h-screen bg-gradient_1 bg-cover bg-center">
        <NavigationBar tabVisible={true} guildId={guildId} isServer={true}/>
        {store.loginLoading ? (
          <Spinner/>
        ) : (
          store.loginUserId ? (
            <DashboardContentLayout>
              <Heading
                title={"サーバー全体の権限"}
                content={"各ロールのデフォルトの権限です。"}
                serverName={guildName}
                serverIconUrl={guildIconUrl}
              />
              <RolesTable roles={roles} tableType={"server"}/>
            </DashboardContentLayout>
          ) : (
            <LoginSection/>
          )
        )}
      </div>
    </TopClientLayout>
  )
}