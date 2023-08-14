// ログインページです

import LoginButton from "@/components/button/LoginButton";
import SimpleHeader from "@/components/nav/SimpleHeader";

export default function Index() {
  return (
    <>
      <SimpleHeader/>
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Login
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Discord auth botを使うには、Discordでログインをしてください。
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <LoginButton/>
            <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
              botの導入はこちら <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}