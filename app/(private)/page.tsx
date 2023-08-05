"use client"

import {createClientComponentClient} from '@supabase/auth-helpers-nextjs'
import axios from "axios";
import {useEffect, useState} from "react";
import useUserStore from "@/store/user";
import NavigationBar from "@/components/nav/NavigationBar";

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
      console.log("token: ", session?.provider_token)
      if (session?.provider_token && !backend?.servers[0].id) {
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
    <div className="">
      <NavigationBar tabVisible={false}/>
      <p>hello</p>
      {backend?.servers.map(server => ( // Mapping関数を追加
        <div key={server.id}>
          <h2>{server.name}</h2>
        </div>
      ))}
    </div>
  )
}
