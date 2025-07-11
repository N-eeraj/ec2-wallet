import {
  useEffect,
} from "react"
import {
  useQuery,
} from "@tanstack/react-query"

import useLayoutGuard from "@hooks/useLayoutGuard"
import userStore from "@stores/user"
import request from "@lib/axios"
import {
  getErrorStatus,
} from "@utils/request"

async function fetchUser() {
  const {
    data,
  } = await request.get("/user")
  return data
}

export default function useUserLayout() {
  const shouldUseLayout = useLayoutGuard({
    loginState: true,
    redirectTo: "/login"
  })

  const setUser = userStore(({ setUser }) => setUser)
  const clearUser = userStore(({ clearUser }) => clearUser)

  const {
    data,
    error,
    isError,
    isFetching,
  } = useQuery({
    queryKey: [
      "user",
    ],
    queryFn: fetchUser,
    enabled: shouldUseLayout,
  })

  useEffect(() => {
    if (data) {
      setUser(data.data)
    } else if (getErrorStatus(error) === 401) {
      clearUser()
    }
  }, [
    data,
    error,
    clearUser,
    setUser,
  ])

  return {
    data,
    isError,
    isFetching,
  }
}
