import ProfilePicture from "@components/ProfilePicture"
import useUserPayment from "@features/transactions/hooks/useUserPayment"
import {
  PaymentView,
} from "@features/transactions/contexts/Payment"

import Input from "@components/Input"
import SkeletonWrapper from "@components/SkeletonWrapper"
import clsx from "clsx"
import {
  ChevronDown,
} from "lucide-react"
import Skeleton from "react-loading-skeleton"

function UserPayment() {
  const {
    user,
    isFetching,
    view,
    toggleView,
    backToPaymentView,
  } = useUserPayment()

  return (
    <section
      className="portrait:order-1 portrait:flex-1 flex flex-col items-center gap-y-4 landscape:flex-1 w-full portrait:pt-4 portrait:md:pt-6 portrait:px-4"
      onClick={backToPaymentView}>
      <button
        className="landscape:hidden flex items-center gap-x-1.5 px-4 py-1.5 bg-background-secondary text-xs font-light border border-foreground-disabled rounded-full"
        onClick={toggleView}>
        <span>
          {view === PaymentView.HISTORY ? "Back to Payment" : "View History"}
        </span>
        <ChevronDown
          size={12}
          className={clsx(
            "duration-300",
            view === PaymentView.HISTORY && "rotate-180",
          )} />
      </button>

      <div className="flex flex-col items-center gap-y-2 w-full">
        <ProfilePicture
          {...user}
          loading={isFetching} />

        <div className="flex items-center">
          Paying&nbsp;
          <SkeletonWrapper
            loading={isFetching}
            containerClassName="shrink-0 w-32 h-6">
            <strong>
              {user?.name}
            </strong>
          </SkeletonWrapper>
        </div>
      </div>

      <Input
        className="text-center" />
    </section>
  )
}

export default UserPayment
