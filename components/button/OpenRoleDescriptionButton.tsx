import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/24/solid";

type Props = {
  open: boolean
  onClickHandler: () => void
}

export default function OpenRoleDescriptionButton({open, onClickHandler}: Props) {
  return (
    <button
      type="button"
      className="mt-4 rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
      onClick={onClickHandler}
    >
      {open ? (
        <>
          ロールの説明を閉じる
          <ChevronUpIcon className="h-4 w-4 inline pb-0.5 ml-1"/>
        </>
      ) : (
        <>
          ロールの説明を表示
          <ChevronDownIcon className="h-4 w-4 inline pb-0.5 ml-1"/>
        </>
      )}
    </button>
  )
}