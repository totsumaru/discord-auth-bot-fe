"use client"

// チャンネルの設定ページです
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import useUserStore from "@/store/user";
import {useEffect, useState} from "react";
import {role} from "@/app/(private)/dashboard/[guildId]/backend_res";
import axios from "axios";
import Spinner from "@/components/loading/Spinner";
import NavigationBar from "@/components/nav/NavigationBar";
import ReturnTopButton from "@/components/button/ReturnTopButton";
import Heading from "@/components/section/Heading";
import DashboardContentLayout from "@/components/layout/DashboardContentLayout";
import DashboardSettingLayout from "@/components/layout/DashboardSettingLayout";

export default function Index({
  params: {guildId}
}: {
  params: { guildId: string }
}) {
  const supabase = createClientComponentClient()
  const store = useUserStore()
  const [roles, setRoles] = useState<role[]>([])

  useEffect(() => {
    store.initialize()
  }, [])

  useEffect(() => {
    // backendからサーバー全体のロールの権限を取得します
    supabase.auth.getSession().then(({data: {session}}) => {
      const url = `${process.env.NEXT_PUBLIC_BE_URL!}/api/server?server_id=${guildId}`
      axios.get(url, {
        headers: {
          "Authorization": `Bearer ${session?.access_token}`
        }
      }).then((res) => {
        setRoles(res.data.roles)
      }).catch((e) => {
        console.log(e)
      })
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
    <>
      <div className="min-h-screen bg-gradient_1 bg-cover bg-center">
        <NavigationBar tabVisible={true} guildId={guildId} isServer={false}/>
        {store.loginLoading ? (
          <Spinner/>
        ) : (
          store.loginUserId ? (
            <DashboardContentLayout>
              <DashboardSettingLayout>
                <Heading
                  title={"チャンネルの権限"}
                  content={"サーバー全体の設定(デフォルト)から、上書きされたチャンネルの権限です。"}
                />
              </DashboardSettingLayout>
            </DashboardContentLayout>
          ) : (
            <ReturnTopButton/>
          )
        )}
      </div>
    </>
  )
}