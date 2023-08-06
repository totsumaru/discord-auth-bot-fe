"use client"

type Props = {
  onclickHandler: () => void
}

export default function ChannelSelectButton({onclickHandler}: Props) {
  return (
    <div className="mt-5">
      <button
        type="button"
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={onclickHandler}
      >
        チャンネルを選択
      </button>
    </div>
  )
}