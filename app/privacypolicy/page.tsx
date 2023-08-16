import SimpleHeader from "@/components/nav/SimpleHeader";

export default function Index() {
  return (
    <>
      <SimpleHeader/>
      <div className="px-6 pt-10 pb-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">プライバシーポリシー</h1>
          <div className="mt-10 max-w-2xl">
            <p>
              本サービスを運営する株式会社ArGate（以下「当社」といいます。）は、利用者に関する情報を以下のとおり取り扱います。
            </p>
            {/* 1 */}
            <div className="mt-8">
              <h2 className="text-xl font-bold tracking-tight text-gray-900">
                1. プライバシーポリシー（または個人情報保護方針）
              </h2>
              <p className="mt-4">
                当社は、当社が取得した個人情報の取扱いに関し、個人情報の保護に関する法律、個人情報保護に関するガイドライン等の指針、その他個人情報保護に関する関係法令を遵守します。
              </p>
            </div>

            {/* 2 */}
            <div className="mt-8">
              <h2 className="text-xl font-bold tracking-tight text-gray-900">
                ２.個人情報の安全管理
              </h2>
              <p className="mt-4">
                当社は、個人情報の保護に関して、組織的、物理的、人的、技術的に適切な対策を実施し、当社の取り扱う個人情報の漏えい、
                滅失又はき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講ずるものとします。
              </p>
            </div>

            {/* 3 */}
            <div className="mt-8">
              <h2 className="text-xl font-bold tracking-tight text-gray-900">
                ３.個人情報の取得等の遵守事項
              </h2>
              <p className="mt-4">
                当社による個人情報の取得、利用、提供については、以下の事項を遵守します。
              </p>
              {/* 3-1 */}
              <div className="mt-3">
                <p className="font-bold">
                  (1) 個人情報の取得
                </p>
                <p className="mt-2">
                  当社は、当社が管理するインターネットによる情報提供サイト（以下「本サイト」といいます。）の運営に必要な範囲で、
                  本サイトの一般利用者（以下「ユーザー」といいます。）又は本サイトに広告掲載を行う者（以下「掲載主」といいます。）から、
                  ユーザー又は掲載主に係る個人情報を取得することがあります。
                </p>
              </div>
              {/* 3-2 */}
              <div className="mt-3">
                <p className="font-bold">
                  (2) 個人情報の利用目的
                </p>
                <p className="mt-2">
                  当社は、当社が取得した個人情報について、法令に定める場合又は本人の同意を得た場合を除き、以下に定める利用目的の達成に必要な範囲を超えて利用することはありません。
                </p>
                <ul>
                  <li>① 本サイトの運営、維持、管理</li>
                  <li>② 本サイトを通じたサービスの提供及び紹介</li>
                  <li>③ 本サイトの品質向上のためのアンケート</li>
                </ul>
              </div>
              {/* 3-3 */}
              <div className="mt-3">
                <p className="font-bold">
                  (3) 個人情報の提供等
                </p>
                <p className="mt-2">
                  当社は、法令で定める場合を除き、本人の同意に基づき取得した個人情報を、本人の事前の同意なく第三者に提供することはありません。
                  なお、本人の求めによる個人情報の開示、訂正、追加若しくは削除又は利用目的の通知については、
                  法令に従いこれを行うとともに、ご意見、ご相談に関して適切に対応します。
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="mt-8">
              <h2 className="text-xl font-bold tracking-tight text-gray-900">
                4 .個人情報の利用目的の変更
              </h2>
              <p className="mt-4">
                当社は、前項で特定した利用目的は、予め本人の同意を得た場合を除くほかは、原則として変更しません。
                但し、変更前の利用目的と相当の関連性を有すると合理的に認められる範囲において、
                予め変更後の利用目的を公表の上で変更を行う場合はこの限りではありません。
              </p>
            </div>

            {/* 5 */}
            <div className="mt-8">
              <h2 className="text-xl font-bold tracking-tight text-gray-900">
                ５.個人情報の第三者提供
              </h2>
              <p className="mt-4">
                当社は、個人情報の取扱いの全部又は一部を第三者に委託する場合、その適格性を十分に審査し、
                その取扱いを委託された個人情報の安全管理が図られるよう、
                委託を受けた者に対する必要かつ適切な監督を行うこととします。
              </p>
            </div>

            {/* 6 */}
            <div className="mt-8">
              <h2 className="text-xl font-bold tracking-tight text-gray-900">
                ６.個人情報の取扱いの改善・見直し
              </h2>
              <p className="mt-4">
                当社は、個人情報の取扱い、管理体制及び取組みに関する点検を実施し、継続的に改善・見直しを行います。
              </p>
            </div>

            {/* 7 */}
            <div className="mt-8">
              <h2 className="text-xl font-bold tracking-tight text-gray-900">
                ７.個人情報の廃棄
              </h2>
              <p className="mt-4">
                当社は、個人情報の利用目的に照らしその必要性が失われたときは、個人情報を消去又は廃棄するものとし、
                当該消去及び廃棄は、外部流失等の危険を防止するために必要かつ適切な方法により、
                業務の遂行上必要な限りにおいて行います。
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
