import {
  use,
  type MouseEventHandler,
} from "react"
import {
  PaymentContext,
  PaymentView,
} from "@features/transactions/contexts/Payment"
import {
  ChevronDown,
} from "lucide-react"
import clsx from "clsx"

function ViewToggle() {
  const {
    view,
    setView,
  } = use(PaymentContext)

  const toggleView: MouseEventHandler = (event) => {
    event.stopPropagation()
    setView(view === PaymentView.HISTORY ? PaymentView.PAYMENT : PaymentView.HISTORY)
  }
  
  return (
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
  )
}

export default ViewToggle
