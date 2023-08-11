import {Dispatch, Fragment, ReactNode, SetStateAction} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {XMarkIcon} from '@heroicons/react/24/outline'
import {channel} from "@/utils/backend_res_type";
import ChannelTypeIcon from "@/components/icon/ChannelTypeIcon";
import {classNames} from "@/utils/class_names";
import Link from "next/link";

type Props = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>;
  channels: channel[]
  guildId: string
}

// チャンネル一覧を表示するサイドバーです
export default function ChannelSelectSidebar({
  open, setOpen, channels, guildId,
}: Props) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={() => {
        setOpen(false)
      }}>
        <div className="fixed inset-0"/>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <TransitionChild>
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        {/* タイトル */}
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          チャンネル一覧
                        </Dialog.Title>
                        <CloseButton onclickHandler={() => setOpen(false)}/>
                      </div>

                      {/* チャンネル一覧の内容 */}
                      <ChannelListContent
                        channels={channels}
                        guildId={guildId}
                        setOpen={setOpen}
                      />
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">{/* Your content */}</div>
                  </div>
                </Dialog.Panel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

// チャンネル一覧の内容です
function ChannelListContent({
  channels,
  guildId,
  setOpen,
}: {
  channels: channel[]
  guildId: string
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="mt-2">
      {channels.length === 0
        ? "表示できるチャンネルがありません"
        : channels.map((channel) => {
          return (
            <li key={channel.id} className={classNames(
              "list-none", channel.type !== "category" ? "ml-5" : ""
            )}>
              <Link
                className={classNames(
                  'w-full text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex items-center gap-x-1 rounded-md p-2 pl-3 text-sm leading-6 font-semibold'
                )}
                onClick={() => setOpen(false)}
                href={`/dashboard/${guildId}/channels/${channel.id}`}
              >
                <ChannelTypeIcon channelType={channel.type}/>
                {channel.name}
              </Link>
            </li>
          )
        })}
    </div>
  )
}

function TransitionChild({children}: { children: ReactNode }) {
  return (
    <Transition.Child
      as={Fragment}
      enter="transform transition ease-in-out duration-500 sm:duration-700"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="transform transition ease-in-out duration-500 sm:duration-700"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-full"
    >
      {children}
    </Transition.Child>
  )
}

// 閉じるボタン（x）です
function CloseButton({onclickHandler}: { onclickHandler: () => void }) {
  return (
    <div className="ml-3 flex h-7 items-center">
      <button
        type="button"
        className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={onclickHandler}
      >
        <span className="absolute -inset-2.5"/>
        <span className="sr-only">Close panel</span>
        <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
      </button>
    </div>
  )
}