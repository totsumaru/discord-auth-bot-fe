import {ReactNode} from "react";

type Props = {
  label: string
  onClickHandler: () => void
  icon: ReactNode
}

export default function SetSelectedRolesButton({
  label,
  onClickHandler,
  icon,
}: Props) {
  return (
    <button
      type="button"
      className="flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      onClick={onClickHandler}
    >
      {icon}
      <span className="ml-0.5 mr-1">
        {label}
      </span>
    </button>
  )
}