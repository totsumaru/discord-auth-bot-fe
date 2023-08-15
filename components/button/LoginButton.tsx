"use client"

import useUserStore from "@/store/user";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";

export default function LoginButton() {
  const {loginUserId, loginLoading, setLoginLoading} = useUserStore()
  const supabase = createClientComponentClient();

  const signIn = async () => {
    setLoginLoading(true)
    const {data, error} = await supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        scopes: "guilds",
        redirectTo: `${process.env.NEXT_PUBLIC_FE_URL}/callback`
      }
    })
    if (error) {
      alert("エラーが発生しました")
    }
  }

  return (
    <button
      suppressHydrationWarning
      type="button"
      className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={signIn}
    >
      Discordでログイン
    </button>
  )
}