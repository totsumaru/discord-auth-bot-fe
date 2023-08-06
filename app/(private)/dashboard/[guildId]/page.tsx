"use client"

import NavigationBar from "@/components/nav/NavigationBar";
import React, {useEffect, useState} from "react";
import useUserStore from "@/store/user";
import axios from "axios";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import {role} from "@/app/(private)/dashboard/[guildId]/backend_res";
import RolesTable from "@/components/table/RolesTable";
import Spinner from "@/components/loading/Spinner";
import ReturnTop from "@/components/button/ReturnTop";

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

  supabase.auth.onAuthStateChange(
    (event, session) => {
      if (event === 'SIGNED_IN') {
        // storeにログインユーザーを追加します
        store.setLoginUserId(session?.user.id || "");
      } else if (event === 'SIGNED_OUT') {
        store.setLoginUserId("");
      }
    }
  );

  return (
    <>
      <div className="min-h-screen bg-gradient_1 bg-cover bg-center">
        <NavigationBar tabVisible={true}/>
        {store.loginLoading ? (
          <Spinner/>
        ) : (
          store.loginUserId ? (
            <RolesTable roles={roles}/>
          ) : (
            <ReturnTop/>
          )
        )}
      </div>
    </>
  )
}