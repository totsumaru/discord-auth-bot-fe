import {CheckIcon} from '@heroicons/react/20/solid'
import SimpleHeader from "@/components/nav/SimpleHeader";
import Image from "next/image";

const tiers = [
  {
    name: 'Freeプラン',
    id: 'tier-hobby',
    href: "/login",
    priceMonthly: 'Free',
    description: 'サーバー全体のロールの管理ができるプランです。',
    features: [
      'サーバー全体のロール権限を一覧で確認',
      '管理者権限の他に、3つのロールまでbotを操作可能',
    ],
  },
  {
    name: 'Proプラン',
    id: 'tier-team',
    href: "/login",
    priceMonthly: '980円',
    description: 'Freeプランに加え、各チャンネルのロールの管理ができるプランです。',
    features: [
      'サーバー全体のロール権限を一覧で確認',
      '管理者権限の他に、3つのロールまでbotを操作可能',
      '全てのチャンネルの権限を一覧で確認',
    ],
  },
]

export default function Index() {
  return (
    <div className="bg-white">
      {/* 本体 */}
      <div className="relative isolate">
        {/* ヘッダー */}
        <SimpleHeader/>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* CTA */}
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
                Discordの複雑な権限、まるっと管理。
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                ロールの権限やチャンネルの権限が一覧で確認できます。<br/>
                <span className="text-sm">
                  ※権限の変更はDiscordで行ってください。
                </span>
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                {/* botの導入URL */}
                <a
                  href={process.env.DISCORD_BOT_INVITE_URL}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  target="_blank"
                >
                  botを導入する（無料）
                </a>
                <a href="/login" className="text-sm font-semibold leading-6 text-gray-900">
                  ログイン <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            {/* ダッシュボードの画像 */}
            <div className="mt-16 flow-root sm:mt-24">
              <div
                className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                {/*<Image*/}
                {/*  src="/dashboard.webp"*/}
                {/*  alt="App screenshot"*/}
                {/*  width={2464} // 元は2432*/}
                {/*  height={1342} // 元は1442*/}
                {/*  className="rounded-md shadow-2xl ring-1 ring-gray-900/10"*/}
                {/*/>*/}
              </div>
            </div>
            {/* 料金 */}
            <div className="isolate overflow-hidden">
              <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
                <div className="mx-auto max-w-4xl">
                  <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
                  <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    料金
                  </p>
                </div>
                <div className="relative mt-6">
                  <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-900/60">
                    Proプランでは、全てのチャンネルの権限にアクセスすることができます。より安全なDiscord管理をご検討ください。
                  </p>
                </div>
              </div>
              <div className="flow-root pb-24 sm:pb-32">
                <div className="-mt-80">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
                      {tiers.map((tier) => (
                        <div
                          key={tier.id}
                          className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                        >
                          <div>
                            <h3 id={tier.id} className="text-base font-semibold leading-7 text-indigo-600">
                              {tier.name}
                            </h3>
                            <div className="mt-4 flex items-baseline gap-x-2">
                                <span
                                  className="text-5xl font-bold tracking-tight text-gray-900">{tier.priceMonthly}</span>
                              <span className="text-base font-semibold leading-7 text-gray-600">/月</span>
                            </div>
                            <p className="mt-6 text-base leading-7 text-gray-600">{tier.description}</p>
                            <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-gray-600">
                              {tier.features.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true"/>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <a
                            href={tier.href}
                            aria-describedby={tier.id}
                            className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            ダッシュボードへ移動
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* フッター */}
            <Footer/>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}

const Footer = () => {
  const navigation = {
    main: [
      {name: 'お問い合わせフォーム', href: 'https://forms.gle/MkR4y1jsVChLn8QX8'},
      {name: '利用規約', href: '/terms-of-service'},
      {name: 'プライバシーポリシー', href: '/privacypolicy'},
      {name: '特定商取引法に基づく表記', href: 'tokutei'},
    ],
  }

  return (
    <footer className="">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-sm leading-6 text-gray-400 hover:text-gray-900">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 ArGate, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}