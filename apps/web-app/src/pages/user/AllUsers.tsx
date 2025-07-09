import {
  useState,
} from "react"
import {
  useQuery,
} from "@tanstack/react-query"
import Input from "@components/Input"

import request from "@lib/axios"
import {
  useDebounce,
} from "@uidotdev/usehooks"
import type {
  QueryFunctionParams,
} from "@dTypes/query"

async function fetchUsers({ queryKey: [_, query] }: QueryFunctionParams) {
  const {
    data,
  } = await request.get(`/get-all-users?query=${query}`)
  return data.data
}

function NewTransaction() {
  const [searchQuery, setSearchQuery] = useState("")
  const debouncedSearch = useDebounce(searchQuery, 400)

  const {
    data: users,
    isLoading,
  } = useQuery({
    queryKey: [
      "users",
      debouncedSearch,
    ],
    queryFn: fetchUsers,
  })

  return (
    <section className="flex flex-col gap-y-2 max-screen-view-md">
      <Input
        value={searchQuery}
        placeholder="Search user name or phone number"
        className="bg-background-secondary border border-foreground-faded/50 placeholder:font-light"
        onChange={({ target }) => setSearchQuery(target.value)} />

      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {JSON.stringify(user)}
          </li>
        ))}
      </ul>
      {`${isLoading}`}
    </section>
  )
}

export default NewTransaction
