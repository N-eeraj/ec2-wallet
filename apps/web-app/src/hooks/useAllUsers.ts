import {
  useState,
} from "react"
import {
  useQuery,
} from "@tanstack/react-query"

import request from "@lib/axios"
import {
  useDebounce,
} from "@uidotdev/usehooks"
import type {
  Contact,
} from "@dTypes/user"

async function fetchUsers(query = "") {
  const {
    data,
  } = await request.get(`/get-all-users?query=${query}`)
  return data.data
}

export default function useAllUsers() {
  const [searchQuery, setSearchQuery] = useState("")
  const debouncedSearch = useDebounce(searchQuery, 400)

  const {
    data,
    isFetching,
  } = useQuery<Array<Contact>>({
    queryKey: [
      "users-list",
      debouncedSearch,
    ],
    queryFn: ({ queryKey: [_, query] }) => fetchUsers(query as typeof debouncedSearch),
  })

  return {
    users: data ?? [],
    isFetching,
    searchQuery,
    setSearchQuery,
  }
}
