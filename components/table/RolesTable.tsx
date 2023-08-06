"use client"

import {permissionNames, role} from "@/app/(private)/dashboard/[guildId]/backend_res";
import {useState} from "react";

type Props = {
  roles: role[]
}

export default function RolesTable({roles}: Props) {
  const [descriptionDisplay, setDescriptionDisplay] = useState<boolean>(true)

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base mt-2 font-semibold leading-6 text-gray-900">サーバー全体の権限</h1>
          <p className="mt-2 text-sm text-gray-700">
            各ロールのデフォルトの権限です。
          </p>
          <p className="mt-2 text-sm text-gray-700">
            チャンネル毎、更にこの権限を上書きできるため、チャンネルの権限については「各チャンネルの設定」を確認ください。
          </p>
        </div>
        <button
          type="button"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => {
            setDescriptionDisplay(state => !state)
          }}
        >
          {descriptionDisplay ? "ロールの説明を閉じる" : "ロールの説明を表示"}
        </button>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                <tr>
                  <th scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    権限
                  </th>
                  {roles.map(({name}) => (
                    <th key={name} scope="col"
                        className="whitespace-nowrap w-24 px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      {name === "@everyone" ? name : `@${name}`}
                    </th>
                  ))}
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">

                {permissionNames.map(({value, jp, description}) => (
                  // 1つの権限(= 1row)
                  <tr key={value}>
                    <td
                      className="whitespace-normal py-4 pl-4 pr-3 sm:pl-6 max-w-xs"> {/* 追加されたクラス: max-w-xs, 変更されたクラス: whitespace-normal */}
                      <div className="text-sm font-semibold text-gray-900">{jp}</div>
                      {descriptionDisplay && (
                        <div className="text-xs text-gray-500 break-words">{description}</div>
                      )}
                    </td>
                    {roles.map(({id, name, permission}) => (
                      <td key={id} className="w-24 break-words px-3 py-4 text-sm text-gray-500">
                        {permission[value] ? "⚪︎" : "x"}
                      </td>
                    ))}
                  </tr>
                ))}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}