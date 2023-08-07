"use client"

// チャンネルの設定ページです
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import useUserStore from "@/store/user";
import React, {useEffect, useState} from "react";
import Spinner from "@/components/loading/Spinner";
import NavigationBar from "@/components/nav/NavigationBar";
import ReturnTopButton from "@/components/button/ReturnTopButton";
import Heading from "@/components/section/Heading";
import DashboardContentLayout from "@/components/layout/DashboardContentLayout";
import ChannelSelectButton from "@/components/button/ChannelSelectButton";
import ChannelSelectSidebar from "@/components/sidebar/ChannelSelectSidebar";
import RolesTable from "@/components/table/RolesTable";
import TopClientLayout from "@/components/layout/TopClientLayout";
import {GetChannelList} from "@/utils/api/channel/list/list";
import {GetChannel} from "@/utils/api/channel/channel";
import {channel, role} from "@/utils/backend_res_type";

export default function Index({
  params: {guildId}
}: {
  params: { guildId: string }
}) {
  const supabase = createClientComponentClient()
  const store = useUserStore()
  const [allChannels, setAllChannels] = useState<channel[]>([])
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true)
  const [currentChannelId, setCurrentChannelId] = useState<string>("")

  const [currentChannel, setCurrentChannel] = useState<channel>()
  const [roles, setRoles] = useState<role[]>([])

  useEffect(() => {
    // backendからチャンネル一覧を取得します
    supabase.auth.getSession().then(({data: {session}}) => {
      if (session) {
        GetChannelList({accessToken: session.access_token, guildId: guildId})
          .then(res => {
            setAllChannels(res.channels)
          }).catch(e => {
          console.error(e)
        })
      }
    })
  }, [store.loginUserId])

  useEffect(() => {
    if (currentChannelId) {
      supabase.auth.getSession().then(({data: {session}}) => {
        if (session) {
          GetChannel({accessToken: session.access_token, guildId: guildId, channelId: currentChannelId})
            .then(res => {
              setCurrentChannel(res.channel)
              setRoles(res.roles)
            }).catch(e => {
            console.error(e)
          })
        }
      })
    }
  }, [currentChannelId])

  return (
    <TopClientLayout>
      <div className="min-h-screen bg-gradient_1 bg-cover bg-center">
        <NavigationBar tabVisible={true} guildId={guildId} isServer={false}/>
        {store.loginLoading ? (
          <Spinner/>
        ) : (
          store.loginUserId ? (
            <DashboardContentLayout>
              {/* タイトル */}
              <Heading
                title={"チャンネルの権限"}
                content={"サーバー全体の設定(デフォルト)から、上書きされたチャンネルの権限です。"}
              />
              {/* サイドバー表示ボタン*/}
              <ChannelSelectButton onclickHandler={() => {
                setSidebarOpen(true)
              }}/>
              {/* サイドバー */}
              <ChannelSelectSidebar
                open={sidebarOpen}
                setOpen={setSidebarOpen}
                channels={allChannels}
                setCurrentChannelId={setCurrentChannelId}
              />
              {currentChannelId && (
                <RolesTable roles={roles} tableType={currentChannel?.type!}/>
              )}
            </DashboardContentLayout>
          ) : (
            <ReturnTopButton/>
          )
        )}
      </div>
    </TopClientLayout>
  )
}