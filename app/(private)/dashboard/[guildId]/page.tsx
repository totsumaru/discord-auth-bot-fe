"use client"

import NavigationBar from "@/components/nav/NavigationBar";
import React, {useEffect, useState} from "react";
import useUserStore from "@/store/user";
import axios from "axios";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import {role} from "@/app/(private)/dashboard/[guildId]/backend_res";
import RolesTable from "@/components/table/RolesTable";
import Spinner from "@/components/loading/Spinner";
import Link from "next/link";

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
            <div className="mt-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Login</h2>
              <p className="my-6 text-lg leading-8 text-gray-600">
                Topへ戻り、Discordでログインをしてください。
              </p>
              <Link
                href="/"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                トップへ戻る
              </Link>
            </div>
          )
        )}
      </div>
    </>
  )
}