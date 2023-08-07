"use client"

type Props = {
  title: string
  content: string
  serverName: string
  serverIconUrl: string
}

export default function Heading({
  title,
  content,
  serverName,
  serverIconUrl,
}: Props) {
  return (
    <div className="border-b border-gray-200 pb-5">
      <div className="p-2 pr-3 mb-4 border-2 border-indigo-300 rounded-md inline-flex items-center bg-transparent">
        <img
          className="h-8 w-8 rounded-full"
          src={serverIconUrl || "/discord_icon.svg"}
          alt="server-icon"
        />
        <div className="ml-3">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            {serverName}
          </h3>
        </div>
      </div>
      <h2 className="text-2xl font-semibold leading-6 text-gray-900">
        {title}
      </h2>
      <p className="mt-2 max-w-4xl text-sm text-gray-500">
        {content}
      </p>
    </div>
  )
}