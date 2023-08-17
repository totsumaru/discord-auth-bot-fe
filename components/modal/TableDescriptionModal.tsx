"use client"

import {Fragment, ReactNode, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {CheckIcon} from '@heroicons/react/24/outline'
import {InformationCircleIcon} from "@heroicons/react/24/solid";
import TableToggle from "@/components/toggle/TableToggle";

type Props = {
  everyoneBadge: ReactNode
}

export default function TableDescriptionModal({everyoneBadge}: Props) {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <button
        type="button"
        className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => setOpen(true)}
      >
        <InformationCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true"/>
        説明を見る
      </button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel
                  className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true"/>
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        この表について
                      </Dialog.Title>
                      <div className="mt-2 text-gray-500 text-left">
                        <div className="mb-2 pb-1 border-b-2">
                          <p> ※権限の変更はDiscordで行ってください。</p>
                        </div>
                        <div className="mb-2 pb-1 border-b-2">
                          <p className="inline">
                            ※
                            <TableToggle enabled={true} isDark={true}/>
                            <span className="ml-1">
                            これは不要な権限です。管理者権限が全てを包括しています。
                          </span>
                          </p>
                        </div>
                        <div className="mb-2 pb-1 border-b-2">
                          <p className="inline items-center">
                            ※
                            <span className="mr-1 w-fit">{everyoneBadge}</span>
                            などのタグは権限の参考にし、不要な権限は外しましょう。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => setOpen(false)}
                    >
                      戻る
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}