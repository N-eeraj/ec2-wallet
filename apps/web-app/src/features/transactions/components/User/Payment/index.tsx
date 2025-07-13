import ProfilePicture from "@components/ProfilePicture"
import useUserPayment from "@features/transactions/hooks/useUserPayment"
import clsx from "clsx"
import {
  ChevronDown,
} from "lucide-react"

function UserPayment() {
  const {
    user,
    isFetching,
    searchParams,
    view,
    toggleView,
  } = useUserPayment()

  return (
    <section className="portrait:order-1 flex flex-col items-center gap-y-2 landscape:flex-1 w-full">
      <button
        className="landscape:hidden flex items-center gap-x-1.5 px-4 py-1.5 bg-background-secondary text-xs font-light border border-foreground-disabled rounded-full"
        onClick={toggleView}>
          <span>
            {view === "history" ? "Back to Payment" : "View History"}
          </span>
          <ChevronDown
            size={12}
            className={clsx(
              "duration-300",
              view === "history" && "rotate-180",
            )} />
        </button>
      <ProfilePicture
        {...user}
        loading={isFetching} />

      <div>
        Paying&nbsp;
        <strong>
          {user?.name}
        </strong>
      </div>

      {searchParams.get("amount")}
    </section>
  )
}

export default UserPayment
