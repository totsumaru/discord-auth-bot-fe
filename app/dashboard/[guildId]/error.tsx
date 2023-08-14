'use client' // Error components must be Client Components

import {useEffect} from 'react'
import SimpleHeader from "@/components/nav/SimpleHeader";

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <SimpleHeader/>
      <div className="pt-7 px-10">
        <div className="bg-red-100 shadow sm:rounded-lg px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            エラーが発生しました
          </h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>
              ダッシュボードに戻って、もう一度操作をお願いします。
            </p>
          </div>
          <div className="mt-5">
            <a
              type="button"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              href="/dashboard"
            >
              ダッシュボードに戻る
            </a>
          </div>
        </div>
      </div>
    </>
  )
}