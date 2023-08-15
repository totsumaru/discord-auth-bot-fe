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
      <SimpleHeader displayLoginButton={true}/>
      <div className="pt-7 px-10">
        <div className="bg-red-100 shadow sm:rounded-lg px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            エラーが発生しました
          </h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>
              再度ログインをお願いします
            </p>
          </div>
        </div>
      </div>
    </>
  )
}