import {
  create,
} from "zustand"
import Cookies from "js-cookie"
import type {
  User,
} from "@dTypes/user"

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
