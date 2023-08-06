"use client"

import NavigationBar from "@/components/nav/NavigationBar";
import React, {useEffect, useState} from "react";
import useUserStore from "@/store/user";
import axios from "axios";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import {role} from "@/app/(private)/dashboard/[guildId]/backend_res";
import RolesTable from "@/components/table/RolesTable";

export default function Index({
  params: {guildId}
}: {
  params: { guildId: string }
}) {
  const supabase = createClientComponentClient()
  const store = useUserStore()
  const [roles, setRoles] = useState<role[]>([])

  useEffect(() => {
    store.initialize()
  }, [])

  useEffect(() => {
    // backendからサーバー全体のロールの権限を取得します
    supabase.auth.getSession().then(({data: {session}}) => {
      const url = `${process.env.NEXT_PUBLIC_BE_URL!}/api/server?server_id=${guildId}`
      axios.get(url, {
        headers: {
          "Authorization": `Bearer ${session?.access_token}`
        }
      }).then((res) => {
        setRoles(res.data.roles)
      }).catch((e) => {
        console.log(e)
      })
    })
  }, [store.loginUserId])

  return (
    <>
      <div className="min-h-screen bg-gradient_1 bg-cover bg-center">
        <NavigationBar tabVisible={true}/>
        <RolesTable roles={roles}/>
      </div>
    </>
  )
}