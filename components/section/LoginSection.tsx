"use client"

import LoginButton from "@/components/button/LoginButton";

// 未ログイン状態時の表示
export default function LoginSection() {
  return (
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Login</h2>
      <p className="my-6 text-lg leading-8 text-gray-600">
        Discordでログインをしてください。
      </p>
      <LoginButton/>
    </div>
  )
}