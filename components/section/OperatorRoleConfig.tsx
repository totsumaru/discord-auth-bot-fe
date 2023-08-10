import {role} from "@/utils/backend_res_type";
import RoleSelector from "@/components/selector/RoleSelector";
import {Dispatch, SetStateAction} from "react";

type Props = {
  allRoles: role[]
  selectedRoles: role[]
  setSelectedRoles: Dispatch<SetStateAction<role[]>>;
}

export default function OperatorRoleConfig({allRoles, selectedRoles, setSelectedRoles}: Props) {
  return (
    <div className="mt-3">
      <h3>botの操作ロール</h3>
      <p>以下のロールを持つユーザーのみ、このbotのダッシュボードを閲覧,操作できます。</p>
      <p>※セキュリティのため、コミュニティマネージャーなど信頼できる数名のみにしてください。</p>
      <p>管理者権限を持つロール,ユーザーは選択する必要がありません。</p>
      <p>（最大3つ）</p>

      <RoleSelector
        allRoles={allRoles}
        selectedRoles={selectedRoles}
        setSelectedRoles={setSelectedRoles}
      />
    </div>
  )
}
