"use client"

import {role} from "@/utils/backend_res_type";
import RoleSelector from "@/components/selector/RoleSelector";
import {useState} from "react";

type Props = {
  allRoles: role[]
  operatorRoles: role[]
}

export default function OperatorRoleConfig({allRoles, operatorRoles}: Props) {
  const [selectedRoles, setSelectedRoles] = useState(operatorRoles)

  return (
    <div className="mt-3">
      <h3>botの操作ロール</h3>
      <p>以下のロールを持つユーザーのみ、このbotのダッシュボードを閲覧,操作できます。</p>
      <p>※セキュリティのため、コミュニティマネージャーなど信頼できる数名のみにしてください。</p>
      <p>管理者権限を持つロール,ユーザーは選択する必要がありません。</p>
      <p>（最大3つ）</p>

      <div className="min-h-[30px]">
        {selectedRoles.map((value) => (
          <div key={value.id} className="inline mr-2">
          <span
            className="inline-flex items-center gap-x-0.5 rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600 ring-1 ring-inset ring-blue-500/10"
          >
            @{value.name}
            <button
              type="button"
              className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-blue-500/20"
              onClick={() => {
                setSelectedRoles(selectedRoles.filter(obj => obj.id !== value.id))
              }}
            >
              <span className="sr-only">Remove</span>
              <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 stroke-blue-600/50 group-hover:stroke-blue-600/75">
                <path d="M4 4l6 6m0-6l-6 6"/>
              </svg>
              <span className="absolute -inset-1"/>
            </button>
          </span>
          </div>
        ))}
      </div>

      <RoleSelector
        allRoles={allRoles}
        selectedRoles={selectedRoles}
        setSelectedRoles={setSelectedRoles}
        maxAmount={3}
      />
    </div>
  )
}
