"use client"

import {createClientComponentClient} from '@supabase/auth-helpers-nextjs'
import axios from "axios";
import {useEffect, useState} from "react";
import useUserStore from "@/store/user";
import NavigationBar from "@/components/nav/NavigationBar";
import Guilds from "@/components/card/Guilds";
import Spinner from "@/components/loading/Spinner";
import LoginButton from "@/components/button/LoginButton";
import TopClientLayout from "@/components/layout/TopClientLayout";
import {backendResGuilds} from "@/utils/backend_res";


// 管理できるサーバーの一覧を表示します
export default function Index() {
  const supabase = createClientComponentClient()
  const [guilds, setGuilds] = useState<backendResGuilds>()
  const [backendLoading, setBackendLoading] = useState<boolean>(true)
  const store = useUserStore()

  useEffect(() => {
    // backendからサーバーの一覧を取得します
    supabase.auth.getSession().then(({data: {session}}) => {
      // loginUserIdが入ったタイミング(ログインorログイン状態でリロード)で、バックエンドから1度だけ取得します
      if (session?.provider_token && store.loginUserId) {
        axios.get(`${process.env.NEXT_PUBLIC_BE_URL!}/api/guild`, {
          headers: {"Authorization": `Bearer ${session.provider_token}`}
        }).then((res) => {
          setGuilds(res.data)
          setBackendLoading(false)
        })
      }
    })
  }, [store.loginUserId])

  return (
    <TopClientLayout>
      <div className="min-h-screen bg-gradient_1 bg-cover bg-center">
        <NavigationBar tabVisible={false}/>
        <div className="py-24 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {store.loginLoading ? (
              <Spinner/>
            ) : (
              store.loginUserId ? (
                <>
                  <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">サーバーを選択</h2>
                    <p className="my-6 text-lg leading-8 text-gray-600">
                      ここに表示されていないサーバーは、botが導入されていません。botを導入してからダッシュボードに移動してください。
                    </p>
                  </div>
                  {backendLoading ? <Spinner/> : (
                    guilds && (
                      <Guilds servers={guilds}/>
                    ))
                  }
                </>
              ) : (
                <div className="mx-auto max-w-2xl lg:mx-0">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Login</h2>
                  <p className="my-6 text-lg leading-8 text-gray-600">
                    Discordでログインをしてください。
                  </p>
                  <LoginButton/>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </TopClientLayout>
  )
}