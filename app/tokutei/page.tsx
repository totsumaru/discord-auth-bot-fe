import SimpleHeader from "@/components/nav/SimpleHeader";

export default function Index() {
  return (
    <>
      <SimpleHeader/>
      <div className="px-6 pt-10 pb-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            特定商取引法に基づく表記
          </h1>
          <div className="mt-10 max-w-2xl">
            <div className="mt-8">
              <h2 className="text-base font-bold tracking-tight text-gray-900">
                販売業者
              </h2>
              <p className="mt-2">
                株式会社ArGate
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-base font-bold tracking-tight text-gray-900">
                責任者(運営統括責任者)
              </h2>
              <p className="mt-2">
                戸塚 翔太
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-base font-bold tracking-tight text-gray-900">
                住所
              </h2>
              <p className="mt-2">
                〒438-3122 静岡県浜松市東区有玉南町1867-1
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-base font-bold tracking-tight text-gray-900">
                電話番号
              </h2>
              <p className="mt-2">
                070-7584-3558
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-base font-bold tracking-tight text-gray-900">
                メールアドレス
              </h2>
              <p className="mt-2">
                argate.inc@gmail.com
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-base font-bold tracking-tight text-gray-900">
                WebサービスURL
              </h2>
              <p className="mt-2">
                <a href={"/"} className="text-blue-600">
                  https://xxx.com
                </a>
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-base font-bold tracking-tight text-gray-900">
                商品の販売価格
              </h2>
              <p className="mt-2">
                <a href={"/"} className="text-blue-600">料金表</a>に表記された価格に準じます
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-base font-bold tracking-tight text-gray-900">
                追加手数料等の追加料金
              </h2>
              <p className="mt-2">
                なし
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-base font-bold tracking-tight text-gray-900">
                受け付け可能な決済手段
              </h2>
              <p className="mt-2">
                クレジットカード決済
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-base font-bold tracking-tight text-gray-900">
                決済期間
              </h2>
              <p className="mt-2">
                クレジットカード決済は商品注文時にお支払いが確定します。
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-base font-bold tracking-tight text-gray-900">
                商品の引渡時期
              </h2>
              <p className="mt-2">
                支払い確認ができ次第、すぐにご利用いただけます。
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-base font-bold tracking-tight text-gray-900">
                交換および返品（返金ポリシー）
              </h2>
              <p className="mt-2">
                当サービスの不備により、本来のサービスが提供できなくなったものに限り返品が可能です。Webサービスのため交換はありません。
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
