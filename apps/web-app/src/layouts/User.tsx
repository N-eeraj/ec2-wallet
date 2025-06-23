import {
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

  const setUser = userStore(({ setUser }) => setUser)
  const clearUser = userStore(({ clearUser }) => clearUser)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await request.get("/user")
        setUser(data)
      } catch (error) {
        clearUser()
      }
    }

    fetchUser()
  }, [])

  return (
    <main className="">
      <Outlet />
    </main>
  )
}

export default Auth
