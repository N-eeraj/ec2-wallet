import {
  Outlet,
} from "react-router"
import {
  useQuery,
} from "@tanstack/react-query"

import useLayoutGuard from "@hooks/useLayoutGuard"
import userStore from "@stores/user"
import request from "@lib/axios"
import {
  USER_FETCH_FAILED_MESSAGE,
} from "@constants/messages"

const fetchUser = async () => {
  const { data } = await request.get("/user")
  return data
}

function Auth() {
  useLayoutGuard({
    loginState: true,
    redirectTo: "/login"
  })

  const setUser = userStore(({ setUser }) => setUser)
  const clearUser = userStore(({ clearUser }) => clearUser)

  const {
    data,
    isError,
    isFetching,
  } = useQuery({
    queryKey: [
      "user",
    ],
    queryFn: fetchUser,
  })

  if (isFetching) {
    return (
      <>
        Loading
      </>
    )
  }

  if (isError) {
    clearUser()
    return (
      <>
        {USER_FETCH_FAILED_MESSAGE}
      </>
    )
  }

  setUser(data)

  return (
    <main className="">
      <Outlet />
    </main>
  )
}

export default Auth
