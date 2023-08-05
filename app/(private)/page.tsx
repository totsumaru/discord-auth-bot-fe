"use client"

import {createClientComponentClient} from '@supabase/auth-helpers-nextjs'
import axios from "axios";
import {useEffect, useState} from "react";

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
  const [loading, setLoading] = useState<boolean>(true)
  const [userId, setUserId] = useState<string>("")
  const [providerToken, setProviderToken] = useState<string>("")
  const [backend, setBackend] = useState<backendRes>()

  useEffect(() => {
    supabase.auth.getUser().then(({data: {user}}) => {
      if (user) {
        setUserId(user.id)
      }
    })
    setLoading(false)
  }, [])

  useEffect(() => {
    supabase.auth.getSession().then((session) => {
      const providerToken = session.data.session?.provider_token || ""
      setProviderToken(providerToken)
    })
  }, [userId])

  useEffect(() => {
    if (providerToken) {
      const url = `${process.env.NEXT_PUBLIC_BE_URL!}/api/guild`

      axios.get(url, {
        headers: {
          "Authorization": `Bearer ${providerToken}`
        }
      }).then((res) => {
        setBackend(res.data)
      })
    }
  }, [providerToken])

  return (
    <div className="">
      <p>hello</p>
      {backend?.servers.map(server => ( // Mapping関数を追加
        <div key={server.id}>
          <h2>{server.name}</h2>
        </div>
      ))}
    </div>
  )
}
