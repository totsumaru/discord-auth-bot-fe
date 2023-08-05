import {ArrowLongRightIcon} from '@heroicons/react/20/solid'

type Props = {
  servers: {
    id: string
    name: string
    icon_url: string
  }[]
}

export default function Guilds({servers}: Props) {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {servers.map(({id, name, icon_url}) => (
        <li
          key={id}
          className="border-2 border-indigo-50 col-span-1 flex flex-col rounded-lg bg-white text-center"
        >
          <div className="flex flex-1 flex-col p-8">
            <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                 src={icon_url || "/discord_icon.svg"}
                 alt=""
            />
            <h3 className="mt-6 text-sm font-medium text-gray-900">{name}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dt className="sr-only">Role</dt>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-indigo-100">
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`/dashboard?server_id=${id}`}
                  className="text-indigo-600 bg-indigo-50 hover:bg-indigo-100 relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold"
                >
                  ダッシュボードへ移動
                  <ArrowLongRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}