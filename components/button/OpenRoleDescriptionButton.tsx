"use client"

type Props = {
  label: string
  onClickHandler: () => void
}

export default function OpenRoleDescriptionButton({label, onClickHandler}: Props) {
  return (
    <button
      type="button"
      className="mt-4 rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
      onClick={onClickHandler}
    >
      {label}
    </button>
  )
}