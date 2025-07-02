import useRecentContacts from "@features/transactions/hooks/useRecentContacts"
import Contact from "@components/Contact"
import Button from "@components/Button"
import {
  CircleX,
} from "lucide-react"

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
          <div className="flex flex-col gap-y-2.5">
            <span className="flex items-center gap-x-1.5 px-3 py-2.5 bg-background-error text-foreground-error text-sm">
              <CircleX />
              Failed to fetch recent contacts!
            </span>
            <Button
              className="!bg-foreground-primary text-primary-default"
              onClick={() => refetch()}>
              Try Again
            </Button>
          </div>
        ): (
          <ul>
            {isFetching ? (
                <>
                  {data?.map(() => (
                    <li>
                      Loading...
                    </li>
                  ))}
                </>
              ): (
                data?.map((contact) => (
                  <li key={contact.id}>
                    <Contact {...contact} />
                  </li>
                ))
              )
            }
          </ul>
        )
      }
    </section>
  )
}

export default RecentContacts
