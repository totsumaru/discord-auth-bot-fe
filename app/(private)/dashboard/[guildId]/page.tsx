"use client"

import NavigationBar from "@/components/nav/NavigationBar";
import React, {useEffect, useState} from "react";
import useUserStore from "@/store/user";
import axios from "axios";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import {role} from "@/utils/backend_res";
import RolesTable from "@/components/table/RolesTable";
import Spinner from "@/components/loading/Spinner";
import ReturnTopButton from "@/components/button/ReturnTopButton";
import DashboardContentLayout from "@/components/layout/DashboardContentLayout";
import Heading from "@/components/section/Heading";
import TopClientLayout from "@/components/layout/TopClientLayout";

export default function Index({
  params: {guildId}
}: {
  params: { guildId: string }
}) {
  const supabase = createClientComponentClient()
  const store = useUserStore()
  const [roles, setRoles] = useState<role[]>([])

  useEffect(() => {
    // backendからサーバー全体のロールの権限を取得します
    supabase.auth.getSession().then(({data: {session}}) => {
      const url = `${process.env.NEXT_PUBLIC_BE_URL!}/api/server?server_id=${guildId}`
      axios.get(url, {
        headers: {"Authorization": `Bearer ${session?.access_token}`}
      }).then((res) => {
        setRoles(res.data.roles)
      }).catch((e) => {
        console.log(e)
      })
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
              />
              <RolesTable roles={roles}/>
            </DashboardContentLayout>
          ) : (
            <ReturnTopButton/>
          )
        )}
      </div>
    </TopClientLayout>
  )
}