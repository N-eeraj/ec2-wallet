import {
  useEffect,
} from "react"
import {
  Outlet,
  useNavigate,
} from "react-router"

import userStore from "@stores/user"

function Auth() {
  const navigate = useNavigate()
  const isUserLoggedIn = userStore((state) => state.isUserLoggedIn)

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/login", {
        replace: true,
      })
    }
  }, [
    isUserLoggedIn,
  ])

  return (
    <main className="">
      <Outlet />
    </main>
  )
}

export default Auth
