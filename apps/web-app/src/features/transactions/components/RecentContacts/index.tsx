import Error from "@features/transactions/components/RecentContacts/Error"
import useRecentContacts from "@features/transactions/hooks/useRecentContacts"
import Contact from "@components/Contact"

function RecentContacts() {
  const {
    data,
    isFetching,
    isError,
    refetch,
  } = useRecentContacts()

  if (isError) return <Error onRetry={() => refetch()} />

  return (
    <section className="landscape:row-span-2 md:col-span-2 landscape:col-span-1 flex flex-col gap-y-3">
      <h3 className="text-foreground-secondary text-lg md:text-xl landscape:text-lg font-semibold">
        Recent Contacts
      </h3>

      <ul className="grid grid-cols-4 md:grid-cols-2 landscape:grid-cols-1 gap-4 md:gap-x-8 md:gap-y-6">
        {data?.map((contact, index) => (
          <li key={contact?.id ?? index}>
            <Contact
              {...contact}
              loading={isFetching} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default RecentContacts
