import {
  useQuery,
} from "@tanstack/react-query"
import {
  RECENT_CONTACTS_LIMIT,
} from "@features/transactions/constants"
import request from "@lib/axios"

export interface Contact {
  id: string
  name: string
  phone: string
}

async function fetchRecentContacts() {
  const {
    data,
  } = await request.get("/get-data")
  return data
}

const placeholderData = Array.from({ length: RECENT_CONTACTS_LIMIT + 1 })  as unknown as Array<Contact>

export default function useRecentContacts() {
  const {
    data,
    isFetching,
    isError,
    refetch,
  } = useQuery<Array<Contact>>({
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
