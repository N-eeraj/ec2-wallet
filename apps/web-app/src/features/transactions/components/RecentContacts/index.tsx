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

  return (
    <section className="landscape:row-span-2 md:col-span-2 landscape:col-span-1 flex flex-col gap-y-3">
      <h3>
        Recent Contacts
      </h3>

      {isError ? (
        <Error onRetry={() => refetch()} />
        ): (
          <ul className="grid grid-cols-4 md:grid-cols-8 landscape:grid-cols-4">
            {data?.map((contact, index) => (
              <li key={isFetching ? index : contact.id}>
                {isFetching ? (
                  <div>
                    Loading
                  </div>
                ): (
                  <Contact {...contact} />
                )}
              </li>
            ))}
          </ul>
        )
      }
    </section>
  )
}

export default RecentContacts
