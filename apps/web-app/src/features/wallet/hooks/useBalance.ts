import {
  useState,
  useEffect,
} from "react"
import {
  useQuery,
} from "@tanstack/react-query"
import {
  animate,
  useMotionValue,
  useTransform,
} from "motion/react"

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
  const balance = useMotionValue(0)

  const {
    data,
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
    refetch,
  ])

  useEffect(() => {
    if (!isFetching) {
      setPin("")
    }
  }, [
    isFetching,
    balance,
  ])

  useEffect(() => {
    if (data) {
      animate(balance, data, {
        duration: 0.4,
      })
    }
  }, [
    data,
    balance,
  ])

  useEffect(() => {
    if (error) {
      toast.error(getErrorMessage(error))
    }
  }, [
    error,
  ])

  const formattedBalance = useTransform(() => data ? currencyFormat(balance.get()) : null)

  return {
    data,
    showPin,
    setShowPin,
    setPin,
    isFetching,
    formattedBalance,
  }
}
