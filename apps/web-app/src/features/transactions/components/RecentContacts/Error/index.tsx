import {
  type MouseEventHandler,
} from "react"
import Button from "@components/Button"
import {
  CircleX,
} from "lucide-react"
import {
  RECENT_CONTACTS_ERROR_MESSAGE,
} from "@features/transactions/constants"

interface Props {
  onRetry: MouseEventHandler<HTMLButtonElement>
}

function Error({ onRetry }: Props) {
  return (
    <div className="flex flex-col gap-y-2.5">
      <span className="flex items-center gap-x-1.5 px-3 py-2.5 bg-background-error text-foreground-error text-sm">
        <CircleX />
        {RECENT_CONTACTS_ERROR_MESSAGE}
      </span>
      <Button
        className="!bg-foreground-primary text-primary-default"
        onClick={onRetry}>
        Try Again
      </Button>
    </div>
  )
}

export default Error
