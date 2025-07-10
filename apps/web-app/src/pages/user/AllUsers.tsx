import Contact from "@components/Contact"
import Input from "@components/Input"
import useAllUsers from "@hooks/useAllUsers"

function NewTransaction() {
  const {
    users,
    isFetching,
    searchQuery,
    setSearchQuery,
  } = useAllUsers()

  return (
    <section className="flex flex-col gap-y-2 max-screen-view-md">
      <Input
        value={searchQuery}
        placeholder="Search user name or phone number"
        className="bg-background-secondary border border-foreground-faded/50 placeholder:font-light"
        onChange={({ target }) => setSearchQuery(target.value)} />

      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="@container/contact">
            <Contact {...user} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default NewTransaction
