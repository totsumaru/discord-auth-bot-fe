"use client"

import {createClientComponentClient} from '@supabase/auth-helpers-nextjs'
import {useEffect, useState} from "react";

// 管理できるサーバーの一覧を表示します
export default function Index() {
  const supabase = createClientComponentClient()
  const [userId, setUserId] = useState<string>("")

  useEffect(() => {
    supabase.auth.getUser().then(({data: {user}}) => {
      if (user) {
        setUserId(user.id)
      }
    })
  }, [])

  return (
    <div className="">
      <p>hello</p>
    </div>
  )
}
