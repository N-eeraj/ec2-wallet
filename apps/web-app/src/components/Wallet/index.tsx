import {
  useState,
  useEffect,
  useMemo,
} from "react"
import {
  NavLink,
} from "react-router"
import {
  useQuery,
} from "@tanstack/react-query"

import EnterPin from "@features/pin/components/EnterPin"
import Button from "@components/Button"
import request from "@lib/axios"
import loaderStore from "@stores/loader"
import {
  Zap,
  RefreshCcw,
} from "lucide-react"
import {
  toast,
} from "sonner"
import clsx from "clsx"
import currencyFormat from "@utils/currencyFormat"
import {
  getErrorMessage,
} from "@utils/request"

function Wallet() {
  const [showPin, setShowPin] = useState(false)
  const [pin, setPin] = useState("")

  const startLoading = loaderStore(({ startLoading }) => startLoading)
  const stopLoading = loaderStore(({ stopLoading }) => stopLoading)


  const fetchBalance = async () => {
    try {
      const {
        data,
      } = await request.post("/get-balance", {
        pin,
      })
      return data.data.balance
    } catch (error) {
      toast.error(getErrorMessage(error))
      return null
    }
  }

  const {
    data: balance,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: [
      "wallet-balance"
    ],
    queryFn: fetchBalance,
    initialData: null,
    enabled: false,
  })

  useEffect(() => {
    if (isFetching) {
      startLoading()
    } else {
      stopLoading()
      setShowPin(false)
      setPin("")
    }
  }, [
    isFetching,
  ])

  useEffect(() => {
    if (pin) {
      refetch()
    }
  }, [
    pin,
  ])

  const formattedBalance = useMemo(() => {
    return currencyFormat(balance)
  }, [
    balance,
  ])

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
