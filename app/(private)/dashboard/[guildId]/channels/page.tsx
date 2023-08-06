"use client"

// チャンネルの設定ページです
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import useUserStore from "@/store/user";
import React, {useEffect, useState} from "react";
import {channel} from "@/utils/backend_res";
import axios from "axios";
import Spinner from "@/components/loading/Spinner";
import NavigationBar from "@/components/nav/NavigationBar";
import ReturnTopButton from "@/components/button/ReturnTopButton";
import Heading from "@/components/section/Heading";
import DashboardContentLayout from "@/components/layout/DashboardContentLayout";
import ChannelSelectButton from "@/components/button/ChannelSelectButton";
import ChannelSelectSidebar from "@/components/sidebar/ChannelSelectSidebar";

export default function Index({
  params: {guildId}
}: {
  params: { guildId: string }
}) {
  const supabase = createClientComponentClient()
  const store = useUserStore()
  const [channels, setChannels] = useState<channel[]>([])
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

  useEffect(() => {
    store.initialize()
  }, [])

  useEffect(() => {
    // backendからチャンネル一覧を取得します
    supabase.auth.getSession().then(({data: {session}}) => {
      const url = `${process.env.NEXT_PUBLIC_BE_URL!}/api/channel/list?server_id=${guildId}`
      axios.get(url, {
        headers: {
          "Authorization": `Bearer ${session?.access_token}`
        }
      }).then((res) => {
        setChannels(res.data.channels)
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
    <div className="min-h-screen bg-gradient_1 bg-cover bg-center">
      <NavigationBar tabVisible={true} guildId={guildId} isServer={false}/>
      {store.loginLoading ? (
        <Spinner/>
      ) : (
        store.loginUserId ? (
          <DashboardContentLayout>
            <Heading
              title={"チャンネルの権限"}
              content={"サーバー全体の設定(デフォルト)から、上書きされたチャンネルの権限です。"}
            />
            <ChannelSelectButton onclickHandler={() => {
              setSidebarOpen(true)
            }}/>
            <ChannelSelectSidebar open={sidebarOpen} setOpen={setSidebarOpen}/>
          </DashboardContentLayout>
        ) : (
          <ReturnTopButton/>
        )
      )}
    </div>
  )
}