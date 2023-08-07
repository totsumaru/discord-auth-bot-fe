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
      <div className="p-2 mb-4 border-2 shadow-sm rounded-md flex items-center bg-white max-w-sm">
        <img
          className="h-10 w-10 rounded-full"
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