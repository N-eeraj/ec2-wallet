import {
  useCallback,
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

export default function useUserLayout() {
  const shouldUseLayout = useLayoutGuard({
    loginState: true,
    redirectTo: "/login"
  })

  const setUser = userStore(({ setUser }) => setUser)
  const clearUser = userStore(({ clearUser }) => clearUser)

  const fetchUser = useCallback(async () => {
    try {
      const {
        data,
      } = await request.get("/user")
      setUser(data.data)
      return data
    } catch (error) {
      const status = getErrorStatus(error)
      if (status === 401)  {
        clearUser()
      }
    }
  }, [])

  const {
    data,
    isError,
    isFetching,
  } = useQuery({
    queryKey: [
      "user",
    ],
    queryFn: fetchUser,
    enabled: shouldUseLayout,
  })

  return {
    data,
    isError,
    isFetching,
  }
}
