"use client"

type Props = {
  title: string
  content: string
}

export default function Heading({title, content}: Props) {
  return (
    <div className="border-b border-gray-200 pb-5">
      <h2 className="text-2xl font-semibold leading-6 text-gray-900">
        {title}
      </h2>
      <p className="mt-2 max-w-4xl text-sm text-gray-500">
        {content}
      </p>
    </div>
  )
}