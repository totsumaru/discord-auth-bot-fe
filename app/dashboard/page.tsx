import {createServerComponentClient} from '@supabase/auth-helpers-nextjs'
import {GetGuilds} from "@/utils/api/guild/guild";
import GuildsCard from "@/components/card/GuildsCard";
import NavigationClient from "@/components/nav/NavigationClient";
import {GetUserInfo} from "@/utils/api/info/user/user";
import {cookies} from "next/headers";
import LoginButton from "@/components/button/LoginButton";
import {guild, user} from "@/utils/backend_res_type";
import SimpleHeader from "@/components/nav/SimpleHeader";

// 管理できるサーバーの一覧を表示します
export default async function Index() {
  const supabase = createServerComponentClient({cookies})

  const {data: {session}} = await supabase.auth.getSession()
  const providerToken = session?.provider_token || ""
  const accessToken = session?.access_token || ""

  let servers: guild[]
  let user: user

  if (providerToken) {
    const guildsRes = await GetGuilds({provider_token: providerToken})
    servers = guildsRes.servers

    const userInfoRes = await GetUserInfo({accessToken: accessToken})
    user = userInfoRes.user
  }

  // ギルド情報のコンポーネントです
  const guildsComponent = () => {
    return (
      <>
        <NavigationClient focusTab="none" loginUser={user}/>
        <div className="py-24 sm:py-12 mx-auto max-w-7xl px-6 lg:px-8">
          {servers.length > 0 ? (
            <>
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  サーバーを選択
                </h2>
                <p className="my-6 text-sm leading-8 text-gray-600">
                  ここに表示されていないサーバーは、サーバーにbotが導入されていないか、あなたに操作の権限がありません。
                </p>
              </div>
              <GuildsCard servers={servers}/>
            </>
          ) : (
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                サーバーを選択
              </h2>
              <p className="my-6 font-bold text-base leading-8 text-gray-600">
                ※選択できるサーバーがありません。
              </p>
              <p className="text-sm">
                botが導入されており、あなたが「管理者権限」または「このbot内で指定した操作者のロール」を持っていることを確認してください。
              </p>
            </div>
          )}
        </div>
      </>
    )
  }


  return (
    <>
      {providerToken ? (
        guildsComponent()
      ) : (
        reLoginComponent()
      )}
    </>
  )
}

// 再ログインのコンポーネントです
const reLoginComponent = () => {
  return (
    <>
      <SimpleHeader/>
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            もう一度ログインしてください
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            恐れ入りますが、再度ログインをして、サーバーの一覧を取得してください。
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <LoginButton/>
          </div>
        </div>
      </div>
    </>
  )
}

// const Waiting = () => {
//   return (
//     <>
//       <SimpleHeader displayLoginButton={true}/>
//       <Spinner/>
//       <div className="flex flex-col items-center">
//         <p className="mt-10 mb-5 text-center">20秒以上画面が遷移しない場合は、再度ログインをしてください</p>
//       </div>
//     </>
//   )
// }