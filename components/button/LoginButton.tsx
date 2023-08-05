"use client"

import useUserStore from "@/store/user";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";

export default function LoginButton() {
  const {loginUserId} = useUserStore()
  const supabase = createClientComponentClient();

  const signIn = async () => {
    const {data, error} = await supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        scopes: "guilds"
      }
    })
    if (error) {
      alert("エラーが発生しました")
    }
  }

  const signOut = async () => {
    const {error} = await supabase.auth.signOut()
    if (error) {
      alert("ログアウトに失敗しました")
    }
  }

  return (
    <>
      {loginUserId === undefined
        ? ""
        : loginUserId
          ? (
            <button
              type="button"
              className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              onClick={signOut}
            >
              ログアウト
            </button>
          )
          : (
            <button
              type="button"
              className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={signIn}
            >
              Discordでログイン
            </button>
          )
      }
    </>
  )
}