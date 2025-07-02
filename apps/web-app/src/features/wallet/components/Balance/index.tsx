import {
  NavLink,
} from "react-router"
import EnterPin from "@features/pin/components/EnterPin"
import useBalance from "@features/wallet/hooks/useBalance"

import Button from "@components/Button"
import {
  Zap,
  RefreshCcw,
} from "lucide-react"
import clsx from "clsx"

function Wallet() {
  const {
    balance,
    showPin,
    setShowPin,
    setPin,
    isFetching,
    formattedBalance,
  } = useBalance()

  return (
    <>
      <div className="grid grid-cols-[1fr_auto] grid-rows-[auto_1fr] aspect-[2] p-3 md:p-3.5 bg-gradient-to-br from-primary-default to-primary-hover rounded-xl">
        <h3 className="text-xl md:text-2xl landscape:text-xl">
          Balance
        </h3>
        <NavLink to="/recharge-wallet">
          <button className="flex items-center gap-x-1 md:gap-x-1.5 landscape:gap-x-1">
            <small className="text-foreground-primary/80 md:text-base landscape:text-sm">
              Recharge
            </small>
            <div className="size-6 p-1 bg-foreground-primary text-foreground-primary-inverted rounded-full">
              <Zap className="size-4" />
            </div>
          </button>
        </NavLink>

        <div className="col-span-2 flex items-end gap-x-1.5">
          {balance === null ? (
              <Button
                loading={isFetching}
                className="!bg-foreground-primary text-foreground-primary-inverted"
                onClick={() => setShowPin(true)}>
                Check Balance
              </Button>
            ): (
              <>
                <strong className="text-3xl leading-tight truncate">
                  {formattedBalance}
                </strong>
                <button
                  disabled={isFetching}
                  className={clsx(
                    "bg-background-secondary p-1 rounded-full",
                    isFetching && "animate-spin opacity-50",
                  )}
                  onClick={() => setShowPin(true)}>
                  <RefreshCcw className="size-4" />
                </button>
              </>
            )
          }
        </div>
      </div>

      {showPin && (
        <EnterPin
          onSubmit={setPin}
          onClose={() => setShowPin(false)} />
      )}
    </>
  )
}

export default Wallet
