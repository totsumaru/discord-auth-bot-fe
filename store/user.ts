import {create} from 'zustand'

type UserState = {
  id: string
}

type UserStore = UserState & {
  setId: (id: string) => void
}

const useUserStore = create<UserStore>((set) => ({
  id: "",
  setId: (id) => {
    set(() => ({
      id: id,
    }))
  }
}))
export default useUserStore