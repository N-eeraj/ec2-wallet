import {
  useQuery,
} from "@tanstack/react-query"
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
    placeholderData: Array.from({ length: 7 })  as unknown as Array<Contact>,
    queryFn: fetchRecentContacts,
  })

  return {
    data,
    isFetching,
    isError,
    refetch,
  }
}
