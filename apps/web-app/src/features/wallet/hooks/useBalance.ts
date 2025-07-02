import {
  useState,
  useEffect,
  useMemo,
} from "react"
import {
  useQuery,
} from "@tanstack/react-query"

import request from "@lib/axios"
import loaderStore from "@stores/loader"
import {
  toast,
} from "sonner"
import currencyFormat from "@utils/currencyFormat"
import {
  getErrorMessage,
} from "@utils/request"

export default function useBalance() {
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

  return {
    balance,
    showPin,
    setShowPin,
    setPin,
    isFetching,
    formattedBalance,
  }
}
