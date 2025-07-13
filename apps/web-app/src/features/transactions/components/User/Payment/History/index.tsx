import {
  use,
} from "react"
import {
  PaymentContext,
  PaymentView,
} from "@features/transactions/contexts/Payment"
import clsx from "clsx"

function History() {
  const {
    view,
  } = use(PaymentContext)

  return (
    <div
      className={clsx(
        "w-full landscape:w-3xs portrait:bg-foreground-primary portrait:text-foreground-primary-inverted portrait:duration-400 origin-top portrait:-z-1",
        view === PaymentView.PAYMENT ? "portrait:-translate-y-full portrait:h-0 portrait:opacity-0" : "portrait:h-3/5",
      )}>
      History
    </div>
  )
}

export default History
