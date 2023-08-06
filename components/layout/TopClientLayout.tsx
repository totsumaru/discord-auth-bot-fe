"use client"

import useUserStore from "@/store/user";
import {ReactNode, useEffect} from "react";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";

type Props = {
  children: ReactNode
}

export default function TopClientLayout({children}: Props) {
  const supabase = createClientComponentClient()
  const store = useUserStore()

  useEffect(() => {
    store.initialize()
  }, [])

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
      {children}
    </>
  )
}