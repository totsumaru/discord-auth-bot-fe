import {ChevronRightIcon} from "@heroicons/react/24/solid";

type Props = {
  onclickHandler: () => void
}

export default function ChannelSelectButton({onclickHandler}: Props) {
  return (
    <div className="mt-5">
      <button
        type="button"
        className="flex items-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={onclickHandler}
      >
        <span className={"mr-1"}>
          チャンネルを選択
        </span>
        <ChevronRightIcon className={"inline font-bold h-4 w-4 pt-0.5"}/>
      </button>
    </div>
  )
}