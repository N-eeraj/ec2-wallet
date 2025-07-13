import {
  use,
} from "react"
import {
  NavLink,
} from "react-router"

import {
  MoveLeft,
} from "lucide-react"
import {
  PaymentContext,
  PaymentView,
} from "@features/transactions/contexts/Payment"
import clsx from "clsx"

function BackAction() {
  const {
    view,
  } = use(PaymentContext)

  return (
    <NavLink
      to="/users"
      className="portrait:absolute portrait:top-4 portrait:md:top-6 portrait:left-4 portrait:md:left-6">
      <button>
        <MoveLeft
          className={clsx(
            "size-6 md:size-8 landscape:size-7 duration-300",
            view === PaymentView.HISTORY && "portrait:text-foreground-primary-inverted",
          )} />
      </button>
    </NavLink>
  )
}

export default BackAction
