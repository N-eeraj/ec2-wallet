import {
  useState,
} from "react"
import {
  useInfiniteQuery,
} from "@tanstack/react-query"

import request from "@lib/axios"
import {
  useDebounce,
} from "@uidotdev/usehooks"
import type {
  Contact,
} from "@dTypes/user"

async function fetchUsers(query = "", page = 1) {
  const {
    data,
  } = await request.get(`/get-all-users?query=${query}&page=${page}`)
  return data.data
}

export default function useAllUsers() {
  const [searchQuery, setSearchQuery] = useState("")
  const debouncedSearch = useDebounce(searchQuery, 400)

  const {
    data,
    isFetching,
    fetchNextPage,
  } = useInfiniteQuery<Array<Contact>>({
    queryKey: [
      "users-list",
      debouncedSearch,
    ],
    queryFn: ({ queryKey: [_, query], pageParam }) => fetchUsers(query as typeof debouncedSearch, pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) => allPages.length + 1,
  })

  return {
    users: data?.pages.flat() ?? [],
    isFetching,
    searchQuery,
    setSearchQuery,
    fetchNextPage,
  }
}
