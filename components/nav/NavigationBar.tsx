import {GetUserInfo} from "@/utils/api/info/user/user";
import NavigationClient from "@/components/nav/NavigationClient";

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
    <NavigationClient
      guildId={guildId || ""}
      focusTab={focusTab}
      loginUser={user}
    />
  )
}

