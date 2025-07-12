import Input from "@components/Input"
import UsersList from "@/components/UsersList"
import useAllUsers from "@hooks/useAllUsers"

function NewTransaction() {
  const {
    users,
    isFetching,
    searchQuery,
    setSearchQuery,
    infiniteRef,
  } = useAllUsers()

  return (
    <section className="flex flex-col gap-y-2 max-screen-view-md">
      <Input
        value={searchQuery}
        placeholder="Search user name or phone number"
        className="bg-background-secondary border border-foreground-faded/50 placeholder:font-light"
        onChange={({ target }) => setSearchQuery(target.value)} />

      <UsersList
        users={users}
        loading={isFetching} />

      <div ref={infiniteRef} />
    </section>
  )
}

export default NewTransaction
