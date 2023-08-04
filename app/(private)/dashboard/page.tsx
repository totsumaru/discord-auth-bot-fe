"use client"

import LoginButton from "@/components/button/LoginButton";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import {useEffect, useState} from "react";

export default function Index() {
  const supabase = createClientComponentClient()
  const [userId, setUserId] = useState<string>("")

  useEffect(() => {
   
  }, [])

  useEffect(() => {
    supabase.auth.getUser().then(({data: {user}}) => {
      if (user) {
        setUserId(user.id)
      }
    })
  }, [])

  return (
    <>
      <LoginButton userId={userId}/>
    </>
  )
}