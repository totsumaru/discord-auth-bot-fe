"use client"

type Props = {
  label: string
  onClickHandler: () => void
}

export default function OpenRoleDescriptionButton({label, onClickHandler}: Props) {
  return (
    <button
      type="button"
      className="mt-6 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={onClickHandler}
    >
      {label}
    </button>
  )
}