// サインインイベントを監視するため、クライアントコンポーネントとしています
"use client"

import {createClientComponentClient} from '@supabase/auth-helpers-nextjs'
import {useEffect, useState} from "react";
import {guild, user} from "@/utils/backend_res_type";
import {GetGuilds} from "@/utils/api/guild/guild";
import GuildsCard from "@/components/card/GuildsCard";
import {Session} from "@supabase/supabase-js";
import NavigationClient from "@/components/nav/NavigationClient";
import {GetUserInfo} from "@/utils/api/info/user/user";
import LoginButton from "@/components/button/LoginButton";
import Spinner from "@/components/loading/Spinner";
import SimpleHeader from "@/components/nav/SimpleHeader";

// 管理できるサーバーの一覧を表示します
export default function Index() {
  const supabase = createClientComponentClient()
  const [session, setSession] = useState<Session | null>(null)
  const [guilds, setGuilds] = useState<guild[] | null>(null)
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

  const guildsComponent = () => {
    return (
      <>
        {guilds ? (
          <>
            {loginUser && <NavigationClient focusTab="none" loginUser={loginUser}/>}
            <div className="py-24 sm:py-12 mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">サーバーを選択</h2>
                <p className="my-6 text-lg leading-8 text-gray-600">
                  ここに表示されていないサーバーは、botが導入されていません。botを導入してからダッシュボードに移動してください。
                </p>
              </div>
              <GuildsCard servers={guilds!}/>
            </div>
          </>
        ) : (
          guilds === null ? <Waiting/> : (
            <>
              {loginUser && <NavigationClient focusTab="none" loginUser={loginUser}/>}
              <div className="py-24 sm:py-12 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">サーバーを選択</h2>
                  <p className="my-6 text-lg leading-8 text-gray-600">
                    選択できるサーバーがありません。<br/>
                    botが導入されており、あなたが「管理者権限」または「このbot内で指定した操作者のロール」を持っていることを確認してください。
                  </p>
                </div>
              </div>
            </>
          )
        )}
      </>
    )
  }

  const reLoginComponent = () => {
    return (
      <div className="min-h-screen bg-gradient_1 bg-cover bg-center">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              もう一度ログインしてください
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              恐れ入りますが、再度ログインをして、サーバーの一覧を取得してください。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <LoginButton/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient_1 bg-cover bg-center">
      {session ? (
        session.provider_token ? (
          guildsComponent()
        ) : (
          reLoginComponent()
        )
      ) : <Waiting/>}
    </div>
  )
}

const Waiting = () => {
  return (
    <>
      <SimpleHeader/>
      <Spinner/>
      <div className="flex flex-col items-center">
        <p className="mt-10 mb-5 text-center">画面が遷移しない場合は、再度ログインをしてください</p>
        <LoginButton/>
      </div>
    </>
  )
}