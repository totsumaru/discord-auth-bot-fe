"use client"

import {createClientComponentClient} from '@supabase/auth-helpers-nextjs'
import {useEffect, useState} from "react";
import Spinner from "@/components/loading/Spinner";
import {guild, user} from "@/utils/backend_res_type";
import {GetGuilds} from "@/utils/api/guild/guild";
import GuildsCard from "@/components/card/GuildsCard";
import {Session} from "@supabase/supabase-js";
import NavigationClient from "@/components/nav/NavigationClient";
import {GetUserInfo} from "@/utils/api/info/user/user";

// 管理できるサーバーの一覧を表示します
export default function Index() {
  const supabase = createClientComponentClient()
  const [session, setSession] = useState<Session | null>(null)
  const [guilds, setGuilds] = useState<guild[]>()
  const [loginUser, setLoginUser] = useState<user>()

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
      setSession(session)
    }
  });

  const setSessionFunc = () => {
    supabase.auth.getSession().then(({data: {session}}) => {
      if (session) {
        // loginUserIdが入ったタイミング(ログインorログイン状態でリロード)で、
        // バックエンドから1度だけ取得します
        if (session?.provider_token && !guilds) {
          GetGuilds({provider_token: session.provider_token})
            .then(res => setGuilds(res.servers))
            .catch(e => console.error(e))
        }
        GetUserInfo({accessToken: session.access_token})
          .then(res => setLoginUser(res.user))
          .catch(e => console.error(e))
      }
    })
  }

  useEffect(() => {
    setSessionFunc()
  }, [session])

  return (
    <div className="min-h-screen bg-gradient_1 bg-cover bg-center">
      {guilds ? (
        <>
          {loginUser && (
            <NavigationClient
              focusTab="none"
              loginUser={loginUser}
            />
          )}
          <div className="py-24 sm:py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">サーバーを選択</h2>
                <p className="my-6 text-lg leading-8 text-gray-600">
                  ここに表示されていないサーバーは、botが導入されていません。botを導入してからダッシュボードに移動してください。
                </p>
              </div>
              <GuildsCard servers={guilds!}/>
            </div>
          </div>
        </>
      ) : (
        <Spinner/>
      )}
    </div>
  )
}