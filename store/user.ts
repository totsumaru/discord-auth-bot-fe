import {create} from 'zustand'
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";

type userState = {
  loginUserId: string // supabaseのUser UID（discordのIDとは異なります）
  loginLoading: boolean // チラつき防止のため、loadingの状態を保持しています
}

type UserStore = userState & {
  setLoginUserId: (userId: string) => void
  initialize: () => void
  setLoginLoading: (loading: boolean) => void
}

// この中でhooksを使用するのはNG

const useUserStore = create<UserStore>((set) => ({
  loginUserId: "",
  loginLoading: true,
  // リロードされた時、userIdをstateに設定します
  initialize: async () => {
    const supabase = createClientComponentClient()
    supabase.auth.getUser().then(({data: {user}}) => {
      if (user) {
        set({
          loginUserId: user.id,
        });
      }
    })
    set({
      loginLoading: false,
    });
  },
  // ログインしているユーザーのIDを設定します
  setLoginUserId: (userId) => {
    set({
      loginUserId: userId,
      loginLoading: false,
    });
  },
  // ログイン処理中のステータスを設定します
  setLoginLoading: (loading) => {
    set({
      loginLoading: loading,
    });
  }
}))

export default useUserStore
