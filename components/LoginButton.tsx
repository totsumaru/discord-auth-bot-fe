"use client"

import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import {SupabaseClient} from "@supabase/supabase-js";
import {useState} from "react";

type Props = {
  userId: string
}

export default function LoginButton({userId}: Props) {
  const supabase = createClientComponentClient();
  const [user, setUser] = useState(userId);

  supabase.auth.onAuthStateChange((event, session) => {
    if (event == 'SIGNED_IN') {
      setUser(session?.user.id || "")
    } else if (event == 'SIGNED_OUT') {
      setUser("")
    }
  })

  return (
    <>
      {user ? logoutButton(supabase) : loginButton(supabase)}
    </>
  )
}

function loginButton(supabase: SupabaseClient) {
  const handler = async () => {
    const {data, error} = await supabase.auth.signInWithOAuth({
      provider: 'discord',
    })

    if (error) {
      alert("エラーが発生しました")
    }
  }

  return (
    <button
      type="button"
      className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={handler}
    >
      Discordでログイン
    </button>
  )
}

function logoutButton(supabase: SupabaseClient) {
  const handler = async () => {
    const {error} = await supabase.auth.signOut()
    if (error) {
      alert("ログアウトに失敗しました")
    }
  }

  return (
    <button
      type="button"
      className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      onClick={handler}
    >
      ログアウト
    </button>
  )
}
