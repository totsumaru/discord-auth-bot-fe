"use client"

import {createClientComponentClient} from '@supabase/auth-helpers-nextjs'
import axios from "axios";
import {useEffect, useState} from "react";
import useUserStore from "@/store/user";
import NavigationBar from "@/components/nav/NavigationBar";
import Guilds from "@/components/card/Guilds";

type backendRes = {
  servers: [{
    id: string
    name: string
    icon_url: string
  }]
}

// 管理できるサーバーの一覧を表示します
export default function Index() {
  const supabase = createClientComponentClient()
  const [backend, setBackend] = useState<backendRes>()
  const store = useUserStore()

  useEffect(() => {
    store.initialize()
  }, [])

  useEffect(() => {
    // backendからサーバーの一覧を取得します
    supabase.auth.getSession().then(({data: {session}}) => {
      // loginUserIdが入ったタイミング(ログインorログイン状態でリロード)で、バックエンドから1度だけ取得します
      if (session?.provider_token && store.loginUserId) {
        const url = `${process.env.NEXT_PUBLIC_BE_URL!}/api/guild`
        axios.get(url, {
          headers: {
            "Authorization": `Bearer ${session.provider_token}`
          }
        }).then((res) => {
          setBackend(res.data)
        })
      }
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
    <div className="min-h-screen bg-gradient_1 bg-cover bg-center">
      <NavigationBar tabVisible={false}/>
      {backend?.servers && (
        <Guilds servers={backend?.servers}/>
      )}
    </div>
  )
}
