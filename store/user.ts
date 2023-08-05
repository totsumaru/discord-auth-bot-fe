import {create} from 'zustand'
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";

type userState = {
  loginUserId: string
}

type UserStore = userState & {
  setLoginUserId: (userId: string) => void
  initialize: () => void
}

// この中でhooksを使用するのはNG

const useUserStore = create<UserStore>((set) => ({
  loginUserId: "",
  // リロードされた時、userIdをstateに設定します
  initialize: async () => {
    const supabase = createClientComponentClient()
    supabase.auth.getUser().then(({data: {user}}) => {
      if (user) {
        set({
          loginUserId: user.id
        });
      }
    })
  },
  // ログインしているユーザーのIDを設定します
  setLoginUserId: async (userId) => {
    set({
      loginUserId: userId
    });
  },
}))

export default useUserStore
