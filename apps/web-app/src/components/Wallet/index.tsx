import Button from "@components/Button"
import {
  Zap,
  RefreshCcw,
} from "lucide-react"

function Wallet() {
  const balance = 1_000_000_000_000
  const formattedBalance = Intl.NumberFormat("en-IN", {
    style: "decimal",
    maximumSignificantDigits: 2,
  }).format(balance)

  return (
    <div className="grid grid-cols-[1fr_auto] grid-rows-[auto_1fr] aspect-[2] p-3 bg-gradient-to-br from-primary-default to-primary-hover rounded-xl">
      <h3 className="text-xl">
        Balance
      </h3>
      <button className="flex items-center gap-x-1">
        <small className="text-foreground-primary/80">
          Recharge
        </small>
        <div className="size-6 p-1 bg-foreground-primary text-foreground-primary-inverted rounded-full">
          <Zap className="size-4" />
        </div>
      </button>
      <div className="col-span-2 flex items-end gap-x-1.5">
        <Button
          className="!bg-foreground-primary text-foreground-primary-inverted">
          Check Balance
        </Button>
        {/* <strong className="text-3xl leading-tight truncate">
          {formattedBalance}
        </strong>
        <button className="bg-background-secondary p-1 rounded-full">
          <RefreshCcw className="size-4" />
        </button> */}
      </div>
    </div>
  )
}

export default Wallet
