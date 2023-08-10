type Props = {
  label: string
  onClickHandler: () => void
}

export default function OpenRoleDescriptionButton({label, onClickHandler}: Props) {
  return (
    <button
      type="button"
      className="mt-4 rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
      // className="mt-4 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      onClick={onClickHandler}
    >
      {label}
    </button>
  )
}