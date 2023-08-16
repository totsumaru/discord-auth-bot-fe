"use client"

import {
  ChannelType,
  ChannelTypeAnnounce,
  ChannelTypeCategory,
  ChannelTypeForum,
  ChannelTypeStage,
  ChannelTypeText,
  ChannelTypeVC,
  role,
} from "@/utils/backend_res_type";
import {useEffect, useState} from "react";
import RoleSelector from "@/components/selector/RoleSelector";
import TableToggle from "@/components/toggle/TableToggle";
import DashboardSettingLayout from "@/components/layout/DashboardSettingLayout";
import SetSelectedRolesButton from "@/components/button/SetSelectedRolesButton";
import OpenRoleDescriptionButton from "@/components/button/OpenRoleDescriptionButton";
import {
  tableAnnounceChannelRolesInfo,
  tableCategoryRolesInfo,
  tableForumChannelRolesInfo,
  tableServerRolesInfo,
  tableStageChannelRolesInfo,
  tableTextChannelRolesInfo,
  tableVCRolesInfo
} from "@/components/table/table_roles";
import {numberToHexColor} from "@/utils/hex_color";
import {roleInfo} from "@/utils/role_info";
import ChannelTypeIcon from "@/components/icon/ChannelTypeIcon";
import {classNames} from "@/utils/class_names";
import {MinusIcon, PlusIcon} from "@heroicons/react/24/solid";

type Props = {
  tableType: ChannelType | "server"
  roles: role[]
  channelName?: string
}

// ロール表示のテーブルです
// - テーブルの設定はこの中に記述します
export default function RolesTable({roles, tableType, channelName}: Props) {
  const [descriptionOpen, setDescriptionOpen] = useState<boolean>(true) // ロールの説明を表示する状態です
  const [selectedRoles, setSelectedRoles] = useState<role[]>(roles) // 表示させているロールです

  const displayPermissions: roleInfo[] = (() => {
    switch (tableType) {
      case "server":
        return tableServerRolesInfo
      case ChannelTypeText:
        return tableTextChannelRolesInfo
      case ChannelTypeCategory:
        return tableCategoryRolesInfo
      case ChannelTypeAnnounce:
        return tableAnnounceChannelRolesInfo
      case ChannelTypeForum:
        return tableForumChannelRolesInfo
      case ChannelTypeVC:
        return tableVCRolesInfo
      case ChannelTypeStage:
        return tableStageChannelRolesInfo
    }
  })()

  useEffect(() => {
    setSelectedRoles(roles)
  }, [roles])

  return (
    <>
      <DashboardSettingLayout>
        {/* ロール選択のセレクター */}
        <RoleSelector
          allRoles={roles}
          selectedRoles={selectedRoles}
          setSelectedRoles={setSelectedRoles}
        />
        {/* ボタン */}
        <div className="flex space-x-2">
          <SetSelectedRolesButton
            label={"全て表示"}
            onClickHandler={() => {
              setSelectedRoles(roles)
            }}
            icon={(
              <PlusIcon className={"inline font-bold h-4 w-4 pt-0.5"}/>
            )}
          />
          <SetSelectedRolesButton
            label={"表示をクリア"}
            onClickHandler={() => {
              setSelectedRoles([])
            }}
            icon={(
              <MinusIcon className={"inline font-bold h-4 w-4 pt-0.5"}/>
            )}
          />
        </div>
        <OpenRoleDescriptionButton
          open={descriptionOpen}
          onClickHandler={() => {
            setDescriptionOpen(state => !state)
          }}
        />
      </DashboardSettingLayout>
      <div className="mx-4 ml-2 sm:ml-0 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block py-2 align-middle sm:px-6 lg:px-8">
            {/* チャンネルの設定時のみ、チャンネル名を表示 */}
            {tableType !== "server" && (
              <div className={classNames("border-b-2", "flex py-2 items-center")}>
                <ChannelTypeIcon
                  channelType={tableType as ChannelType}
                />
                <h3
                  className="ml-1 text-xl font-semibold">
                  {channelName}
                </h3>
              </div>
            )}
            <div className="ml-1 my-2 text-sm text-gray-700">
              <p> ※権限の変更はできません </p>
              <p className="flex items-center">
                ※
                <TableToggle enabled={true} isDark={true}/>
                ← この表示になっているものは、不要な権限です。管理者権限が全てを包括しています。
              </p>
            </div>
            <div className="mb-10 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <div style={{maxHeight: '700px', overflowY: 'auto'}}>
                <table className="divide-y divide-gray-300">
                  {/* ロールの表示行 */}
                  <thead className="bg-gray-50">
                  <tr>
                    <th scope="col"
                        className="sticky top-0 py-3.5 pl-4 pr-3 max-w-xs text-left text-sm font-semibold text-gray-100 sm:pl-6 z-10 bg-gray-500">
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

                  {/* 各ロールx各Permissionの行（本体）*/}
                  <tbody className="divide-y divide-gray-200 bg-white">
                  {/* 1つの権限ごとにLoop処理を実行(1行) */}
                  {displayPermissions && displayPermissions.map(({value, jp, description}) => (
                    <tr key={value}>
                      {/* Permission名+説明 */}
                      <td className="whitespace-normal py-4 pl-4 pr-3 sm:pl-6 max-w-xs bg-gray-50">
                        <div className="text-sm font-semibold text-gray-900">{jp}</div>
                        {descriptionOpen && (
                          <div className="text-xs text-gray-500 break-words">{description}</div>
                        )}
                      </td>
                      {/* 1つのロールごとにLoop処理を実行(1行) */}
                      {selectedRoles.map(({id, name, permission}, index) => {
                        // このロールが管理者権限を持っているかどうか
                        const isAdminRole = permission!["administrator"]
                        const isAdminRow = value == "administrator"

                        return (
                          <td key={id}
                              className={classNames(index === 0 && 'border-l border-gray-100', // Permissionの説明
                                "w-24 break-words px-3 py-4 text-sm text-gray-500 border-r border-gray-100 text-center"
                              )}
                          >
                            <TableToggle
                              enabled={permission![value]}
                              // 管理者権限以外のPermission行で、そのロールが管理者権限を持っている場合は、
                              // 管理者以外のロールのトグルを薄い色に変更します（管理者の下位互換のため）
                              isDark={!isAdminRow && isAdminRole}
                            />
                          </td>
                        )
                      })}
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

