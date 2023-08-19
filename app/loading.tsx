import SimpleHeader from "@/components/nav/SimpleHeader";
import Spinner from "@/components/loading/Spinner";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient_1 bg-cover bg-center">
      <SimpleHeader/>
      <Spinner/>
      <div className="flex flex-col items-center">
        <p className="mt-10 mb-5 text-center">
          情報を取得中...
          ロールの数が多いと30秒ほどかかる場合があります。
        </p>
      </div>
    </div>
  )
}