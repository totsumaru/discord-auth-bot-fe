"use client"

type Props = {
  label: string
  onClickHandler: () => void
}

export default function SetSelectedRolesButton({label, onClickHandler}: Props) {
  return (
    <button
      type="button"
      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      onClick={onClickHandler}
    >
      {label}
    </button>
  )
}