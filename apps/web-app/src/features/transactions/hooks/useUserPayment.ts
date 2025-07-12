import {
  useParams,
  useSearchParams,
} from "react-router"
import {
  useQuery,
} from "@tanstack/react-query"

import request from "@lib/axios"
import type {
  User,
} from "@dTypes/user"

async function fetchUser(id: User["id"]): Promise<User> {
  const {
    data,
  } = await request.get(`/get-user/${id}`)
  return data.data
}

export default function useUserPayment() {
  const params = useParams()
  const [searchParams] = useSearchParams()

  const userId = params.userId as User["id"]

  const {
    data,
    isFetching,
  } = useQuery({
    queryKey: [
      "user",
      userId,
    ],
    queryFn: ({ queryKey: [_, id] }) => fetchUser(id)
  })

  return {
    data,
    isFetching,
    searchParams,
  }
}
