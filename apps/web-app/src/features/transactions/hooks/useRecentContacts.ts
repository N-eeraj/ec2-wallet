import {
  useQuery,
} from "@tanstack/react-query"
import {
  RECENT_CONTACTS_LIMIT,
} from "@features/transactions/constants"
import request from "@lib/axios"
import type {
  Contact,
} from "@dTypes/user"

async function fetchRecentContacts() {
  const {
    data,
  } = await request.get(`/transactions/recent-users?limit=${RECENT_CONTACTS_LIMIT}`)
  return data.data
}

const placeholderData = Array.from({ length: RECENT_CONTACTS_LIMIT }) as Array<null>

export default function useRecentContacts() {
  const {
    data,
    isFetching,
    isError,
    refetch,
  } = useQuery<Array<Contact> | Array<null>>({
    queryKey: [
      "transactions",
      "recent-users",
    ],
    placeholderData,
    queryFn: fetchRecentContacts,
  })

  return {
    data,
    isFetching,
    isError,
    refetch,
  }
}
