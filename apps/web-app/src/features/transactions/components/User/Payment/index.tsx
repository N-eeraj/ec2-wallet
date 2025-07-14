import ProfilePicture from "@components/ProfilePicture"
import useUserPayment from "@features/transactions/hooks/useUserPayment"
import {
  PaymentView,
} from "@features/transactions/contexts/Payment"

import Input from "@components/Input"
import SkeletonWrapper from "@components/SkeletonWrapper"
import Button from "@components/Button"
import clsx from "clsx"
import {
  ChevronDown,
  ArrowRight,
} from "lucide-react"
import {
  currencyInput,
} from "@utils/input"

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
      className="portrait:order-1 portrait:flex-1 flex flex-col items-center gap-y-4 md:portrait:gap-y-8 landscape:flex-1 w-full portrait:pt-[clamp(30px,5vh,100px)] md:portrait:pt-20 landscape:pt-8 portrait:px-4"
      onClick={backToPaymentView}>
      <button
        className="landscape:hidden flex items-center gap-x-1.5 px-4 py-1.5 bg-background-secondary text-xs md:portrait:text-sm font-light border border-foreground-disabled rounded-full"
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
          loading={isFetching}
          className="md:portrait:max-w-16" />

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

      <div className="flex flex-col items-center gap-y-3 md:portrait:gap-y-4">
        <Input
          placeholder="Amount"
          containerClassName="w-40"
          autoFocus
          className="text-xl md:portrait:text-3xl text-center outline-0"
          onInput={currencyInput} />

        <textarea
          placeholder="Add note"
          className="max-w-40 h-8 md:portrait:h-9 p-2 bg-background-secondary text-xs md:portrait:text-sm text-center rounded-sm resize-none wrap-anywhere" />

        <Button className="max-md:fixed max-md:bottom-4 max-md:right-4 flex justify-center items-center gap-x-2 md:w-full max-w-40 max-md:aspect-square mt-3 !rounded-md">
          <span className="max-md:hidden">
            Pay
          </span>
          <ArrowRight className="md:hidden size-5" />
        </Button>
      </div>
    </section>
  )
}

export default UserPayment
