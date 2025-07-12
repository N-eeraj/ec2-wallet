import {
  useState,
} from "react"
import {
  useInfiniteQuery,
} from "@tanstack/react-query"

import {
  useDebounce,
} from "@uidotdev/usehooks"
import useInfiniteScroll from "react-infinite-scroll-hook"
import request from "@lib/axios"
import {
  USERS_LIST_FETCH_LIMIT,
} from "@constants/users"
import type {
  Contact,
} from "@dTypes/user"

async function fetchUsers(query = "", offset = 0) {
  const {
    data,
  } = await request.get(`/get-all-users?query=${query}&offset=${offset}&limit=${USERS_LIST_FETCH_LIMIT}`)
  return data.data
}

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
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.length || lastPage.length < USERS_LIST_FETCH_LIMIT) {
        return null
      }
      return allPages.flat().length
    },
  })

  const [infiniteRef] = useInfiniteScroll({
    loading: isFetching,
    hasNextPage,
    onLoadMore: fetchNextPage,
  })

  return {
    users: data?.pages.flat() ?? [],
    isFetching,
    hasNextPage,
    fetchNextPage,
    searchQuery,
    setSearchQuery,
    infiniteRef,
  }
}
