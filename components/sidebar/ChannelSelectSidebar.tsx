import {Dispatch, Fragment, ReactNode, SetStateAction} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {XMarkIcon} from '@heroicons/react/24/outline'
import {channel} from "@/utils/backend_res";

type Props = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>;
  channels: channel[]
}

export default function ChannelSelectSidebar({open, setOpen, channels}: Props) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => {
        console.log("hello")
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
                      <ChannelListContent channels={channels}/>
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
  channels
}: {
  channels: channel[]
}) {
  return (
    <div className="mt-2">
      <p>1</p>
      {channels && channels.map((channel) => {
        let name = channel.name
        if (channel.type !== "category") {
          name = ">>>" + name
        }
        return (
          <p>{name}</p>
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