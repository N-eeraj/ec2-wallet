import Contact from "@components/Contact"
import {
  USERS_LIST_FETCH_LIMIT,
} from "@constants/users"
import type {
  Contact as ContactType,
} from "@dTypes/user"

interface Props {
  users: Array<ContactType>
  loading?: boolean
}

const fetchingState = Array.from({ length: USERS_LIST_FETCH_LIMIT })

function UsersList({ users, loading }: Props) {
  return (
    <ul className="space-y-2">
      {users.map((user) => (
        <li
          key={user.id}
          className="@container/contact">
          <Contact {...user} />
        </li>
      ))}

      {loading && fetchingState.map((_, index) => (
        <li
          key={index}
          className="@container/contact">
          <Contact loading />
        </li>
      ))}
    </ul>
  )
}

export default UsersList
