"use client"

import {permissionNames, role} from "@/utils/backend_res";
import {useEffect, useState} from "react";
import ServerRoleSelector from "@/components/selector/ServerRoleSelector";
import TableToggle from "@/components/toggle/TableToggle";
import DashboardSettingLayout from "@/components/layout/DashboardSettingLayout";
import SetSelectedRolesButton from "@/components/button/SetSelectedRolesButton";
import OpenRoleDescriptionButton from "@/components/button/OpenRoleDescriptionButton";

type Props = {
  roles: role[]
}

export default function RolesTable({roles}: Props) {
  const [descriptionDisplay, setDescriptionDisplay] = useState<boolean>(true)
  const [selectedRoles, setSelectedRoles] = useState<role[]>(roles)

  useEffect(() => {
    setSelectedRoles(roles)
  }, [roles])

  return (
    <>
      <DashboardSettingLayout>
        {/* ロール選択のセレクター */}
        <ServerRoleSelector
          allRoles={roles}
          selectedRoles={selectedRoles}
          setSelectedRoles={setSelectedRoles}
        />
        {/* ボタン */}
        <div className="flex space-x-2">
          <SetSelectedRolesButton
            label={"ALL"}
            onClickHandler={() => {
              setSelectedRoles(roles)
            }}
          />
          <SetSelectedRolesButton
            label={"NONE"}
            onClickHandler={() => {
              setSelectedRoles([])
            }}
          />
        </div>
        <OpenRoleDescriptionButton
          label={descriptionDisplay ? "ロールの説明を閉じる" : "ロールの説明を表示"}
          onClickHandler={() => {
            setDescriptionDisplay(state => !state)
          }}
        />
      </DashboardSettingLayout>
      <div className="mt-4 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <p className="ml-1 mt-2 text-sm text-gray-700">
              ※権限の変更はできません
            </p>
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <div style={{maxHeight: '700px', overflowY: 'auto'}}>
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                  <tr>
                    <th scope="col"
                        className="sticky top-0 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-100 sm:pl-6 z-10 bg-gray-500">
                      -
                    </th>
                    {selectedRoles.map(({name, color}) => (
                      // ここをBadgeに変更
                      <th key={name} scope="col"
                          className={"sticky top-0 whitespace-nowrap w-24 px-3 py-3.5 z-10 bg-gray-200"}
                          style={{backgroundColor: color ? numberToHexColor(color) : "rgb(107 114 128)"}}
                      >
                          <span
                            className="ring-1 ring-gray-400 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600"
                          >
                            {name === "@everyone" ? name : `@${name}`}
                          </span>
                      </th>
                    ))}
                  </tr>

                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">

                  {permissionNames.map(({value, jp, description}) => (
                    // 1つの権限(= 1row)
                    <tr key={value}>
                      <td
                        className="whitespace-normal py-4 pl-4 pr-3 sm:pl-6 max-w-xs bg-gray-50">
                        <div className="text-sm font-semibold text-gray-900">{jp}</div>
                        {descriptionDisplay && (
                          <div
                            className="text-xs text-gray-500 break-words">{description}</div>
                        )}
                      </td>
                      {selectedRoles.map(({id, name, permission}, index) => (
                        <td key={id} className={`w-24 break-words px-3 py-4 text-sm text-gray-500 
                                                    ${index === 0 ? 'border-l border-gray-100' : ''} border-r border-gray-100 text-center`}>
                          {permission[value] ? (
                            <TableToggle enabled={true}/>
                          ) : (
                            <TableToggle enabled={false}/>
                          )}
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
    </>
  )
}

function numberToHexColor(code: number): string {
  let hex = code.toString(16);
  while (hex.length < 6) {
    hex = "0" + hex;
  }
  return "#" + hex;
}