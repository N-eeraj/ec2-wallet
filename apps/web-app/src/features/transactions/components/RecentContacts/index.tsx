import Error from "@features/transactions/components/RecentContacts/Error"
import useRecentContacts from "@features/transactions/hooks/useRecentContacts"
import Contact from "@components/Contact"
import {
  RECENT_CONTACTS_EMPTY_MESSAGE,
} from "@features/transactions/constants"

function RecentContacts() {
  const {
    data,
    isFetching,
    isError,
    refetch,
  } = useRecentContacts()

  if (isError) return <Error onRetry={() => refetch()} />

  return (
    <section className="landscape:row-span-2 md:col-span-2 landscape:col-span-1 flex flex-col gap-y-1">
      <h3 className="text-foreground-secondary text-lg md:text-xl landscape:text-lg font-semibold">
        Recent Contacts
      </h3>

      {data?.length ? (
        <ul className="grid grid-cols-3 md:grid-cols-2 landscape:grid-cols-1 gap-4 md:gap-x-8 md:gap-y-4 landscape:gap-y-1 mt-2">
          {data.map((contact, index) => (
            <li
              key={contact?.id ?? index}
              className="@container/contact">
              <Contact
                {...contact}
                loading={isFetching} />
            </li>
          ))}
        </ul>
        ) : (
          <span className="text-foreground-disabled text-center md:text-start">
            {RECENT_CONTACTS_EMPTY_MESSAGE}
          </span>
        )
      }
    </section>
  )
}

export default RecentContacts
