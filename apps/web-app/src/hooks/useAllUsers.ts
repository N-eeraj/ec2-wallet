import {
  useState,
} from "react"
import {
  useInfiniteQuery,
} from "@tanstack/react-query"

import {
  useDebounce,
} from "@uidotdev/usehooks"
import request from "@lib/axios"
import type {
  Contact,
} from "@dTypes/user"

async function fetchUsers(query = "", page = 1) {
  const {
    data,
  } = await request.get(`/get-all-users?query=${query}&page=${page}`)
  return data.data
}

const fetchingState = Array.from({ length: 6 })

export default function useAllUsers() {
  const [searchQuery, setSearchQuery] = useState("")
  const debouncedSearch = useDebounce(searchQuery, 400)

  const {
    data,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery<Array<Contact>>({
    queryKey: [
      "users-list",
      debouncedSearch,
    ],
    queryFn: ({ queryKey: [_, query], pageParam }) => fetchUsers(query as typeof debouncedSearch, pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.length || lastPage.length < allPages[0].length) {
        return null
      }
      return allPages.length + 1
    },
  })

  return {
    users: data?.pages.flat() ?? [],
    isFetching,
    fetchingState: isFetching ? fetchingState : [],
    hasNextPage,
    fetchNextPage,
    searchQuery,
    setSearchQuery,
  }
}
