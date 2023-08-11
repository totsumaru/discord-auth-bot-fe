import {GetUserInfo} from "@/utils/api/info/user/user";
import NavigationBody from "@/components/nav/NavigationBody";

type Props = {
  guildId?: string
  focusTab: "server" | "channel" | "config" | "none"
  accessToken: string
}

// API情報を取得するだけのサーバーコンポーネントです
//
// 中身は`./NavigationBody.tsx`に入っています。
export default async function NavigationBar({
  guildId, focusTab, accessToken,
}: Props) {
  if (!accessToken) {
    return <></>
  }

  const {user} = await GetUserInfo({accessToken: accessToken})

  return (
    <NavigationBody
      guildId={guildId || ""}
      focusTab={focusTab}
      loginUser={user}
    />
  )
}

