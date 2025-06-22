import {
  useCallback,
  useEffect,
} from "react"
import {
  Outlet,
} from "react-router"
import useLayoutGuard from "@hooks/useLayoutGuard"
import userStore from "@stores/user"
import request from "@lib/axios"

function Auth() {
  useLayoutGuard({
    loginState: true,
    redirectTo: "/login"
  })

  const {
    setUser,
    clearUser,
  } = userStore()

  const fetchUser = useCallback(
    async () => {
      try {
        const { data } = await request.get("/user")
        setUser(data)
      } catch (error) {
        clearUser()
      }
    }, [
  ])

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <main className="">
      <Outlet />
    </main>
  )
}

export default Auth
