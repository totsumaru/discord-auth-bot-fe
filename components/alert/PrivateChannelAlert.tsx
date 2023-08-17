import {ExclamationTriangleIcon} from '@heroicons/react/20/solid'

export default function PrivateChannelAlert() {
  return (
    <div className="border-l-4 border-gray-400 bg-gray-200 p-3 my-1 w-fit">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" aria-hidden="true"/>
        </div>
        <div className="ml-3">
          <p className="text-sm text-gray-700">
            プライベートチャンネルです。ここに表示されているロールのみ、チャンネルを閲覧/操作できます。
          </p>
        </div>
      </div>
    </div>
  )
}
