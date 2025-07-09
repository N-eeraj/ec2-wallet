import {
  useState,
  useEffect,
  useMemo,
} from "react"
import {
  useQuery,
} from "@tanstack/react-query"

import request from "@lib/axios"
import {
  toast,
} from "sonner"
import currencyFormat from "@utils/currencyFormat"
import {
  getErrorMessage,
} from "@utils/request"

async function fetchBalance(pin: string) {
  const {
    data,
  } = await request.post("/get-balance", {
    pin,
  })
  return data.data.balance
}

export default function useBalance() {
  const [showPin, setShowPin] = useState(false)
  const [pin, setPin] = useState("")

  const {
    data: balance,
    refetch,
    isFetching,
    error,
  } = useQuery<number | null>({
    queryKey: [
      "wallet-balance"
    ],
    queryFn: () => fetchBalance(pin),
    initialData: null,
    enabled: false,
  })

  useEffect(() => {
    if (pin) {
      setShowPin(false)
      refetch()
    }
  }, [
    pin,
  ])

  useEffect(() => {
    if (!isFetching) {
      setPin("")
      if (error) {
        toast.error(getErrorMessage(error))
      }
    }
  }, [
    isFetching,
    error,
  ])

  const formattedBalance = useMemo(() => {
    return currencyFormat(balance)
  }, [
    balance,
  ])

  return {
    balance,
    showPin,
    setShowPin,
    setPin,
    isFetching,
    formattedBalance,
  }
}
