import {
  create,
} from "zustand"
import Cookies from "js-cookie"

interface User {
  id: string
  name: string
  phone: string
  token: string
}

interface UserStore {
  user: User | null
  isUserLoggedIn: boolean
  setUser: (data: User) => void
  clearUser: () => void
}

const userStore = create<UserStore>()((set) => ({
    user: null,
    isUserLoggedIn: !!Cookies.get("authToken"),
    setUser: (data: User) => set({
      user: data,
      isUserLoggedIn: true,
    }),
    clearUser: () => set({
      user: null,
      isUserLoggedIn: false,
    })
}))

export default userStore
