import {createServerComponentClient} from '@supabase/auth-helpers-nextjs'
import NavigationBar from "@/components/nav/NavigationBar";
import GuildsCard from "@/components/card/GuildsCard";
import {GetGuilds} from "@/utils/api/guild/guild";
import {cookies} from "next/headers";

// 管理できるサーバーの一覧を表示します
export default async function Index() {
  const supabase = createServerComponentClient({cookies})
  const {data: {session}} = await supabase.auth.getSession()
  const accessToken = session?.access_token || ""

  const {servers} = await GetGuilds({
    provider_token: session?.provider_token || ""
  })

  return (
    <div className="min-h-screen bg-gradient_1 bg-cover bg-center">
      <NavigationBar
        focusTab="none"
        accessToken={accessToken}
      />
      <div className="py-24 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <>
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">サーバーを選択</h2>
              <p className="my-6 text-lg leading-8 text-gray-600">
                ここに表示されていないサーバーは、botが導入されていません。botを導入してからダッシュボードに移動してください。
              </p>
            </div>
            <GuildsCard servers={servers}/>
          </>
        </div>
      </div>
    </div>
  )
}