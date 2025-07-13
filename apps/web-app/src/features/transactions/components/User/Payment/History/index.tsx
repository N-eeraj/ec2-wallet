import {
  use,
} from "react"
import {
  PaymentContext,
} from "@features/transactions/contexts/Payment"
import clsx from "clsx"

function History() {
  const {
    view,
  } = use(PaymentContext)

  return (
    <div
      className={clsx(
        "w-full landscape:w-3xs portrait:bg-foreground-primary duration-400 origin-top portrait:-z-1",
        view === "payment" ? "portrait:opacity-0 portrait:h-0" : "portrait:h-[60vh]",
      )}>
      History
    </div>
  )
}

export default History
