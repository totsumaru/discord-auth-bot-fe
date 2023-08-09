"use client"

import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import LoginButton from "@/components/button/LoginButton";
import Link from "next/link";
import {Fragment, useEffect, useState} from "react";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import {GetUserInfo} from "@/utils/api/info/user/user";
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {classNames} from "@/utils/class_names";
import useUserStore from "@/store/user";
import {GetServerInfo} from "@/utils/api/info/server/server";

const tabClassFocus = "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
const tabClassNotFocus = "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"

type Props = {
  guildId?: string
  isServer?: boolean
}

export default function NavigationBar({guildId, isServer}: Props) {
  const supabase = createClientComponentClient()
  const userStore = useUserStore()
  const [loading, setLoading] = useState<boolean>(true)

  const [iconUrl, setIconUrl] = useState<string>()
  const [payUser, setPayUser] = useState<{
    id: string
    name: string
    icon_url: string
  }>()

  const signOut = async () => {
    const {error} = await supabase.auth.signOut()
    if (error) {
      console.error("ログアウトに失敗しました")
    }
  }

  useEffect(() => {
    setLoading(true)
    supabase.auth.getSession().then(({data: {session}}) => {
      if (session) {
        // ユーザー情報を取得します（アイコンURL）
        GetUserInfo({accessToken: session.access_token})
          .then((res) => {
            setIconUrl(res.icon_url)
            setLoading(false)
          })
          .catch(e => {
            console.error(e)
            setLoading(false)
          })

        // サーバーの情報を取得します
        guildId && GetServerInfo({
          accessToken: session.access_token,
          guildId: guildId,
        })
          .then((res) => {
            setPayUser(res.subscriber)
            setLoading(false)
          })
          .catch(e => {
            setLoading(false)
            console.error(e)
          })
      }
    })
  }, [])

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({open}) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">

              {/* SP: メニューボタン */}
              {guildId && (
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="absolute -inset-0.5"/>
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                    )}
                  </Disclosure.Button>
                </div>
              )}

              {/* SP/PC 左側の内容 */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                {/* ロゴアイコン */}
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="icon"
                  />
                </div>

                {guildId ? (
                    <>
                      {/* Tab */}
                      <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <Link
                          href={`/dashboard/${guildId}`}
                          className={isServer ? tabClassFocus : tabClassNotFocus}
                        >
                          サーバー全体の設定
                        </Link>
                        <Link
                          href={`/dashboard/${guildId}/channels`}
                          className={isServer ? tabClassNotFocus : tabClassFocus}
                        >
                          各チャンネルの設定
                        </Link>
                      </div>
                    </>
                  )
                  : ""
                }
              </div>

              {/* SP/PC 右側の内容 */}
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {userStore.loginLoading ? <></> : userStore.loginUserId ? (
                  <>
                    {/* ユーザーアイコン(ログイン時のみ表示) */}
                    {loading || (
                      <>
                        <Menu as="div" className="relative ml-3">
                          <div>
                            {/* ユーザーアイコン */}
                            <Menu.Button
                              className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="absolute -inset-1.5"/>
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                src={iconUrl}
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items
                              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {/* 現在のプラン（サーバーの一覧選択時は表示されない） */}
                              {guildId && (
                                <Menu.Item>
                                  {({active}) => (
                                    <button
                                      className={classNames(active ? 'bg-gray-100' : '', 'w-full text-left block px-4 py-2 text-sm text-gray-700')}
                                    >
                                      現在のプラン
                                    </button>
                                  )}
                                </Menu.Item>
                              )}
                              {/* ログアウトメニュー */}
                              <Menu.Item>
                                {({active}) => (
                                  <button
                                    className={classNames(active ? 'bg-gray-100' : '', 'w-full text-left block px-4 py-2 text-sm text-gray-700')}
                                    onClick={signOut}
                                  >
                                    ログアウト
                                  </button>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </>
                    )}
                  </>
                ) : (
                  // 未ログイン時はログインボタンを表示
                  <LoginButton/>
                )}
              </div>
            </div>
          </div>

          {/* SP: メニューをOpenした時の内容 */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2">
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                サーバー全体の設定
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                各チャンネルの設定
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}