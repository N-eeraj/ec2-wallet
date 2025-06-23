import {
  useEffect,
} from "react"
import {
  useNavigate,
} from "react-router"

import userStore from "@stores/user"

interface GuardOptions {
  loginState: boolean
  redirectTo: string
}

export default function useLayoutGuard({ loginState, redirectTo }: GuardOptions) {
  const navigate = useNavigate()
  const isUserLoggedIn = userStore(({ isUserLoggedIn }) => isUserLoggedIn)

  useEffect(() => {
    if (isUserLoggedIn !== loginState) {
      navigate(redirectTo, {
        replace: true,
      })
    }
  }, [
    isUserLoggedIn,
  ])
}
